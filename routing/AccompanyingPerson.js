const express = require("express");
const app = express();
const mongoose = require('mongoose');
const router = express.Router();
const AccompanyingPersonSchema = require('../schemas/AccompanyingPersonSchema');
const AccompanyingPersonModel = mongoose.model("AccompanyingPersonModel", AccompanyingPersonSchema);



module.exports = router;