import React from "react"

const InfoBar = () => {
  return (
    <div className="flex md:flex-row flex-col bg-gray-900 justify-evenly max-w-6xl text-yellow-100 m-auto chivo-reg">
      <div className="md:w-1/3 bg-gray-900 p-4 flex justify-center items-center bg-gray-900 opacity-95">
        <div className="ml-2">
          <div className="text-xl uppercase leading-8">Free shipping</div>
          <div>On orders over £35</div>
        </div>
      </div>
      <div className="md:w-1/3 p-4 flex justify-center opacity-95 text-center items-center bg-gray-900">
        <div className="ml-2">
          <div className="text-xl uppercase leading-8">Online Ordering</div>
          <div>Convenient shopping 24/7</div>
        </div>
      </div>
      <div className="md:w-1/3 p-4 flex justify-center opacity-95 text-center items-center bg-gray-900">
        <div className="ml-2">
          <div className="text-xl uppercase leading-8">Online Returns</div>
          <div>Return within 30 days</div>
        </div>
      </div>
    </div>
  )
}

export default InfoBar
