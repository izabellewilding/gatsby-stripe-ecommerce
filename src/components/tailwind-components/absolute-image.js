import React from "react"
import Img from "gatsby-image"

const AbsoluteImage = props => {
  return (
    <Img
      {...props}
      className="w-full bg-fixed absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center md:justify-evenly hero items-start h-screen"
    />
  )
}

export default AbsoluteImage
