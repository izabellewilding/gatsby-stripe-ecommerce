import React from "react"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import { Container } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  container: {
    textAlign: "center",
    padding: "1rem",
    maxWidth: "100vw",
    // borderBottom: "solid 1px",
    // borderColor: "grey",
  },
  title: {
    textAlign: "center",
    marginTop: "2rem",
    marginBottom: "1.666rem",
  },
}))

const ContactBanner = () => {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      <Typography variant="h3" className={classes.title}>
        We would love to hear from you
      </Typography>{" "}
      <Typography variant="subtitle1" className={classes.subtitle}>
        Send us a message
      </Typography>{" "}
    </Container>
  )
}

export default ContactBanner
