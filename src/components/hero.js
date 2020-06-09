import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Button from "@material-ui/core/Button"

const Hero = () => {
  const { mobileBanner, desktopBanner } = useStaticQuery(
    graphql`
      query {
        mobileBanner: file(
          relativePath: { eq: "jessica-ruscello-G8vPQ-XVxxY-unsplash.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        desktopBanner: file(
          relativePath: { eq: "jessica-ruscello-G8vPQ-XVxxY-unsplash.jpg" }
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
    <div className="sticky top bg-gray-900">
      <BackgroundImage
        style={{ backgroundPosition: "left" }}
        className="w-full bg-fixed fixed  flex flex-col justify-center md:justify-evenly hero items-start h-full"
        fluid={source}
      >
        <div className="w-full max-w-6xl  fixed">
          <div className="flex p-6 text-center m-auto flex-col">
            <h2 className="text-4xl md:text-4xl raleway uppercase underlined text-white">
              Affordable handmade pottery
            </h2>{" "}
            <h1 className="text-xl md:text-3xl chivo-reg text-white my-8">
              Get 15% off our new collection with code PASTEL01
            </h1>{" "}
            <Link to="/shop-home" className="">
              <Button variant="contained" size="large" color="secondary">
                Shop Now
              </Button>
            </Link>
          </div>
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
