import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"

const ButtonLink = props => {
  return <Button component={Link} {...props} />
}

// const useStyles = makeStyles(theme => ({}))
const Thanks = () => {
  return (
    <Layout>
      <Box className=" justify-center flex" style={{ minHeight: "80vh" }}>
        <div
          className="flex flex-col justify-center align-middle m-auto w-4/5 md:w-2/5"
          color="primary"
        >
          <Typography
            variant="subtitle1"
            className=" text-gray-800 text-center text-6xl garamond py-12"
          >
            Thank you for your message! We'll be in touch as soon as possible
          </Typography>

          <ButtonLink to="/shop-home" color="secondary" variant="contained">
            Back to Shop
          </ButtonLink>
        </div>
      </Box>
    </Layout>
  )
}
export default Thanks
