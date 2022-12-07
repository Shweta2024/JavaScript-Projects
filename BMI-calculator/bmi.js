const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);

    const bmi = weight / (height * height);

    const message = decideMessage(bmi);

    res.write("<h1>Your BMI is : " + bmi + ". You are in the "+ message + " range.</h1>");
    res.send(); 
})

function decideMessage(bmi) {
    var message="";
    if(bmi<18.5) message += "underweight";
    else if(bmi<25) message += "healthy";
    else if(bmi<30) message += "overweight";
    else message += "obese";

    return message;
}

app.listen(5000, function (req, res) {
    console.log("server started at port 5000");
});