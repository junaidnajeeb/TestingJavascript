/* jslint node: true */
/* jshint esversion: 6 */
'use strict';
const assert = require('assert');
const { parse, stringify } = require('./../query');

describe("The Query package Tests", function() {


	describe("Parse function tests", function() {
		it("Should return an object of all query params when a query string is passed ", function() {
			const query = "?by=junaid-najeeb&popular=true&category=nodejs";
			const actual = parse(query);

			const expectation = {
				by: 'junaid-najeeb',
				popular: 'true',
				category: 'nodejs'
			}
			assert.deepEqual(actual, expectation);
		});
	});

	describe("Stringify function tests", function() {

		it("Should return an string key-value of all object keys and values when object is passed", function() {
			const query = {
				by: 'junaid-najeeb',
				popular: 'true',
				category: 'nodejs'
			}
			const actual = stringify(query);

			const expectation = 'by=junaid-najeeb&popular=true&category=nodejs';
			assert.deepEqual(actual, expectation);
		});

		it("Should return an empty string when object is empty", function() {
			const query = {};

			const actual = stringify(query);

			const expectation = '';
			assert.deepEqual(actual, expectation);
		});

	});
});

