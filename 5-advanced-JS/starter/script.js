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
let marriedPrototypeProperty = {
	married: true
};
let lastname = {
	lastName: 'Ridley'
};

let daniel = Object.assign(marriedPrototypeProperty, lastname, {
	name: { value: 'Daniel' },
	fat: { value: true }
});
console.log(daniel);

/**
 Primitives vs. Objects
 **/
//Object variables don't actually hold the data, they point to where the data is stored

let a = 42;
let b = a;
b = 95;
console.log(a, b);

let obj1 = {
	name: 'John',
	age: 45
};
let obj2 = obj1;
console.log(obj1.age, obj2.age);

//functions

let age = 27;
let obj = {
	name: 'Jonas',
	city: 'Lisbon'
};

function change (a, b) {
	a = 30;
	b.city = 'San Franciso';
}

change(age, obj);
console.log(age);
console.log(obj.city);

/**
 Everything is an Object: Prototype and Inheritance Chain
 **/
/**
 Everything is an Object: Prototype and Inheritance Chain
 **/
