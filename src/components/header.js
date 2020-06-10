import React, { useState } from "react"
import { Link } from "gatsby"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Drawer from "@material-ui/core/Drawer"

const List = () => (
  <div
    role="presentation"
    // onClick={() => setNavOpen(!navOpen)}
    // onKeyDown={() => setNavOpen(navOpen)}
  >
    <List>
      <ListItem>
        <ListItemIcon></ListItemIcon>
        <ListItemText />
      </ListItem>
    </List>
    <Divider />
    <List>
      <ListItem button>
        <ListItemIcon></ListItemIcon>
        <ListItemText />
      </ListItem>
    </List>
  </div>
)

const NavDrawer = () => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    /* <IconButton
        edge="start"
        // className={classes.menuButton}
        color="inherit"
        onClick={() => setNavOpen(true)}
        aria-label="menu"
      ></IconButton> */
    <Drawer anchor={"top"} open={navOpen} onClose={() => setNavOpen(false)}>
      {" "}
      <List />
    </Drawer>
  )
}

const Header = props => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <>
      {/* <header
        className={cx(
          "flex justify-center overflow-hidden align-middle border-b border-gray-200 h-66 bg-white",
          {
            "p-0 fixed right-05 left-05": props.page === "home",
            "p-0 relative": props.page !== "home",
          }
        )}
      > */}

      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            // className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setNavOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography>Pastel Ceramics</Typography>
        </Toolbar>

        {/* <NavDrawer /> */}
      </AppBar>
      <Toolbar />

      {/* <div className="relative w-full flex justify-center items-center flex-col">
          <div className="w-full flex flex-col"> */}
      {/* <Link to="/" className="m-auto my-4 ">
              <Logo className="w-32" />
            </Link> */}
      {/* <h1>Pastel</h1>
            <div className="bg-white w-full border-gray-300 border-t">
              <div className="max-w-5xl w-full m-auto flex justify-between items-center">
                <nav className="hidden md:block chivo-reg flex flex-col md:flex-row uppercase text-sm">
                  <Link
                    to="/"
                    className="p-2 chivo-pr-4 text-center md:w-2/6 "
                    activeClassName="text-semibold text-gray-900"
                  >
                    Home
                  </Link>

                  <Link
                    to="/shop-home"
                    className="p-2 pr-4 text-center hover:text-gray-700 md:w-2/6"
                    activeClassName="text-semibold text-gray-900"
                  >
                    Shop
                  </Link>
                  <Link
                    to="/contact"
                    className="p-2 pr-4 text-center hover:text-gray-700 md:w-2/6"
                    activeClassName="text-semibold text-gray-900"
                  >
                    Contact
                  </Link>
                </nav>
                <Link to="checkout" className="flex items-center my-2 mx-4">
                  <Basket className="m-2 h-5" />
                  <span className="font-sans font-normal">
                    {cartCtx.totalItems(cartCtx.items)}
                  </span>
                </Link>
                <NavDrawer />
              </div>{" "}
            </div>
          </div>
        </div> */}
      {/* </header> */}
    </>
  )
}

export default Header
