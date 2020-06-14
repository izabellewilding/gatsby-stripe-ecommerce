import React, { useState, useContext } from "react"
import { CartContext } from "./shop/context"

import { Link } from "gatsby"
import Img from "./image"
import Logo from "../assets/name.svg"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
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
  },
  menuButton: {
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
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

  toolbar: {
    minHeight: 73,
  },

  drawerHeader: {
    width: "100%",
    justifyContent: "space-between",
    borderBottom: "solid 0.5px white",
    backgroundColor: theme.palette.primary.light,
  },
}))

const Header = () => {
  const classes = useStyles()
  const ctx = useContext(CartContext)
  const [navOpen, setNavOpen] = React.useState(false)
  const [navItemOpen, setNavItemOpen] = useState(false)

  function handleDrawerToggle() {
    setNavOpen(!navOpen)
  }

  function ListItemLink(props) {
    return <ListItem button component={Link} {...props} />
  }

  function BadgeLink(props) {
    return <Badge component={Link} {...props} />
  }

  function openNavItem() {
    setNavItemOpen(!navItemOpen)
  }

  return (
    <>
      <AppBar position="fixed" className={classes.header}>
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
              <MenuItem edge="start">
                <Typography variant="subtitle1">Home</Typography>
              </MenuItem>

              <MenuItem edge="start">
                <Typography variant="subtitle1">Shop</Typography>
              </MenuItem>

              <MenuItem edge="start">
                <Typography variant="subtitle1">Contact</Typography>
              </MenuItem>
            </div>
          </div>
          <div className="w-1/3 flex justify-center">
            <Img src="../images/name.png" className=" w-24 ml-6 my-2" />
          </div>
          <div className="w-1/3 flex justify-end">
            <MenuItem className="w-1/3 flex justify-end">
              <IconButton aria-label="shopping cart" color="primary">
                <BadgeLink
                  to="/checkout"
                  badgeContent={ctx.totalItems(ctx.items)}
                  color="secondary"
                >
                  <ShoppingBasketIcon />
                </BadgeLink>
              </IconButton>
            </MenuItem>
          </div>
        </Toolbar>
      </AppBar>
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

            <IconButton aria-label="shopping cart" color="primary">
              <BadgeLink
                to="/checkout"
                badgeContent={ctx.totalItems(ctx.items)}
                color="secondary"
              >
                <ShoppingBasketIcon />
              </BadgeLink>
            </IconButton>
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
              <ListItem button className={classes.nested}>
                <ListItemText primary="Dining" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Plantpots" />
              </ListItem>
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
      <Toolbar />
    </>
  )
}

export default Header
