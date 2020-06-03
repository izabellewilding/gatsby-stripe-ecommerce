import React, { useRef, useEffect } from "react"
import MapStyles from "./map-styles"

const googleMap = () => {
  const googleMapRef = useRef()
  const createMap = () => {
    const map = new window.google.maps.Map(googleMapRef.current, {
      zoom: 3,
      center: {
        lat: 54.015936,
        lng: -3.710517,
      },
      styles: MapStyles,
    })
    return map
  }

  const addMarker = (coord, map) => {
    const marker = new window.google.maps.Marker({
      position: coord,
      map: map,
    })
  }

  useEffect(() => {
    const googleScript = document.createElement("script")

    googleScript.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAwL5yXnPPkWxKAMUB2AHzGFv6ec5ayKHI&libraries=geometry"

    window.document.body.appendChild(googleScript)

    googleScript.addEventListener("load", () => {
      const map = createMap()
      const Bristol = { lat: 51.4545, lng: -2.5879 }
      addMarker(Bristol, map)
    })
  })
  return (
    <div>
      <h1 className=" text-4xl text-orange-900">Testing</h1>

      <div
        id="google-map"
        ref={googleMapRef}
        style={{ width: 800, height: 800 }}
      ></div>
    </div>
  )
}

export default GoogleMap
