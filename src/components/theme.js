import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"
import { green, grey, red, white } from "@material-ui/core/colors"

const rawTheme = createMuiTheme({
  palette: {
    //blues
    primary: {
      light: "#f1f7fd",
      main: "#27303c",
      dark: "#151621",
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
    warning: {
      main: "#ffc071",
    },
    error: {
      xLight: red[50],
      main: red[500],
    },
    success: {
      xLight: green[50],
      main: green[500],
    },
  },
  typography: {
    fontFamily: "'chivo-reg', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
    fontFamilySecondary: "'raleway', sans-serif",
  },
})

const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: rawTheme.typography.fontFamilySecondary,
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
    fontHeader,
    h1: {
      ...rawTheme.typography.h1,
      ...fontHeader,
      fontSize: 58,
      letterSpacing: 0,
      fontFamily: "fairplay",
      color: rawTheme.palette.primary.light,
    },
    h2: {
      ...rawTheme.typography.h2,
      ...fontHeader,
      fontSize: 42,
      fontFamily: "raleway",
      color: rawTheme.palette.primary.main,
    },
    h3: {
      ...rawTheme.typography.h3,
      ...fontHeader,
      fontSize: 38,
      fontFamily: "raleway",
      color: rawTheme.palette.accent.main,
    },

    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: 18,
      fontFamily: "chivo-reg",
      color: rawTheme.palette.primary.light,
    },
    body1: {
      ...rawTheme.typography.body2,
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 16,
    },
    body2: {
      ...rawTheme.typography.body1,
      fontSize: 14,
    },
  },
}

export default responsiveFontSizes(theme)
