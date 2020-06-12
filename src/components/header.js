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
import StarBorder from "@material-ui/icons/StarBorder"
import Collapse from "@material-ui/core/Collapse"
import StorefrontIcon from "@material-ui/icons/Storefront"
import HomeIcon from "@material-ui/icons/Home"
import CloseIcon from "@material-ui/icons/Close"
import ExpandLess from "@material-ui/icons/ExpandLess"
import ExpandMore from "@material-ui/icons/ExpandMore"
import MailIcon from "@material-ui/icons/Mail"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { Hidden } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  header: {
    background: `url(${CurvyLines})` + theme.palette.primary.light,
    backgroundPosition: "center",
  },
  root: {
    width: "100%",
    maxWidth: 360,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  toolbar: {
    minHeight: 73,
  },
  iconSection: {
    width: "100%",
    justifyContent: "space-between",
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
        <Toolbar className={classes.iconSection}>
          <IconButton
            edge="start"
            // className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon color="primary" />
          </IconButton>

          <Img src="../images/name.png" className=" w-32 ml-6 my-2" />
          <MenuItem>
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
      </Drawer>
      <Toolbar />
    </>
  )
}

export default Header
