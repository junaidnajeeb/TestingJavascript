/* jslint node: true */
/* jshint esversion: 6 */
'use strict';

function add (num1 , num2) {

	if (!num1 || !num2) {
		throw new Exception("please provide the arguments");
	}
	
	return num1 + num2;
}

module.exports = {
	add
}