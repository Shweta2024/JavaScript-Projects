const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let tasks = [];
let works = [];

app.get("/", function (req, res) {
    let currentDay = date.getDate();
    res.render("index", { title: currentDay, task: tasks });
});

app.post("/", function (req, res) {
    let newTask = req.body.newTask;
    let buttonPressed = req.body.button;
    if (buttonPressed === "Work") {
        works.push(newTask);
        res.redirect("/work");
    }
    else {
        tasks.push(newTask);
        res.redirect("/");
    }
});


app.get("/work", function (req, res) {
    res.render("index", { title: "Work", task: works });
});


app.listen(5000, function (req, res) {
    console.log("server started at port : 5000");
});
