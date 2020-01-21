var express = require("express")
var path = require("path")
var cookieParser = require("cookie-parser")
var logger = require("morgan")
var axios = require("axios")
var path = require("path")
var fs = require("fs")

const PORT = process.env.PORT || "8080"
const DATA_DIR = path.normalize("../")

function getTodayData() {
  return axios.get(
    "https://firms.modaps.eosdis.nasa.gov/data/active_fire/c6/csv/MODIS_C6_Australia_NewZealand_24h.csv"
  )
}

files = fs.readdirSync('./public/data')
console.log(files.includes('fires.csv'))
const app = express()

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.get("/", function(req, res, next) {
  res.render("index", { title: "Express" })
})

app.get("/data/", async (req, res, next) => {
  let { date } = req.query
  date = new Date(date)
  const file_name = `${date.toISOString()}.csv`
  const file_path = path.normalize(`./public/data/${file_name}`)
  const files  = fs.readdirSync('./public/data')

  if(!files.includes(file_name)){
    var { data } = await getTodayData()
    fs.writeFileSync(file_path, data)
  }

  res.json({ path: file_path })
})

// axios.get('https://firms.modaps.eosdis.nasa.gov/data/active_fire/c6/csv/MODIS_C6_Australia_NewZealand_24h.csv')
// .then(data => console.log(data))
// .catch(err => console.error(err))

app.listen(PORT, function() {
  console.log(`App listening on port ${PORT} 🚀`)
})
