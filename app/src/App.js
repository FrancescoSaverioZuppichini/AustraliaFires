import React from "react"
import { Box } from 'rebass'
import Map from "./Map"
import Tweets from './Tweets'

import "./App.css"

function App() {
  return (
    <Box p={4}>
      <header>Australia Fires</header>
      <Map></Map>
      <Tweets></Tweets>
    </Box>
  )
}

export default App
