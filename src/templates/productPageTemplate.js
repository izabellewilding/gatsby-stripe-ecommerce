import React, { useContext } from "react"
import { Link } from "gatsby"
import { loadStripe } from "@stripe/stripe-js"
import { CartContext } from "../components/shop/context.js"
import Img from "../components/image"
import Layout from "../components/layout"
import Helmet from "react-helmet"

const stripePromise = loadStripe("pk_test_mLs1oZpbyJJL6FsDwf84KHyg00KrDIpfUW")

const Template = ({ pageContext }) => {
  const ctx = useContext(CartContext)
  console.warn("MY LOG 3", pageContext)

  return (
    // <StaticQuery
    //   query={graphql`
    //     query pageContextsForProducts($id: String) {
    //       pageContexts: allStripepageContext {
    //         edges {
    //           node(id: { eq: $id }) {
    //             id
    //             price
    //             currency
    //             attributes {
    //               name
    //             }
    //           }
    //         }
    //       }
    //     }
    //   `}
    // render={({ data: { node } }) => (
    // console.warn('SKEWER', pageContext)

    <Layout stripePromise={stripePromise}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Original Handmade Art | By Izabelle Wilding</title>
        <meta
          name={pageContext.node.attributes.name}
          content="Helmet application"
        />
      </Helmet>
      <div className="top footer-padding relative bg-white w-screen py-6 flex m-auto justify-center">
        <div className="flex flex-col md:flex-row bg-white overflow-hidden md:w-3/5  shadow-md">
          <div className="w-full">
            <Img
              src={`/images/${pageContext.node.id}.jpg`}
              className="h-64 m-4"
            />
          </div>
          <div className="w-full p-4 flex flex-col justify-between">
            <h1 className="text-gray-900 font-bold text-2xl garamond">
              {pageContext.node.attributes.name}
            </h1>
            <h1 className="text-gray-700 font-bold garamond">
              {ctx.formatPrice(
                pageContext.node.price,
                pageContext.node.currency
              )}
            </h1>
            <p className="mt-2 text-gray-700 text-sm garamond">
              Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
              exercitationem fuga id nam quia
            </p>
            <div className="flex item-center mt-2"></div>
            <div className="flex item-center justify-between mt-3">
              <button
                className="chivo-reg uppercase text-xs bg-gray-800 text-white border-gray-800 border-2 hover:bg-white hover:text-gray-800 py-2 px-3 whitespace-no-wrap"
                onClick={() => {
                  ctx.addToCart(pageContext.node)
                }}
              >
                {" "}
                Add to Cart
              </button>
              <Link
                className="chivo-reg uppercase text-xs border-gray-800 border-2 hover:bg-white hover:text-gray-800 bg-gray-800 text-white py-2 px-3 whitespace-no-wrap"
                to="/checkout"
              >
                Checkout{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// export const pageQuery = graphql`
//   query($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         path
//       }
//     }
//   }

export default Template
