"use strict";

const express=require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 9000;

//routing
const home = require("./src/routes/router.js");

//setiing
app.set("views", "./src/views");
app.set("view engine", "ejs");

//middle ware
app.use(express.static(`${__dirname}/src`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/", home);

app.listen(PORT, function() {
    console.log("server started");
});