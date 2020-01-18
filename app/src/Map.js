import React, { Component } from "react"
import PropTypes from "prop-types"
import { Box } from "rebass"
import DeckGL from "@deck.gl/react"
import { StaticMap } from "react-map-gl"
import {HeatmapLayer} from '@deck.gl/aggregation-layers';


const viewState = {
  longitude: 145.545857,
  latitude: -32.013364,
  zoom: 5,
  pitch: 0,
  bearing: 0
}

// data from https://www.kaggle.com/carlosparadis/fires-from-space-australia-and-new-zeland


const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoienVwcGlmIiwiYSI6ImNqdm96Z3d2ejFibG80OXZuZWdwMWgyemwifQ.aFnHrPBYUqnYcK2jAwzAZA"

export default class Map extends Component {
//   static propTypes = {
//     prop: PropTypes
//   }

  render() {
    const layers = [new HeatmapLayer({
        id: 'heatmapLayer',
        getPosition: d => d.COORDINATES,
        // getWeight: d => d.WEIGHT    
      })]

    return (
      <Box style={{ position: "relative", minHeight: '50vh'}}>
        <DeckGL viewState={viewState} controller={true}  layers={layers}>
          <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
        </DeckGL>
      </Box>
    )
  }
}
