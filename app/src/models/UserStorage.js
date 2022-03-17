"use strict";

const e = require("express");

class UserStorage {
  static #users = {
    //#붙으면 외부에서 불러올 수 없음
    id: ["test", "today", "okay"],
    psword: ["1234", "1234", "123456"],
    name: ["테스트", "오늘이", "오케이"],
  };
  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      console.log(newUsers, field);
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    console.log(newUsers);
    return;
  }
}

module.exports = UserStorage;
