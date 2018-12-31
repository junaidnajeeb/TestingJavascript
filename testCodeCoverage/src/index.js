/* jslint node: true */
/* jshint esversion: 6 */
'use strict';

/*
 init a package.json file -> npm init -y 
 install mocha -> npm i --save-dev mocha
*/

function add (num1 , num2) {

	if (!num1 || !num2) {
		throw new Exception("please provide the arguments");
	}
	
	return num1 + num2;
}

module.exports = {
	add
}