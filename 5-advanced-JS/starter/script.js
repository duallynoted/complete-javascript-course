/**
 Everything is an Object: Prototype and Inheritance Chain
 **/

//everything is an object, but not really
//there are two big types of values: primitives and objects
//primitives are these data types: numbers, strings, booleans, undefined, and null
//objects are: everything else!
//--arrays, functions, objects, dates, wrappers for Numbers, Strings, and Booleans, etc

//object-oriented programming:
//--objects interacting with one another through methods and properties
//--used to store data, structure applications into modules, and keep code clean
//a constructor (or prototype) is like a blueprint to make other objects
//--say, with a new Person constructor or new Person Prototype, we can create as many instances as we want
//inheritance is when one object is based on another object
//--when one object gets access to another object's methods and properties
//--athlete constructor along with person constructor:
//----the Person will have a name, yearOfBirth, job, and age
//----then the Athlete constructor inherits those and adds olympics, olympicMedals, allowedOlympics()

//JavaScript is a Prototype-based language
//--this means that inheritance works by using something called prototypes
//each and every object has a prototype property
//the prototype property of an object is where we put methods and properties that we want other objects to inherit
//the Constructor's (Person) prototype is NOT a property of the Constructor (Person) itself, but of all the instances that are created through it
//when a certain method or property is called(searched for), the search starts in the object itself, and if it cannot be found,
//the search moves on the the object's prototype. This continues until the method is found, or it reaches null
//THIS IS THE PROTOTYPE CHAIN
//john.toString() --> Person.toString() --> Object.toString BINGO! >>>>>>>toString() moves up the chain and is found on the Object object's prototype
//john.toPPString() --> Person.toPPString() --> Object.toPPString --> null >>>>>>>>JavaScript searches for toPPString(), doesn't find it on any prototype

/**
 Creating Objects: Function Constructors
 **/

// var john = {
// 	name: 'John',
// 	yearOfBirth: 1990,
// 	job: 'teacher'
// };

// var Person = function (name, yearOfBirth, job) {
// 	this.name = name;
// 	this.yearOfBirth = yearOfBirth;
// 	this.job = job;
// }
//
// Person.prototype.calcAge =function () {
// 	console.log(2019 - this.yearOfBirth)
// }
// Person.prototype.lastName = 'Smith'
// // this is called instantiation, because these are *instances* of the Person object
// // the word new creates an *empty* object. EMPTY
// // it also points the this variable to that empty object, and away from the global object
// var john = new Person('John', 1990, 'teacher');
// let me = new Person('Daniel', 1980, 'developer', 264)
// let mark = new Person('Mark', 1948, 'retired')
// console.log(john, me, mark)
// me.calcAge()
// mark.calcAge()
// john.calcAge()
// //
// let Guitar  = function (brand, model, electric, acoustic, price) {
// 	this.brand = brand;
// 	this.model = model;
// 	this.electric = electric;
// 	this.acoustic = acoustic;
// 	this.price = price;
// }
//
// Guitar.prototype.saved = function (sale){
// 	return this.price - sale
// }
//
// let lesPaul = new Guitar('Gibson', 'Les Paul Studio', true, false, 2000);
// let tele = new Guitar('Fender', 'Mexican Telecaster', true, false, 1000);
// let martin = new Guitar('Martin', 'GCPC-A4', false, true, 1699)
//
// Guitar.prototype.whoOwnsIt = 'This is my guitar'
// console.log(lesPaul, tele, martin)
// console.log('You saved $' + lesPaul.saved(600) + ' on the ' + lesPaul.model + ' by using eBay!')
// console.log('You saved $' + tele.saved(400) + ' by using eBay!')
// console.log('You saved $' + martin.saved(1500) + ' by using eBay!')
//THAT WAS FUN!!!

/**
 Creating Objects: Object.Create
 **/

