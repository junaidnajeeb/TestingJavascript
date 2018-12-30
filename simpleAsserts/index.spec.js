/* jslint node: true */
/* jshint esversion: 6 */
'use strict';
const { add } = require('./index');
const assert = require('assert');

const result = add(5, 6);

assert.equal(result, 11, "add failed");

assert.throws(() => {
	add();
});

assert.throws(() => {
	add(null, 1);
});

assert.throws(() => {
	add(2, null);
});

assert.doesNotThrow(() => {
	add(2, 34);
});

console.log("all good");