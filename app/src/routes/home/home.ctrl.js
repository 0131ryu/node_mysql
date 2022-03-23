"use strict";
const User = require("../../models/User");
const UserStorage = require("../../models/UserStorage");

const users = {
  id: ["test", "today", "okay"],
  psword: ["1234", "1234", "123456"],
};

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
  register: (req, res) => {
    res.render("home/register");
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    console.log(response);
    return res.json(response);
  },
  register: (req, res) => {
    const user = new User(req.body);
    const response = user.register();
    console.log(response);
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
