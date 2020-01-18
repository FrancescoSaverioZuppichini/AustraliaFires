import React from "react"
import { Box } from 'rebass'
import Map from "./Map"
import Tweets from './Tweets'

import "./App.css"

function App() {
  return (
    <div className='App'>
      <header>Australia Fires</header>
      <Map></Map>
      {/* <Tweets></Tweets> */}
    </div>
  )
}

export default App
