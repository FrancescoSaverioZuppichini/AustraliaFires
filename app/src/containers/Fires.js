import { Container } from "unstated"
import axios from "axios"
import csv from "csvtojson"

export default class FiresContainer extends Container {
  state = { data: [] }

  constructor() {
    super()
    this.getData()
  }

  getData() {
    const csvParser = csv()
    axios
      .get("/data/fires.csv")
      .then(({ data }) => data)
      .then(data => csvParser.fromString(data))
      .then(data => this.setState({ data }))
      .then(_ => console.log("done"))
  }
}
