import React from "react"
import { Link } from "gatsby"
import MenuItem from "@material-ui/core/MenuItem"
import Typography from "@material-ui/core/Typography"

const TestBreadcrumb = () => {
  function NavLink(props) {
    return <MenuItem button component={Link} {...props} />
  }

  return (
    <div
      className="w-full chivo-reg border-b border-gray-200 text-sm bg-gray-100 pl-5"
      style={{ height: 60 }}
    >
      <div className="max-w-5xl m-auto w-full h-full p-4 flex ">
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
