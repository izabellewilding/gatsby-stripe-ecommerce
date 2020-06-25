import React, { useState, useContext, useEffect } from "react"
import { CartContext } from "./shop/context"

import { Link } from "gatsby"
import Img from "./image"
import Logo from "../assets/name.svg"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import List from "@material-ui/core/List"
import CurvyLines from "../images/CurvyLines.png"
import Badge from "@material-ui/core/Badge"

import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import Drawer from "@material-ui/core/Drawer"
import Collapse from "@material-ui/core/Collapse"
import StorefrontIcon from "@material-ui/icons/Storefront"
import HomeIcon from "@material-ui/icons/Home"
import ExpandLess from "@material-ui/icons/ExpandLess"
import ExpandMore from "@material-ui/icons/ExpandMore"
import MailIcon from "@material-ui/icons/Mail"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"

const useStyles = makeStyles(theme => ({
  header: {
    background: `url(${CurvyLines})` + theme.palette.primary.light,
    backgroundPosition: "center",
    height: 75,
    transition: "all 0.25s",
  },
  headerFadeOut: {
    transform: "translateY(-91px)",
    background: `url(${CurvyLines})` + theme.palette.primary.light,
    backgroundPosition: "center",
    height: 75,
    transition: "all 0.25s",
  },
  toolbarHidden: {
    display: "none",
  },
  toolbar: {
    height: 75,
  },
  menuButton: {
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  activeNavLink: {
    color: theme.palette.primary.dark,
  },
  navBar: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  root: {
    width: "100%",
    maxWidth: 340,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },

  drawerHeader: {
    width: "100%",
    justifyContent: "space-between",
    borderBottom: "solid 0.5px white",
    backgroundColor: theme.palette.primary.light,
  },
  list: {
    paddingTop: 0,
  },
  basketIcon: {
    fill: theme.palette.primary.dark,
  },
}))

const Header = ({ page }) => {
  const classes = useStyles()
  const ctx = useContext(CartContext)
  const [navOpen, setNavOpen] = React.useState(false)
  const [navItemOpen, setNavItemOpen] = useState(false)

  const [fadeHeaderOut, setFadeHeaderOut] = useState()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = Math.round(window.scrollY)
      setFadeHeaderOut(scrollPosition >= 500)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  function handleDrawerToggle() {
    setNavOpen(!navOpen)
  }

  function ListItemLink(props) {
    return <ListItem button component={Link} {...props} />
  }
  function NavLink(props) {
    return <MenuItem button component={Link} {...props} />
  }

  function IconButtonLink(props) {
    return <IconButton component={Link} {...props} />
  }

  function openNavItem() {
    setNavItemOpen(!navItemOpen)
  }

  return (
    <>
      <AppBar
        position="fixed"
        className={fadeHeaderOut ? classes.headerFadeOut : classes.header}
      >
        <Toolbar>
          <div className="flex justify-start h-full flex-row w-1/3">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon color="primary" />
            </IconButton>
            <div className={classes.navBar}>
              <NavLink
                to="/"
                edge="start"
                activeClassName={classes.activeNavLink}
              >
                <Typography variant="body1">Home</Typography>
              </NavLink>

              <NavLink to="/shop-home" edge="start">
                <Typography variant="body1">Shop</Typography>
              </NavLink>

              <NavLink to="/contact" edge="start">
                <Typography variant="body1">Contact</Typography>
              </NavLink>
            </div>
          </div>
          <div className="w-1/3 flex justify-center">
            <Img src="../images/name.png" className="w-24 my-2" />
          </div>
          <div className="w-1/3 flex justify-end">
            <MenuItem className="w-1/3 flex justify-end">
              <IconButtonLink
                to="/cart-page"
                aria-label="shopping cart"
                color="primary"
              >
                <Badge
                  badgeContent={ctx.totalItems(ctx.items)}
                  color="secondary"
                >
                  <ShoppingBasketIcon className={classes.basketIcon} />
                </Badge>
              </IconButtonLink>
            </MenuItem>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar
        className={page === "home" ? classes.toolbarHidden : classes.toolbar}
      />

      <Drawer
        anchor={"top"}
        open={navOpen}
        // variant="temporary"
        // ModalProps={{
        //   keepMounted: true, // Better open performance on mobile.
        // }}
        onClose={handleDrawerToggle}
      >
        {" "}
        <List className={classes.list}>
          {" "}
          <ListItem className={classes.drawerHeader}>
            <Img src="../images/name.png" className=" w-20 ml-6 my-2" />

            <IconButtonLink aria-label="shopping cart" color="primary">
              <Badge
                to="/cart-page"
                badgeContent={ctx.totalItems(ctx.items)}
                color="secondary"
              >
                <ShoppingBasketIcon className={classes.basketIcon} />
              </Badge>
            </IconButtonLink>
          </ListItem>
          <ListItemLink to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemLink>
          <ListItem button onClick={openNavItem}>
            <ListItemIcon>
              <StorefrontIcon />
            </ListItemIcon>
            <ListItemText primary="Shop" />
            {navItemOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={navItemOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemLink to="/shop-home" button className={classes.nested}>
                <ListItemText primary="Home" />
              </ListItemLink>
              <ListItemLink to="/shop-dining" button className={classes.nested}>
                <ListItemText primary="Dining" />
              </ListItemLink>
              <ListItemLink
                to="/shop-plantpots"
                button
                className={classes.nested}
              >
                <ListItemText primary="Plantpots" />
              </ListItemLink>
            </List>
          </Collapse>
          <ListItemLink to="/contact">
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItemLink>
        </List>
      </Drawer>
    </>
  )
}

export default Header
