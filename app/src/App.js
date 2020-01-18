import React, { Component } from "react"
import { Box, Text } from "rebass"
import Map from "./Map"
import Tweets from "./Tweets"
import theme from "./theme"
import { ThemeProvider } from "emotion-theming"
import { Provider } from "unstated"
// import theme from '@rebass/preset'

import "./App.css"

export default class App extends Component {
  render() {
    return (
      <Provider>
        <ThemeProvider theme={theme}>
          <Box {...theme.app}>
            <Text fontSize={6}>Australia Fires</Text>
            <Map></Map>
            <Tweets></Tweets>
          </Box>
        </ThemeProvider>
      </Provider>
    )
  }
}
