var express = require("express");
var app = express();
const modulo = require("./models/utils.js")
require("dotenv").config();

app.get("/", function (req, res) {
  res.send(process.env.token + " pura orueba en stage y no mmsa");
});
// comentario para la IA
app.post("/", function (req, res) {
  res.send("prueba ewe");
});


app.listen(process.env.PORT || 3000);
module.exports = app;
