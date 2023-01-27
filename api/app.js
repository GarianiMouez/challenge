var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const requestID = require("express-request-id");
var cors = require("cors");
require("./config");

var indexRouter = require("./routes");

var app = express();
app.use(cors());
app.use(requestID());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(process.env.PREFIX, indexRouter);

module.exports = app;
