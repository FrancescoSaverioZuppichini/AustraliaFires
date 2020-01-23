const mongoose = require("mongoose")

const FireSchema = new mongoose.Schema({
  latitude: Number,
  longitude: Number,
  brightness: Number,
  scan: Number,
  track: Number,
  acq_date: {
    type: Date,
    index: true
  },
  acq_time: String,
  satellite: String,
  confidence: Number,
  version: String,
  bright_t31: Number,
  frp: Number,
  daynight: String
})

module.exports = mongoose.model("Fire", FireSchema)
