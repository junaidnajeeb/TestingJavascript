/* jslint node: true */
/* jshint esversion: 6 */
'use strict';

const users = require('./db/users');

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(user => user.id == id)

      if (!user) {
        return reject(new Error(`User with id: ${id} was not found.`));
      }

      return resolve({
        message: 'User found successfully.',
        user
      })
    }, 100)
  })
}

const findUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(user => user.email == email);

      if (!user) {
        return reject(new Error(`User with email: ${email} was not found.`));
      }

      return resolve({
        message: 'User found successfully.',
        user
      })
    }, 100)
  })
}

module.exports = {
  findUserByEmail,
  findUserById
}