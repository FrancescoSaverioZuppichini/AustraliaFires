const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const logger = require("morgan")
const fs = require("fs")
const Fires = require("./models/Fire")
const { ApolloServer, gql } = require("apollo-server-express")
const mongoose = require("mongoose")
const typeDefs = require("./schemas/schemas.js")

const PORT = process.env.PORT || "8080"
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost/fires"
// connect to our db
mongoose
  .connect(MONGO_URL)
  .then(() => console.log(`🚀 Mongodb connected at ${MONGO_URL}`))
  .catch(e => consolg.error(e))

const app = express()

const resolvers = {
  Query: {
    hello: () => "world",
    fires: async (src, { startDate, endDate = null }) =>
      await Fires.aggregateByDate(
        new Date(startDate),
        endDate === null ? new Date() : new Date(endDate)
      )
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.get("/api/v1/fires", async (req, res, next) => {
  let { date } = req.query
  date = new Date(date)

  const fires = await Fires.aggregateByDate(date)
  res.json(fires)
})

app.get("/", (req, res, next) => {
  res.render("index", { title: "Express" })
})

app.get("/api/v1/fires/today", async (req, res, next) => {
  let foo = await Fires.getToday()

  const fires = await Fires.aggregateByDate(new Date())
  res.json(fires)
})

server.applyMiddleware({ app })

app.listen({ port: PORT }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )
)
