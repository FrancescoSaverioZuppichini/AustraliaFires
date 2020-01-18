import React, { Component } from "react"
import PropTypes from "prop-types"
import { Box } from "rebass"
import DeckGL from "@deck.gl/react"
import { StaticMap } from "react-map-gl"
import { HeatmapLayer } from "@deck.gl/aggregation-layers"
import axios from "axios"
import csv from "csvtojson"

const initialViewState = {
  longitude: 145.545857,
  latitude: -32.013364,
  zoom: 6
  //   pitch: 0,
  //   bearing: 0
}

// new GridCellLayer({
//     id: "firesLayer",
//     data: this.state.data,
//     cellSize: 1000,
//     getPosition: d => [parseFloat(d.longitude), parseFloat(d.latitude)],
//     getFillColor: d => [255  *  parseFloat(d.bright_t31) / 300 , 0,0, 255],
//     // getElevation: d => console.log(parseFloat(d.bright_t31)),
//     getElevation: d => parseFloat(d.confidence)
//     // radiusPixels: 10
//   })

// data from https://www.kaggle.com/carlosparadis/fires-from-space-australia-and-new-zeland

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoienVwcGlmIiwiYSI6ImNqdm96Z3d2ejFibG80OXZuZWdwMWgyemwifQ.aFnHrPBYUqnYcK2jAwzAZA"

export default class Map extends Component {
  //   static propTypes = {
  //     prop: PropTypes
  //   }
  state = { data: [] }
  constructor() {
    super()

    const csvParser = csv()

    axios
      .get("/data/fires.csv")
      .then(({ data }) => data)
      .then(data => csvParser.fromString(data))
      .then(data => this.setState({ data }))
      .then(a => console.log("done"))
  }

  render() {
    const layers = [
      new HeatmapLayer({
        id: "heatmapLayer",
        data: this.state.data,
        // getPosition: d => [d.longitude, d.latitude]
        getPosition: d => [parseFloat(d.longitude), parseFloat(d.latitude)],
        // radiusPixels: 10,
        // getWeight: d => d.WEIGHT
      })
    ]
    return (
      <Box style={{ position: "relative", minHeight: "66vh" }}>
        <DeckGL
          initialViewState={initialViewState}
          controller={true}
          layers={layers}
        >
          <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
        </DeckGL>
      </Box>
    )
  }
}
