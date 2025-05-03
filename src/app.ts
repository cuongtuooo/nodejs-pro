// const express = require("express");
import express from "express";
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
    res.send("Hello world")
});

app.get("/cuong", (req, res) => {
    res.send("Hello cuong")
});


app.listen(8080, () => {
    console.log(`My App  is running on port: ${PORT}`)
})