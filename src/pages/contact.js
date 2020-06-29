import React, { useState } from "react"
import { navigate } from "gatsby-link"
import Layout from "../components/layout"
import LatestItems from "../components/shop/latest-items"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Banner from "../components/contact-banner"
import Map from "../components/map"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactForm = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()
  const [botField, setBotField] = useState()
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = e => {
    e.preventDefault() //default would be to refresh page and navigte to /thanks
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
      className="p-6 flex flex-wrap border-white w-full"
      style={{ maxWidth: 1000 }}
    >
      {/* <div className="font-sans pl-3 flex align-bottom">
        <Typography className="" variant="h3">
          Contact
        </Typography>
      </div> */}
      <section className="w-full flex align-middle justify-center">
        <form
          name="contact"
          action="/thanks"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className=" font-sans mb-0 w-full p-4 "
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
            <div className="field w-full text-gray-800 email-field">
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
    </div>
  )
}

const ContactPage = () => {
  return (
    <Layout>
      {" "}
      <Banner />
      <div className="align-top justify-center md:flex-row max-w-6xl ml-auto mr-auto">
        <section className="flex justify-center w-full md:w-2/3 m-auto">
          <ContactForm />
        </section>
        <section className="w-full flex flex-col align-center  m-auto md:w-1/2 justify-center items-center">
          <Map />
        </section>
      </div>
      <aside className="">
        <LatestItems />
      </aside>
    </Layout>
  )
}

export default ContactPage
