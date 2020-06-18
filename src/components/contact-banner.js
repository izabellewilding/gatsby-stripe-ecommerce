import React from "react"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import { Container } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.primary.dark,
    textAlign: "center",
    padding: "1rem",
    maxWidth: "100vw",
  },
  title: {
    color: theme.palette.secondary.light,
  },
}))

const ContactBanner = () => {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      <Typography variant="subtitle1" className={classes.title}>
        We would love to hear from you!
      </Typography>{" "}
    </Container>
  )
}

export default ContactBanner
