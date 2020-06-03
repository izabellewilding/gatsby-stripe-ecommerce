import React from "react"
import Img from "gatsby-image"
import Layout from "../components/index-layout"
import Helmet from "react-helmet"
import Loader from "../components/hero"
import InfoBar from "../components/info-bar"

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
        style={{}}
      >
        <InfoBar />
        <h1 className="p-8 text-center bg-white text-2xl max-w-6xl raleway uppercase text-gray-900 mr-auto ml-auto">
          Browse the Pastel Gallery
        </h1>
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
    allFile(filter: { sourceInstanceName: { eq: "home-display-items" } }) {
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
