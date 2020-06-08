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
  left: 0;
  right: 0;
  width: 100vw;
`

const StyledList = styled(List)`
  && {
    display: flex;
    flex-direction: row;
    list-style: none;
    font-family: chivo-reg;
    text-transform: uppercase;
    justify-content: center;
  }
`

const NavDrawer = () => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className="absolute bottom-0 right-0 mx-4 my-2 ">
      <button
        className="h-8 w-8 block md:hidden"
        onClick={() => setNavOpen(!navOpen)}
      >
        <MenuIcon className="h-8 w-8" />
      </button>

      <StyledDrawer
        dir="ltr"
        modal
        open={navOpen}
        onClose={() => setNavOpen(false)}
        style={{ maxHeight: 90 }}
      >
        {" "}
        <DrawerTitle>
          {" "}
          <button className="h-8 w-8" onClick={() => setNavOpen(false)}>
            <CloseIcon onClick={() => setNavOpen(!navOpen)} />
          </button>
        </DrawerTitle>
        <DrawerContent>
          <StyledList stlye={{ listStyle: "none" }}>
            <Link to="/" className="hover:text-midPrimary cursor-pointer">
              <li className="text-darkPrimary nav-list-item mr-6 p-1">Home</li>
            </Link>
            <Link
              to="/shop-home"
              className="hover:text-midPrimary cursor-pointer"
            >
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
