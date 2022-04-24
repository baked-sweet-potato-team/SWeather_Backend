"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./controller");

router.get("/", ctrl.output.index);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.post("/login", ctrl.process.login);

module.exports = router;