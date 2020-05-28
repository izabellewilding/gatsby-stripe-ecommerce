import React from "react"

const SuccessNotification = () => {
  return (
    <div className="top relative bg-white footer-padding flex justify-center flex-col m-auto my-12 p-4">
      <h1 className=" text-gray-800 text-6xl garamond pb-4">
        Thank you for your order!
      </h1>
      <div className="chivo-reg">Your refernce number is: </div>
    </div>
  )
}

export default SuccessNotification
