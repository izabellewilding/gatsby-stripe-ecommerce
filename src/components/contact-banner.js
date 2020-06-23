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
    color: theme.palette.secondary.dark,
    textAlign: "center",
    marginTop: "1rem",
  },
}))

const ContactBanner = () => {
  const classes = useStyles()
  return (
    <Container className={classes.container && "underlined"}>
      <Typography variant="h2" className={classes.title}>
        We would love to hear from you!
      </Typography>{" "}
    </Container>
  )
}

export default ContactBanner
