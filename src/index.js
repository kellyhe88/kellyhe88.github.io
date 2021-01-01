import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import { grey } from "@material-ui/core/colors";


const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      light: grey[400], //grey[600],
      main: "#ffffff", //grey[800],
      dark: grey[900], //grey[900],
    },
    secondary: {
      light: "#f5ccbf", // lighter orange
      main: "#f6754d", // orange
      dark: "#ff4b12", // darker orange
    },
    textColors: {
      light: "#ffffff",
      dark: "#000000",
    },
  },
  typography: {
    fontWeightLight: 100,
    fontWeightRegular: 400,
    fontWeightMedium: 500, // unused?
    fontWeightBold: 900,
    fontFamily: [
      "Avenir",
      "Roboto"
      // "Open Sans",
      // "Questrial",
      // "Lato",
      // "Clear Sans",
      // "Futura",
      // "Source Sans Pro",
      // "Helvetica",
      // "sans-serif",
    ].join(","),
  },
  overrides: {
    a: {
      color: "white",
    },
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  </MuiThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
