import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import "@rmwc/drawer/styles"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@rmwc/drawer"
import { List } from "@rmwc/list"
import MenuIcon from "../assets/menu-24px.svg"
import CloseIcon from "../assets/close-24px.svg"

const StyledDrawer = styled(Drawer)`
  background-color: #ffffff;
  top: 0;
  bottom: 0;
  z-index: 2;
`

const StyledList = styled(List)`
  && {
    display: flex;
    flex-direction: column;
    list-style: none;
  }
`

const NavDrawer = () => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className="absolute top-0 left-0">
      <button className="h-8 w-8" onClick={() => setNavOpen(!navOpen)}>
        <MenuIcon className="h-8 w-8" />
      </button>
      {/* <button className="h-8 w-8" onClick={setOpen(false)}>
        <CloseIcon />
      </button> */}
      <StyledDrawer
        className="z-50"
        dir="ltr"
        modal
        open={navOpen}
        onClose={setNavOpen(false)}
      >
        <DrawerHeader>
          {" "}
          <DrawerTitle>
            {" "}
            <Link>
              {/* <Logo className="h-12 nav-logo svg-darkPrimary" /> */}
            </Link>
          </DrawerTitle>
        </DrawerHeader>
        <DrawerContent>
          <StyledList stlye={{ listStyle: "none" }}>
            <Link to="/" className="hover:text-midPrimary cursor-pointer">
              <li className="text-darkPrimary nav-list-item mr-6 p-1">Home</li>
            </Link>
            <Link to="/shop" className="hover:text-midPrimary cursor-pointer">
              {" "}
              <li className="text-darkPrimary nav-list-item  mr-6 p-1">Shop</li>
            </Link>
            <Link to="contact">
              <li className="text-darkPrimary nav-list-item mr-6 p-1">
                Contact
              </li>
            </Link>{" "}
          </StyledList>
        </DrawerContent>
      </StyledDrawer>
    </div>
  )
}

export default NavDrawer
