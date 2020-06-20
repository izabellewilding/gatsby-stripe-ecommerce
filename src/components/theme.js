import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"
import { grey, white } from "@material-ui/core/colors"

const rawTheme = createMuiTheme({
  palette: {
    //browns
    primary: {
      light: "#f3f3f3",
      main: "#6e6e6e",
      dark: "#121321",
    },
    //pinks
    secondary: {
      light: "#ffd9ca",
      main: "#e2a799",
      dark: "#af786b",
    },

    accent: {
      main: white,
    },
  },
  typography: {
    fontFamily: "'chivo-reg', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 600, // Roboto Condensed
    fontFamilySecondary: "'raleway', sans-serif",
  },
})

const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: rawTheme.typography.fontFamilySecondary,
  textTransform: "uppercase",
}

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: rawTheme.palette.common.white,
      placeholder: grey[200],
    },
  },
  typography: {
    ...rawTheme.typography,
    // fontHeader,
    h1: {
      ...rawTheme.typography.h1,
      ...fontHeader,
      fontSize: 50,
      letterSpacing: 0.75,
      fontFamily: "raleway",
      textTransform: "uppercase",
      color: "white",
    },
    h2: {
      ...rawTheme.typography.h2,
      ...fontHeader,

      fontSize: 38,
      fontFamily: "chivo-reg",
      color: rawTheme.palette.primary.main,
    },
    h3: {
      ...rawTheme.typography.h3,
      ...fontHeader,
      fontSize: 30,
      fontFamily: "raleway-light",
      color: rawTheme.palette.secondary.dark,
    },
    h4: {
      ...rawTheme.typography.h4,
      // ...fontHeader,
      fontSize: 24,
      fontFamily: "chivo-reg",
      color: rawTheme.palette.secondary.light,
    },

    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: 18,
      fontFamily: "raleway",
      color: rawTheme.palette.primary.dark,
    },
    body1: {
      ...rawTheme.typography.body1,
      fontFamily: "chivo-reg",
      color: rawTheme.palette.primary.main,

      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 16,
    },
    body2: {
      ...rawTheme.typography.body2,
      fontFamily: "playfair",

      fontSize: 14,
    },
  },
}

export default responsiveFontSizes(theme)
