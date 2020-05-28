import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// Note: You can change "images" to whatever you'd like.

const Images = ({ render }) => (
  <StaticQuery
    query={graphql`
      query {
        large: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1400, quality: 50) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        medium: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1000, quality: 50) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        small: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 500, quality: 50) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }

        xsmall: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 300, quality: 50) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={render}
  />
)

const Image = ({ type = "large", src = "", fileName, ...props }) => {
  const imageFolderSrc =
    src.split("images/").length === 2 && src.split("images/")[1]
  const render = data => {
    const image = data[type].edges.find(n => {
      return n.node.relativePath.includes(imageFolderSrc || fileName || src)
    })

    // if (src.indexOf(".gif") || src.indexOf(".svg")) {
    //   throw new Error(
    //     "SVG (.svg) and GIF (.gif) filetypes are not allowed. Try using a PNG or JPG"
    //   )
    // }

    if (!image) {
      throw new Error(`The src value ${src.split("images/")[1]} was not found.
        Look in the src/images directory to check the filename`)
    }

    return <Img {...props} fluid={image.node.childImageSharp.fluid} />
  }

  return <Images render={render} />
}

export default Image
