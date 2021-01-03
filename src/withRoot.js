import { CssBaseline } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import * as React from "react";

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FC7753",
      contrastText: "#fff",
    },
    secondary: {
      main: "#403D56",
    },
  },
  typography: {
    fontFamily: [
      "Avenir",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    h5: {
      fontSize: "1rem",
      fontWeight: 500,
    },
    subtitle1: {
      lineHeight: "inherit",
    },
    button: {
      textTransform: "none",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        li: {
          listStyle: "none",
        },
        img: {
          maxWidth: "100%",
          display: "block",
        },
      },
    },
  },
  props: {
    MuiButton: {
      color: "primary",
      disableElevation: true,
    },
  },
});

if (process.env.NODE_ENV === "development") console.log("[Theme]:", theme);

export function withRoot(Component) {
  return (props) => {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </ThemeProvider>
    );
  };
}
