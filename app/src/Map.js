import React, { Component } from "react"
import { Box, Card } from "rebass"
import DeckGL from "@deck.gl/react"
import { StaticMap } from "react-map-gl"
import { HeatmapLayer } from "@deck.gl/aggregation-layers"
import FiresContainer from "./containers/Fires.js"
import { Subscribe } from "unstated"

const initialViewState = {
  longitude: 145.545857,
  latitude: -32.013364,
  zoom: 6,
  pitch: 0,
  bearing: 0
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

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoienVwcGlmIiwiYSI6ImNqdm96Z3d2ejFibG80OXZuZWdwMWgyemwifQ.aFnHrPBYUqnYcK2jAwzAZA"

export default class Map extends Component {
  render() {
    return (
      <Card>
        <Subscribe to={[FiresContainer]}>
          {fires => (
            <Box style={{ position: "relative", minHeight: "66vh" }}>
              <DeckGL
                initialViewState={initialViewState}
                controller={true}
                layers={[
                  new HeatmapLayer({
                    id: "heatmapLayer",
                    data: fires.state.data,
                    // http://colorbrewer2.org/#type=sequential&scheme=Greys&n=6
                    // colorRange: [
                    //   [1, 152, 189],
                    //   [73, 227, 206],
                    //   [216, 254, 181],
                    //   [254, 237, 177],
                    //   [254, 173, 84],
                    //   [209, 55, 78]
                    ],
                    getPosition: d => [
                      parseFloat(d.longitude),
                      parseFloat(d.latitude)
                    ]
                    // radiusPixels: 10,
                    // getWeight: d => d.WEIGHT
                  })
                ]}
              >
                <StaticMap
                  mapStyle="mapbox://styles/mapbox/dark-v9"
                  mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
                />
              </DeckGL>
            </Box>
          )}
        </Subscribe>
      </Card>
    )
  }
}
