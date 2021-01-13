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
const url = "mongodb+srv://Monera:35719523571952@cluster0.gkvm6.mongodb.net/serverP";
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

//new
const path = require('path');
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// ** MIDDLEWARE ** //
const whitelist = ['http://localhost:3000', 'https://finalprojectcwd.herokuapp.com/']
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))


const port = process.env.PORT || 4000; 

app.listen(port, () => {
  console.log("App is Listening to port:", port);
});