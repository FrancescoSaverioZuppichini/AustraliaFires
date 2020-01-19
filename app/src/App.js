import React, { Component } from "react"
import { Box, Text } from "rebass"
import theme from "./theme"
import { ThemeProvider } from "emotion-theming"
import { Provider } from "unstated"
import Map from "./Map"
import Tweets from "./Tweets"
import UsefulLinks from "./UsefulLinks"
import { Header } from "./Header"
import { Footer } from "./Footer"
// import theme from '@rebass/preset'

import "./App.css"

export default class App extends Component {
  render() {
    return (
      <Provider>
        <ThemeProvider theme={theme}>
          <Box {...theme.app} p={0}>
            <Header theme={theme}></Header>
            <Box p={2}>
              <Map></Map>
              <Box mt={4}></Box>
              <UsefulLinks></UsefulLinks>
            </Box>
            <Footer theme={theme}></Footer>
          </Box>
        </ThemeProvider>
      </Provider>
    )
  }
}
