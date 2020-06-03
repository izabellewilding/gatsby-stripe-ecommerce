import React, { useRef, useEffect } from "react"
// import MapStyles from "./map-styles"

const GoogleMap = () => {
  const googleMapRef = useRef()
  const createMap = () => {
    const map = new window.google.maps.Map(googleMapRef.current, {
      zoom: 5,
      center: {
        lat: 54.015936,
        lng: -3.710517,
      },
      // styles: MapStyles,
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
      const Dublin = { lat: 53.3498, lng: -6.2603 }
      const London = { lat: 51.5074, lng: -0.1278 }
      const Manchester = { lat: 53.4808, lng: -2.2426 }
      addMarker(Bristol, map)
      addMarker(Dublin, map)
      addMarker(London, map)
      addMarker(Manchester, map)
    })
  })
  return (
    <div>
      <div
        id="google-map"
        ref={googleMapRef}
        style={{ width: 450, height: 394.6 }}
      ></div>
    </div>
  )
}

export default GoogleMap
