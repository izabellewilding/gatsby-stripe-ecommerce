import React from "react"
import Img from "gatsby-image"
import Layout from "../components/index-layout"
import Helmet from "react-helmet"
import Loader from "../components/hero"

const ArtGallery = ({ data }) => {
  console.log("MY LOG", data)
  return (
    <Layout page="home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Original Handmade Art | By Izabelle Wilding</title>
        <meta name="Artwork by Izabelle Wilding" content="Helmet application" />
      </Helmet>

      <div
        className="w-full h-full top relative m-auto footer-padding"
        style={{ zIndex: 4000 }}
      >
        <div className="flex flex-wrap justify-center max-w-6xl m-auto sticky bg-white">
          {data.allFile.edges.map(({ node }) => (
            <div className=" square photo">
              <Img
                fluid={node.childImageSharp.fluid}
                className=" img-item w-full h-full"
                style={{ position: "absolute" }}

                // alt="Robin in the Woods"
              />
              <div className="chivo-reg image-title absolute left-0 right-0">
                {/* <p>Robin Duo on Thin Board - Unframed</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "art-images" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(maxWidth: 1600) {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
              originalImg
              originalName
            }
          }
        }
      }
    }
  }
`

export default ArtGallery
