"use strict";

const index = (req, res) => {
    res.render("../views/index.ejs");
}

const login = (req, res) => {
    res.render("../views/login.ejs");
}

module.exports = {
    index,
    login,
};