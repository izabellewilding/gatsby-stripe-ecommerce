import React from "react"
import { Link } from "gatsby"
import MenuItem from "@material-ui/core/MenuItem"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: theme.palette.secondary.main,
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    paddingLeft: "1.666rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  navLink: {
    padding: "1rem",
  },
  h3: {
    color: theme.palette.secondary.light,
    fontSize: "1.25rem",
  },
}))

const ShopNav = props => {
  const classes = useStyles()

  function NavLink(props) {
    return <MenuItem button component={Link} {...props} />
  }

  return (
    <div
      // className="w-full chivo-reg border-b border-gray-200 text-sm bg-gray-100"
      className={classes.header}
    >
      <div className="max-w-5xl m-auto w-full h-full flex flex-row  ">
        <NavLink
          to="/shop-home"
          activeStyle={{ color: "white" }}
          edge="start"
          className={classes.navLink}
        >
          <Typography variant="body1" color="inherit">
            All
          </Typography>
        </NavLink>
        <NavLink
          to="/shop-plantpots"
          activeStyle={{ color: "white" }}
          edge="start"
          className={classes.navLink}
        >
          <Typography variant="body1" color="inherit">
            Plantpots
          </Typography>
        </NavLink>
        <NavLink
          className={classes.navLink}
          to="/shop-dining"
          edge="start"
          activeStyle={{ color: "white" }}
        >
          <Typography variant="body1" color="inherit">
            Dining
          </Typography>
        </NavLink>
      </div>
    </div>
  )
}

export default ShopNav
