var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send('sosas');
});

app.listen(process.env.PORT || 3000);
module.exports = app;
