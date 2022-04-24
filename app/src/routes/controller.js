"use strict";

const User = require("C:/Users/hsh99/Desktop/sweather/app/src/models/user");

const output = {
    index: (req, res) => {
        res.render("../views/index.ejs");
    },
    login: (req, res) => {
        res.render("../views/login.ejs");
    },
    register: (req,res) => {
        res.render("../views/register.ejs")
    }
}
const process = {
    login : async (req,res) => {
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },
    register : async (req,res) => {
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};