const { gql } = require("apollo-server-express")

const typeDefs = gql`
scalar Date

  type Query {
    fire: Fire
    fires(date: Date): Fires
    hello: String
  }

  type PaginatedFires {
      fires: [Fire]
      pageInfo: PageInfo
  }

  type PageInfo {
      after: Int!,
      hasNextPage: Boolean
  }

  type Fires {
    latitude: [Float!]
    longitude: [Float!]
    brightness: [Float!]
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
