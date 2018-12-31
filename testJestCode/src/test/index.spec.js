/* jslint node: true */
/* jshint esversion: 6 */
'use strict';
const { add } = require('./../index');
const assert = require('assert');

describe('Function Add Test', () => {

	it("Should throw expections on missing arguments", function () {
		assert.throws(() => {
			add();
		});

		assert.throws(() => {
			add(null, 1);
		});

		assert.throws(() => {
			add(2, null);
		});
	});

	it("Should not throw expection when both arguments are passed", function () {
		assert.doesNotThrow(() => {
			add(2, 34);
		});
	});

	it("Should return 11 for argument 5 and 6", function () {
		const result = add(5, 6);
		assert.equal(result, 11, "add failed");
	});
});