// Let and Const

// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';

console.log(name5);

//ES6

const name6 = 'Jane Smith';
let age6 = 23;
// name6 = 'Jane Miller'
console.log(name6);

//ES5
function driversLicense5 (passedTest) {
	if (passedTest) {
		var firstName = 'John';
		var yearOfBirth = 1990;
	}
	console.log(firstName, 'born in', yearOfBirth, 'is now officially able to drive a car.'); //this console log still works because the vars were created inside the function, so the whole function has access to them
}

driversLicense5(true);

//ES6 variables are block-scoped, not function-scoped
function driversLicense6 (passedTest) {
	if (passedTest) {
		let firstName = 'John';
		const yearOfBirth = 1990;
	}
	console.log(firstName, 'born in', yearOfBirth, 'is now officially able to drive a car.'); //this console log does not work because the let and const were created inside a block, between curly braces, so the only that block has access to them
}

driversLicense6(true);
