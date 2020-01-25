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
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "@apollo/react-hooks"
import { InMemoryCache } from "apollo-cache-inmemory"

import "./App.css"
const cache = new InMemoryCache()

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql",
  cache: cache
})

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider>
          <ThemeProvider theme={theme.dark}>
            <Box {...theme.dark.app} p={0}>
              <Header theme={theme.dark}></Header>
              <Box p={2}>
                <Map></Map>
                <Box mt={4}></Box>
                <UsefulLinks></UsefulLinks>
              </Box>
              {/* <Footer theme={theme}></Footer> */}
            </Box>
          </ThemeProvider>
        </Provider>
      </ApolloProvider>
    )
  }
}
