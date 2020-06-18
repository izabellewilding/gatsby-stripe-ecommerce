import React, { useState } from "react"
import { navigate } from "gatsby-link"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const ContactRefactored = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()
  const [botField, setBotField] = useState()
  const [submitting, setSubmitting] = useState(false)

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitting(true)
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        name,
        email,
        message,
        botField,
      }),
    })
      .then(() => {
        navigate(form.getAttribute("action"))
      })
      .catch(error => alert(error))
      .finally(() => setSubmitting(false))
  }

  return (
    <div
      className="p-6 md:my-16  md:shadow-md flex flex-wrap border-white rounded-md w-full"
      style={{ maxWidth: 1000 }}
    >
      <section className=" w-full">
        <div className="font-sans pl-3">
          <Typography variant="h3">Contact</Typography>
        </div>
        <form
          name="contact"
          action="/thanks"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="mt-6 font-sans p-2 mb-0 "
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <label>
              Don’t fill this out:
              <input
                name="bot-field"
                value={botField}
                onChange={e => setBotField(e.target.value)}
              />
            </label>
          </div>
          <div className="flex flex-col md:flex-row justify-between text-gray-100 mb-3">
            <div className="field w-full md:w-2/5 text-gray-800">
              {/* <label className="mb-6" htmlFor={"name"}>
                  Your name
                </label> */}
              <div className="control mb-3 md:mb-0">
                <TextField
                  variant="outlined"
                  label="Name"
                  color="secondary"
                  type={"text"}
                  name={"name"}
                  value={name}
                  className={"w-full "}
                  onChange={e => setName(e.target.value)}
                  id={"name"}
                  required={true}
                />
              </div>
            </div>
            <div className="field w-full md:w-2/4 text-gray-800">
              {/* <label className="label" htmlFor={"email"}>
                  Email
                </label> */}
              <div className="control">
                <TextField
                  variant="outlined"
                  label="Email"
                  color="secondary"
                  type={"email"}
                  name={"email"}
                  vaule={email}
                  className={"w-full"}
                  onChange={e => setEmail(e.target.value)}
                  id={"email"}
                  required={true}
                />
              </div>
            </div>
          </div>
          <div className="field">
            {/* <label className="label" htmlFor={"message"}>
                Message
              </label> */}
            <div className="control">
              <TextField
                variant="outlined"
                multiline
                rows={3}
                color="secondary"
                label="Message"
                value={message}
                className="w-full"
                name={"message"}
                onChange={e => setMessage(e.target.value)}
                id={"message"}
                required={true}
              />
            </div>
          </div>
          <div className="field flex justify-end  mt-4">
            <Button
              disabled={submitting}
              variant="contained"
              size="large"
              type="submit"
              color="secondary"
              className="w-full"
            >
              {submitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </section>
      <section className="w-full mt-12 flex flex-col justify-center items-center">
        <Typography variant="h3">Or find us in store...</Typography>
      </section>
    </div>
  )
}

export default ContactRefactored
