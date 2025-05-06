// const express = require("express");
import express from "express";
import 'dotenv/config'
import webRoutes from "./routes/web";

const app = express();
const PORT = process.env.PORT || 8080;

// config temple engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config static file: image/css/js
app.use(express.static('public'));

//config routes
webRoutes(app);

app.listen(8080, () => {
    console.log(`My App  is running on port: ${PORT}`)
    console.log("PORT IN env: ", process.env.PORT);
    console.log(__dirname + '/views');
})