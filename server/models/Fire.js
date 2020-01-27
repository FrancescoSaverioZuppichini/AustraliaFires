const mongoose = require("mongoose")
const axios = require("axios")
const csv = require("csvtojson")

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


/**
 * This function aggregates all the fires by date in a period [startDate, endDate]
 * @param {Date} startDate The starting date from which aggregate all info
 * @param {Date} endDate The ending date from which aggregate all info
 */
FireSchema.statics.aggregateByDate = function(startDate, endDate) {
  return this.aggregate([
    { $match: { acq_date: { $gte: startDate, $lt: endDate} } },
    { $sort: { acq_date: -1 } },
    {
      $group: {
        _id: { _id: '$acq_date' },
        date: { $first : '$acq_date' },
        latitude: { $push: "$latitude" },
        longitude: { $push: "$longitude" },
        confidence: { $push: "$confidence" },
        brightness: { $push: "$brightness" },
        count: { $sum: 1 }
      }
    }    
  ])
}

FireSchema.statics.getToday = async function() {
  var { data } = await axios.get(
    "https://firms.modaps.eosdis.nasa.gov/data/active_fire/c6/csv/MODIS_C6_Australia_NewZealand_24h.csv"
  )

  const fires = []

   await csv()
    .fromString(data)
    .subscribe(async (row) => {
        const fire = this(row)
        let query = fire.toObject()
        delete query._id
        oldFire = await this.findOne(query)
        if (oldFire === null) fires.push(fire.save())
    })

    return Promise.all(fires)
}

module.exports = mongoose.model("Fire", FireSchema)
