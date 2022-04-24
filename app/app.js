"use strict";

const express=require("express");
const app = express();
const PORT = 9000;

//routing
const home = require("./src/routes/router.js");

//setiing
app.set("views", "./src/views");
app.set("view engine", "ejs");

//middle ware
app.use("/", home);
app.use(express.static(`${__dirname}/src`));

app.listen(PORT, function() {
    console.log("server started");
});