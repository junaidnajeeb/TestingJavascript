/* jslint node: true */
/* jshint esversion: 6 */
'use strict';
const assert = require('assert');
const { findUserById, findUserByEmail } = require('./../async');

describe("The Async package Tests", () => {

	describe("findUserById function tests", () => {

		it('Should return undefined', () => {

			const users = findUserById(1);
			assert.equal(users.user, undefined);
		});
	});

	describe("findUserById function tests", () => {

		it('Should return user with id 1 using done', (done) => {

			findUserById(1).then(users => {
				assert.equal(users.user.name, 'junaid');
				done();
			});
		});

		it('Should return user with id 1 using return promise', () => {

			return findUserById(1).then(users => {
				assert.equal(users.user.name, 'junaid');
			});
		});

		it('Should return user with id 1 using async function', async () => {

			const result = await findUserById(1);
			assert.equal(result.user.name, 'junaid');
		});

		it('Should return error on empty user ', () => {
			return findUserById(5).then(users => {
				assert.fail("ERROR EXPECTED but user was found.");
			}).catch(error => {
				assert.equal(error.message, "User with id: 5 was not found.");
			});
		});
	});

	describe("findUserByEmail function tests", () => {
		it('Should return user by email', () => {
			return findUserByEmail('junaid.najeeb@gmail.com').then(users => {
				assert.equal(users.user.email, 'junaid.najeeb@gmail.com');
				assert.equal(users.user.id, 1);
			});
		});
	});
});