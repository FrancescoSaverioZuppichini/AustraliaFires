import React, { Component } from "react"
import { Box, Card } from "rebass"
import DeckGL from "@deck.gl/react"
import { StaticMap } from "react-map-gl"
import { HeatmapLayer } from "@deck.gl/aggregation-layers"
import FiresContainer from "./containers/Fires.js"
import { Subscribe } from "unstated"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

const initialViewState = {
  longitude: 145.545857,
  latitude: -32.013364,
  zoom: 6,
  pitch: 0,
  bearing: 0
}

const GET_FIRES = gql`
  query Fires($startDate: Date, $endDate: Date) {
    fires(startDate: $startDate, endDate: $endDate) {
      date
      longitude
      latitude
    }
  }
`

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoienVwcGlmIiwiYSI6ImNqdm96Z3d2ejFibG80OXZuZWdwMWgyemwifQ.aFnHrPBYUqnYcK2jAwzAZA"

export default function Map() {
  const { loading, error, data } = useQuery(GET_FIRES, {
    variables: { startDate: "2020-01-19" }
  })

  if (loading) return ""

  let dataParsed = []
  // this is needed since the server aggregates for each day to increase performance
  for (let d of data.fires) {
    for (let i = 0; i < d.latitude.length; i++) {
      const latitude = d.latitude[i]
      const longitude = d.longitude[i]
      dataParsed.push({ latitude, longitude })
    }
  }
  return (
    <Card>
      <Box style={{ position: "relative", minHeight: "66vh" }}>
        <DeckGL
          initialViewState={initialViewState}
          controller={true}
          layers={[
            new HeatmapLayer({
              id: "heatmapLayer",
              data: dataParsed,
              // http://colorbrewer2.org/#type=sequential&scheme=Greys&n=6
              // colorRange: [
              //   [1, 152, 189],
              //   [73, 227, 206],
              //   [216, 254, 181],
              //   [254, 237, 177],
              //   [254, 173, 84],
              //   [209, 55, 78]
              // ],
              getPosition: d => [d.longitude, d.latitude]
            })
          ]}
        >
          <StaticMap
            mapStyle="mapbox://styles/mapbox/dark-v9"
            mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
          />
        </DeckGL>
      </Box>
    </Card>
  )
}
