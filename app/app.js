"use strict";

const express=require("express");
const app = express();

//routing
const home = require("./src/routes");

//setiing
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/JS`));
app.use("/", home);