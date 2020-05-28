import React, { useState, useEffect } from "react"
import cx from "classnames"

const Hero = () => {
  const [isInvisible, setIsInvisible] = useState(false)

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setIsInvisible(true)
  //     }, 3000)
  //   }, [])

  return (
    <div className="sticky top hero">
      <section className=" h-65vh justify-center items-center overflow-hidden "></section>
    </div>
  )
}

export default Hero
