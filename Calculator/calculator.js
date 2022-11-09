const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

//root route
//__dirname -> it gives the full path of the current directory
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var ans = num1 + num2;

    res.send("<h1>The sum  of " + num1 + " and " + num2 + " is : " + ans);
});

app.listen(3000, function () {
    console.log("server started at port 3000");
});