import React from "react"
import Layout from "../components/layout"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({}))
const Thanks = () => {
  return (
    <Layout>
      <div>
        <Typography variant="h1">
          Thank you! I have received your message and will be in touch
          shortly...
        </Typography>
      </div>
    </Layout>
  )
}
export default Thanks
