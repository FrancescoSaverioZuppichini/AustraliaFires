const { gql } = require("apollo-server-express")

const typeDefs = gql`
scalar Date

  type Query {
    fire: Fire
    fires(startDate: Date, endDate: Date): [Fires]
    hello: String
  }

  type Fires {
    date: Date
    latitude: [Float!]
    longitude: [Float!]
    brightness: [Float!]
    confidence: [Float!]
    count: Int!
  }

  type Fire {
    latitude: Float!
    longitude: Float!
    brightness: Float!
    scan: Float!
    track: Float!
    acq_date: Date!
    acq_time: String!
    satellite: String!
    confidence: Float!
    version: String!
    bright_t31: Float!
    frp: Float!
    daynight: String!
  }
`
module.exports = typeDefs
