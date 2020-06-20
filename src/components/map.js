import React, { useRef, useEffect } from "react"
// import MapStyles from "./map-styles"
import "../styles/all.css"
import Typography from "@material-ui/core/Typography"

const stores = [
  {
    location: "Bristol",
    coord: { lat: 51.4545, lng: -2.5879 },
    storeName: "Pastel Ceramics Bristol Store",
    address: `
    4675  Oakwood Avenue
    <br />
    Bristol
    <br />
    BS1 LTT
    `,
  },

  {
    location: "Dublin",
    coord: { lat: 53.3498, lng: -6.2603 },
    storeName: "Pastel Ceramics Dublin Store",
    address: `
    5 Haig Avenue
    <br />
    Dublin
    <br />
    DO8 0GL
    `,
  },
  {
    location: "London",
    coord: { lat: 51.5074, lng: -0.1278 },
    storeName: "Pastel Ceramics London Store",
    address: `
    2 Oxford Road
    <br />
    London
    <br />
    W1D 3TB
    `,
  },

  {
    location: "Manchester",
    coord: { lat: 53.4808, lng: -2.2426 },
    storeName: "Pastel Ceramics Manchester Store",
    address: `
    10 Manchester Rd
    <br />
    Manchester
    <br />
    M1 1BB
    `,
  },
]

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

  useEffect(() => {
    const googleScript = document.createElement("script")

    googleScript.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAwL5yXnPPkWxKAMUB2AHzGFv6ec5ayKHI&libraries=geometry"

    window.document.body.appendChild(googleScript)

    googleScript.addEventListener("load", () => {
      const map = createMap()

      const addMarker = (coord, map) => {
        const marker = new window.google.maps.Marker({
          position: coord,
          map: map,
          // title: storeName,
        })
        return marker
      }

      // const filterMyArray = (myArr, condition) => {
      //   return myArr.map(element => element[condition])
      // }

      stores.map(store => {
        const marker = addMarker(store.coord, map)

        const infowindow = new window.google.maps.InfoWindow({
          content: `
          <h1 className="text-2xl infoHeading">${store.storeName}</h1>
          <p>${store.address}</p>`,
        })
        marker.addListener("click", function() {
          infowindow.open(map, marker)
        })
      })
    })
  })

  return (
    <div className="p-6 md:my-16  md:shadow-md flex flex-wrap border-white rounded-md w-full">
      <Typography variant="h3">Or find us in store...</Typography>

      <div
        id="google-map"
        ref={googleMapRef}
        style={{ width: 400, height: 350 }}
      ></div>
    </div>
  )
}

export default GoogleMap
