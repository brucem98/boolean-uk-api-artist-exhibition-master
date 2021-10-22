const express = require("express");

const {createOneAddressAndExhibition} = require("./controller")

const router = express.Router();

router.post("/", createOneAddressAndExhibition)

module.exports = router;
