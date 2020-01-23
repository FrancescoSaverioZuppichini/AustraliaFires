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

FireSchema.statics.aggregateByDate =  function (date) {
  return this.aggregate([
    { $match: { acq_date: { $gte: date } }},
    { $sort: { acq_date: -1 }},
     {$group: { _id : { date : "$acq_date" },
              latitude: {$push: "$latitude"},
              longitude: {$push: "$longitude"},
              confidence:  {$push: "$confidence"},
              brightness: {$push: "$brightness"}
      }}
  
  ])
};

module.exports = mongoose.model("Fire", FireSchema)
