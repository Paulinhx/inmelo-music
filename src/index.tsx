import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(138,83,255,1)",
      light: "rgba(186,104,200,1)",
      dark: "rgba(123,31,162,1)",
    },
    secondary: {
      main: "rgba(25,118,210,1)",
      light: "rgba(66,165,245,1)",
      dark: "rgba(21,101,192,1)",
    },
  },
});

ReactDOM.render(
  <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
