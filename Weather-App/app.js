const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    const cityName = req.body.cityName;

    const apiKey = "4122c2746f7375e917465706efbb179a"
    const unit = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=" + unit + "&appid=" + apiKey
    https.get(url, function (response) {

        response.on("data", function (data) {
            const weatherReport = JSON.parse(data);
            const temperature = weatherReport.main.temp;
            const description = weatherReport.weather[0].description;
            const icon = weatherReport.weather[0].icon;
            const iconUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png"

            res.write("<h1>The temperature in " + cityName + " : " + temperature + " degree celcius.</h1 > ");
            res.write("<p>The weather is currently " + description + ".</p>")
            res.write("<img src=" + iconUrl + ">");
            res.send();
        })
    })

})

app.listen(5000, function () {
    console.log("server started at port : 5000");
});

app.use('/static', express.static('static'))
