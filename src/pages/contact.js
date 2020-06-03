import React from "react"
import { navigate } from "gatsby-link"
import Layout from "../components/layout"
import LatestItems from "../components/latest-items"
import Map from "../components/map"

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
      <div className="p-6 md:my-16 bg-gray-300 md:bg-white md:shadow-md flex flex-wrap border-white rounded-md w-full ">
        <section className="w-1/2">
          <div className="font-sans">
            <h1 className="text-3xl chivo-reg ml-4 mb-4 uppercase text-gray-800 text-center inline ">
              Contact{" "}
            </h1>
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
            <div className="flex flex-col md:flex-row justify-between text-gray-100">
              <div className="field w-full md:w-2/5 text-gray-800">
                <label className="mb-6" htmlFor={"name"}>
                  Your name
                </label>
                <div className="control">
                  <input
                    className="appearance-none mt-3 hover:border-teal-400  block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type={"text"}
                    name={"name"}
                    onChange={this.handleChange}
                    id={"name"}
                    required={true}
                  />
                </div>
              </div>
              <div className="field w-full md:w-2/4 text-gray-800">
                <label className="label" htmlFor={"email"}>
                  Email
                </label>
                <div className="control">
                  <input
                    className="appearance-none mt-3 hover:border-teal-400  block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type={"email"}
                    name={"email"}
                    onChange={this.handleChange}
                    id={"email"}
                    required={true}
                  />
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor={"message"}>
                Message
              </label>
              <div className="control">
                <textarea
                  className="appearance-none mt-3 shadow-sm hover:border-teal-400  block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  name={"message"}
                  onChange={this.handleChange}
                  id={"message"}
                  required={true}
                />
              </div>
            </div>
            <div className="field flex justify-end">
              <button
                className="mt-2 button w-full text-lightPrimary chivo-reg uppercase hover:bg-gray-300 hover:shadow-sm bg-gray-800 hover:text-gray-800 text-white mb-6 rounded p-2 whitespace-no-wrap"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </section>
        <section className="w-1/2 flex justify-center items-center">
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
      <div className=" flex flex-col bg-gray-300 ">
        <section className="flex justify-center w-screen md:max-w-4xl m-auto">
          <ContactForm />
        </section>
        <aside className="">
          <LatestItems />
        </aside>
      </div>
    </Layout>
  )
}

export default ContactPage