// let personProto = {
// 	calcAge: function () {
// 		console.log(2019 - this.yearOfBirth)
// 	}
// }
//
// let john = Object.create(personProto)
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';
//
// let jane = Object.create(personProto, {
// 	name: {value: 'Jane'},
// 	yearOfBirth: {value: 1969},
// 	job: {value: 'Designer'}
// })
//
// let marriedPrototypeProperty = {
// 	married: true
// };
// let lastname = {
// 	lastName: 'Ridley'
// };
//
// let daniel = Object.assign(marriedPrototypeProperty, lastname, {
// 	name: { value: 'Daniel' },
// 	fat: { value: true }
// });
// console.log(daniel);

/**
 Primitives vs. Objects
 **/
//Object variables don't actually hold the data, they point to where the data is stored

// let a = 42;
// let b = a;
// b = 95;
// console.log(a, b);
//
// let obj1 = {
// 	name: 'Daniel',
// 	age: 39
// };
// let obj2 = obj1;
// let obj3 = obj1;
// obj1.age = 40;
// // obj3.name = 'Tony'
// console.log(obj1.age, obj1.name);
// console.log(obj2.age, obj2.name);
// console.log(obj3.age, obj3.name);
//
// //functions
//
// let age = 39;
// let obj = {
// 	name: 'Daniel',
// 	city: 'Shoreview',
// };
//
// function change (a, b) {
// 	a = 23;
// 	b.city = 'Minneapolis';
//
// }
//
// change(age, obj);
// console.log(age, obj);
//When you pass an object in to a function, you're actually passing the REFERENCE to that object, not the object itself

/**
 First Class Functions: Passing Functions as Arguments
 **/

//A function is an instance of the Object type
//It behaves like any other object
//We can store functions in variables
//We can pass a function as an argument to another function
//We can return a function from a function
//This is all FIRST CLASS FUNCTIONS

// let years = [1990, 1965, 1937, 2005, 1998, 1981, 1980];
//
// function arrayCalc (arr, fn) {
// 	let arrRes = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		arrRes.push(fn(arr[i]));
// 	}
// 	return arrRes;
// }
//
// function calculateAge (el) {
// 	return 2019 - el;
// }
//
// let ages = arrayCalc(years, calculateAge);
// console.log(ages);
//
// let ridleyAges = [2.5, 5, 39, 38];
//
// function arrayCalc (arr, fn) {
// 	let arrRes = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		arrRes.push(fn(arr[i]));
// 	}
// 	return arrRes;
// }
//
// function addAge (el) {
// 	return 2019 + el;
// }
//
// let doubleOurAge = arrayCalc(ridleyAges, addAge);
// console.log(doubleOurAge);
//
// function isFullAge (el) {
// 	return el >= 18;
// }
//
// let fulAge = arrayCalc(ages, isFullAge);
// console.log(fulAge);
//
// function maxHeartRate (el) {
// 	if (el >= 18 && el <= 81) {
// 		return Math.round(206.9 - (0.67 * el));
// 	} else {
// 		return -1;
// 	}
// }
//
// let heartRate = arrayCalc(ages, maxHeartRate);
// console.log(heartRate);

let salaries = [23000, 42500, 97000];

function arrayCalc (array, funktion) {
	let arrayResults = [];
	for (let i = 0; i < array.length; i++) {
		arrayResults.push(funktion(array[i]));
	}
	return arrayResults;
}

function raisePercentage (el) {
	if (el > 85000) {
		return el * .10 + el;
	} else if (el > 40000 && el < 84000) {
		return el * .15 + el;
	} else if (el < 39000) {
		return el * .20 + el;
	} else {
		return el;
	}
}

let currentRaises = arrayCalc(salaries, raisePercentage);
console.log(currentRaises);

function fizzBuzz (num) {
	if (num % 15 === 0) {
		return 'fizzBuzz';
	} else if (num % 5 === 0) {
		return 'fizz';
	} else if (num % 3 === 0) {
		return 'Buzz';
	} else {
		return num.toString();
	}
}

for (let i = 0; i <= 100; i++) {
	console.log(fizzBuzz(i));
}

/**
 Everything is an Object: Prototype and Inheritance Chain
 **/
