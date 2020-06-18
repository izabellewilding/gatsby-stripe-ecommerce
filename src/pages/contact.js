import React from "react"
import { navigate } from "gatsby-link"
import Layout from "../components/layout"
import LatestItems from "../components/shop/latest-items"
import Map from "../components/map"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Banner from "../components/contact-banner"
import ContactRefactored from "./contact-refactored"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  render() {
    return (
      <div
        className="p-6 md:my-16  md:shadow-md flex flex-wrap border-white rounded-md w-full"
        style={{ maxWidth: 1000 }}
      >
        <section className=" w-full">
          <div className="font-sans pl-3">
            <Typography variant="h3">Contact </Typography>
          </div>
          <form
            name="contact"
            method="post"
            action="/thanks"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
            className="mt-6 font-sans p-2 mb-0 "
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>
                Don’t fill this out:
                <input name="bot-field" onChange={this.handleChange} />
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
                    className={"w-full "}
                    onChange={this.handleChange}
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
                    className={"w-full"}
                    onChange={this.handleChange}
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
                  className="w-full"
                  name={"message"}
                  onChange={this.handleChange}
                  id={"message"}
                  required={true}
                />
              </div>
            </div>
            <div className="field flex justify-end  mt-4">
              <Button
                variant="contained"
                size="large"
                color="secondary"
                className="w-full"
              >
                Send
              </Button>
            </div>
          </form>
        </section>
        <section className="w-full mt-12 flex flex-col justify-center items-center">
          <Typography variant="h3">Or find us in store...</Typography>
          <Map />
        </section>
      </div>
    )
  }
}

const ContactPage = () => {
  return (
    <Layout>
      {" "}
      <Banner />
      <div className=" flex flex-col ">
        <section className="flex justify-center md:w-4/6  m-auto">
          <ContactForm />
        </section>
        <aside className="">
          <LatestItems />
        </aside>
        <ContactRefactored />
      </div>
    </Layout>
  )
}

export default ContactPage
