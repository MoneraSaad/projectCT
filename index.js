const express = require("express");
const app = express();
var bodyParser = require('body-parser')
//const jwt = require("jsonwebtoken");
// const cookies = require("cookie-parser");



app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);

app.use(express.static("public"));

// var secret = 'abcdefghujklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*()_+';
// module.exports = secret;
// app.use(cookies());
const url = "mongodb+srv://Monera:kkkkkkk2@cluster0.gkvm6.mongodb.net/serverP";
const mongoose = require("mongoose");
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



const userRouter = require("./routing/users");
app.use("/api/users", userRouter);

const childrenCardsRouter = require("./routing/childrenCards");
app.use("/api/childrenCards", childrenCardsRouter);

const driverRouter = require("./routing/Driver");
app.use("/api/Driver", driverRouter);

const childRouter = require("./routing/Children");
app.use("/api/Children", childRouter);

const port = process.env.PORT || 4000; 

app.listen(port, () => {
  console.log("App is Listening to port:", port);
});