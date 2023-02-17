var express = require("express");
var app = express();
require("dotenv").config();
app.get("/", function (req, res) {
  res.send(process.env.token + "sadsa");
});




app.listen(process.env.PORT || 3000);
module.exports = app;
