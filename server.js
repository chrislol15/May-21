console.log("hello mike and chris");

const path = require("path");
const express = require("express");

const PORT = 2010
const app = express();

app.get("/mike", function (req, res) {
    res.send("hello mike")
})

app.get("/chris", function (req, res) {
    res.send("hello chris")
});

app.get("/dogs", function (req, res) {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, "/dogs.html"));
});

app.get("/lion", function (req, res) {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, "/lion.html"));
});

app.get("/tiger", function (req, res) {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, "/tiger.html"));
});

app.get("/wolf", function (req, res) {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, "/wolf.html"));
});

app.get("/jaguar", function (req, res) {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, "/jaguar.html"));
});

app.listen(PORT, function () {
    console.log("listening on port" + PORT + "...");
})

