"use strict";

//모듈
const express = require("express");
const app = express();

//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");

//미들웨어(use) 등록
app.use("/", home);
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));

module.exports = app;
