// const express = require("express");
import express from "express";
import 'dotenv/config'
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("Hello worlddsad")
});

app.get("/cuong", (req, res) => {
    res.send("Hello cuong")
});


app.listen(8080, () => {
    console.log(`My App  is running on port: ${PORT}`)
    console.log("PORT IN env: ", process.env.PORT);
})