import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

const Hero = () => {
  const { mobileBanner, desktopBanner } = useStaticQuery(
    graphql`
      query {
        mobileBanner: file(relativePath: { eq: "single-bowl-cropped.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        desktopBanner: file(
          relativePath: { eq: "tom-crew-t9sRlYIzfIQ-unsplash.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const source = [
    mobileBanner.childImageSharp.fluid,
    {
      ...desktopBanner.childImageSharp.fluid,
      media: `(min-width: 750px)`,
    },
  ]

  return (
    <div className="sticky top ">
      <BackgroundImage
        className="w-full bg-fixed max-w-4xl flex flex-col justify-center md:justify-evenly hero items-start h-full"
        fluid={source}
      >
        <div className="flex p-6 md:items-start flex-col w-2/3 md:w-1/2 md:p-5 ">
          <h2 className="text-4xl md:text-5xl garamond underlined text-gray-300">
            Affordable original handmade pottery.
          </h2>{" "}
          <h1 className="text-2xl md:text-3xl chivo-reg text-gray-500 mt-8 ">
            Nordic Collection
          </h1>{" "}
          <Link
            className=" chivo-reg uppercase mt-8 text-xl text-center text-gray-200 border-teal-600 shadow-md border-2 py-2 px-3 whitespace-no-wrap bg-teal-600 border-gray-700 hover:bg-teal-800 hover:border-teal-800 transition-all duration-75"
            to="/contact"
          >
            Shop Now
          </Link>
        </div>
      </BackgroundImage>
    </div>
  )
}

// const StyledHeroImages = styled(HeroImages)`
//   height: 90vh;
//   @media (min-width: 750px) {
//     height: 75px;
//   }
// `

export default Hero
