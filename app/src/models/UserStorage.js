"use strict";

const e = require("express");
//const fs = require("fs").promises; -> user.json 사용
const db = require("../config/db");

class UserStorage {
  // static #getUserInfo(data, id) {
  //   const users = JSON.parse(data);
  //   const idx = users.id.indexOf(id);
  //   const usersKeys = Object.keys(users);
  //   const userInfo = usersKeys.reduce((newUser, info) => {
  //     newUser[info] = users[info][idx];
  //     return newUser;
  //   }, {});
  //   console.log(userInfo);
  //   return userInfo;
  // }

  // static #getUsers(data, isAll, fields) {
  //   const users = JSON.parse(data);
  //   if (isAll) return users;
  //   const newUsers = fields.reduce((newUsers, field) => {
  //     console.log(newUsers, field);
  //     if (users.hasOwnProperty(field)) {
  //       newUsers[field] = users[field];
  //     }
  //     return newUsers;
  //   }, {});
  //   return newUsers;
  // }

  // static getUsers(isAll, ...fields) {}

  static getUserInfo(id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM users WHERE id = ?;";
      db.query(query, [id], (err, data) => {
        if (err) reject(err);
        console.log(data[0]);
        resolve(data[0]);
      });
    });
  }

  static async save(userInfo) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO users(id, name, psword) VALUES(?, ?, ?);";
      db.query(query, [userInfo.id, userInfo.name, userInfo.psword], (err) => {
        if (err) reject(`${err}`);
        resolve({ success: true });
      });
    });
  }
}

module.exports = UserStorage;
