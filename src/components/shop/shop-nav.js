import React from "react"
import { Link } from "gatsby"
import MenuItem from "@material-ui/core/MenuItem"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: theme.palette.secondary.light,
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  },
}))

const TestBreadcrumb = () => {
  const classes = useStyles()

  function NavLink(props) {
    return <MenuItem button component={Link} {...props} />
  }

  return (
    <div
      // className="w-full chivo-reg border-b border-gray-200 text-sm bg-gray-100"
      className={classes.header}
    >
      <div className="max-w-5xl m-auto w-full h-full flex ">
        <NavLink to="/shop-plantpots" edge="start">
          <Typography variant="body1">Plantpots</Typography>
        </NavLink>
        <NavLink to="/shop-dining" edge="start">
          <Typography variant="body1">Dining</Typography>
        </NavLink>
      </div>
    </div>
  )
}

export default TestBreadcrumb
