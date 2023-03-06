var express = require("express");
var app = express();
require("dotenv").config();
app.get("/", function (req, res) {
  res.send(process.env.token + " pura orueba en stage y no mmsa");
});


app.listen(process.env.PORT || 3000);
module.exports = app;
