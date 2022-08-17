let express = require('express');
let cors = require("cors")
let adsRouter = require("./routes/ads");

let app = express();

app.use(cors())
app.use(express.json());


app.use('/ads', adsRouter);

module.exports = app;
