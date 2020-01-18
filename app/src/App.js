import React, { Component } from "react"
import { Box } from "rebass"
import Map from "./Map"
import Tweets from "./Tweets"

import "./App.css"

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header>Australia Fires</header>
        <Map></Map>
        {/* <Tweets></Tweets> */}
      </div>
    )
  }
}
