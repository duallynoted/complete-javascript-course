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
//
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
//
//
// let Car = function(make, model, color, cost, productionYear) {
// 	this.make = make;
// 	this.model = model;
// 	this.color = color;
// 	this.cost = cost;
// 	this.productionYear = productionYear;
// }
//
// Car.prototype.ageOfCar = function () {
// 	return 2019 - this.productionYear
// }
//
// let isuzu = new Car('Isuzu', 'Pup', 'Navy Blue', 1800, 1986)
// let firstMazda = new Car('Mazda', '323', 'Light Blue', 2500, 1993)
// let secondMazda = new Car('Mazda', '626', 'Green', 3700, 1996)
// let nissan = new Car('Nissan', 'Pathfinder', 'Black', 6000, 1996)
// let firstHonda = new Car('Honda', 'Ridgeline', 'Black Pearl', 35000, 2010)
// let secondHonda = new Car('Honda', 'Odyssey', 'Gun Metal Gray', 37000, 2013)
// let firstToyota = new Car('Toyota', 'Venza', 'Red', 15000, 2010)
// let secondToyata = new Car('Toyota', 'Corolla', 'Gray', 21000, 2017)
// console.log(isuzu.ageOfCar(), firstMazda.ageOfCar(), secondMazda.ageOfCar(), nissan.ageOfCar(), firstHonda.ageOfCar(), secondHonda.ageOfCar(),firstToyota.ageOfCar(), secondToyata.ageOfCar())
// // THAT WAS FUN!!!
//
// let Customer = function (firstName, lastName, isActive, yearJoined) {
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// 	this.isActive = isActive;
// 	this.yearJoined = yearJoined;
// }
//
// Customer.prototype.loyalSince = function() {
// 	return 2019 - this.yearJoined
// }
//
// let milo = new Customer('Milo', 'Ridley', true, 2017)
// let amit = new Customer('Amit', 'Praveen', false, 2003)
// console.log(milo.firstName + ' has been a loyal customer for ' + milo.loyalSince() + ' years!')
// console.log(amit.firstName + ' has been a loyal customer for ' + amit.loyalSince() + ' years!')
//
// let RoofJob = function (name, brand, color, jobDate, sqFootage) {
// 	this.name = name;
// 	this.brand = brand;
// 	this.color = color;
// 	this.jobDate = jobDate;
// 	this.sqFootage = sqFootage;
// }
//
// let ridley = new RoofJob('Ridley', 'Owens Corning', 'Estate Gray', '12/1/19', 2500)
// let babitha = new RoofJob('Babitha', 'James Hardie', 'Boothbay Blue', '12/31/19', 4500)
// RoofJob.prototype.cost = function () {
// 	return 6.85 * this.sqFootage
// }
//
// console.log('Looks like for the ' + ridley.name + ' project, they are using ' + ridley.brand + ' in the ' + ridley.color + ' color. The start date will be ' + ridley.jobDate + ' and will cost approximately $' + ridley.cost() +' dollars.' )
// console.log('Looks like for the ' + babitha.name + ' project, they are using ' + babitha.brand + ' in the ' + babitha.color + ' color. The start date will be ' + babitha.jobDate + ' and will cost approximately $' + babitha.cost() +' dollars.' )
/**
 Creating Objects: Object.Create
 **/

// //This is Object.create
//
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
// let jack = Object.create(personProto)
// jack.name = 'Jack';
// jack.yearOfBirth = 1993
// jack.job = 'Developer'
//
// let jane = Object.create(personProto, {
// 	name: {value: 'Jane'},
// 	yearOfBirth: {value: 1969},
// 	job: {value: 'Designer'}
// })
//
// let jim = Object.create(personProto, {
// 	name: {value: 'Jim'},
// 	yearOfBirth: {value: 1952},
// 	job: {value: 'Insurance Salesman'}
// })
//
// console.log(john.calcAge(), jane.calcAge(), jack.calcAge())
// console.log(jim.calcAge(), jim, jack)
//
// //This is Object.assign
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
//
// let colorPrototype = {
// 	color: 'Space Gray'
// }
// let model = {
// 	// canBeAnythingSoNameItWhatYouLike: 'iPhone X'
// 	model: 'iPhone X'
// }
// let phone = Object.assign(colorPrototype, model, {
// 	type: {phoneType: 'smartphone'},
// 	brand: {brandName: 'Apple'}
// })
//
// console.log(phone)



/**
 Primitives vs. Objects
 **/
// Object variables don't actually hold the data, they point to where the data is stored

let a = 42;
let b = a;
b = 95;
console.log(a, b);

let obj1 = {
	name: 'Daniel',
	age: 39
};
let obj2 = obj1;
let obj3 = obj1;
obj1.age = 40;
// obj3.name = 'Tony'
console.log(obj1.age, obj1.name);
console.log(obj2.age, obj2.name);
console.log(obj3.age, obj3.name);

//functions

let age = 39;
let obj = {
	name: 'Daniel',
	city: 'Shoreview',
};

function change (a, b) {
	a = 23;
	b.city = 'Minneapolis';

}

change(age, obj);
console.log(age, obj);
// When you pass an object in to a function, you're actually passing the REFERENCE to that object, not the object itself

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

// let salaries = [23000, 42500, 97000];
//
// function arrayCalc (array, funktion) {
// 	let arrayResults = [];
// 	for (let i = 0; i < array.length; i++) {
// 		arrayResults.push(funktion(array[i]));
// 	}
// 	return arrayResults;
// }
//
// function raisePercentage (el) {
// 	if (el > 85000) {
// 		return el * .10 + el;
// 	} else if (el > 40000 && el < 84000) {
// 		return el * .15 + el;
// 	} else if (el < 39000) {
// 		return el * .20 + el;
// 	} else {
// 		return el;
// 	}
// }
//
// let currentRaises = arrayCalc(salaries, raisePercentage);
// console.log(currentRaises);
//
// function fizzBuzz (num) {
// 	if (num % 15 === 0) {
// 		return 'fizzBuzz';
// 	} else if (num % 5 === 0) {
// 		return 'fizz';
// 	} else if (num % 3 === 0) {
// 		return 'Buzz';
// 	} else {
// 		return num.toString();
// 	}
// }
//
// for (let i = 0; i <= 100; i++) {
// 	// console.log(fizzBuzz(i));
// }
//
// let bills = [1000, 900, 45, 1700, 210, 600, 367, 500]
// function practiceArray (arr, fn) {
// 	let arrayResults = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		arrayResults.push(fn(arr[i]));
// 	}
// 	return arrayResults
// }
//
// function leftAfterBills (el) {
// 	return 9000 - el
// }
//
// let monthlyBudget = practiceArray(bills, leftAfterBills)
// console.log(monthlyBudget)

/**
 First Class Functions: Functions Returning Functions
 **/

// function interviewQuestion(job) {
// 	if(job === 'designer') {
// 		return function (name, title) {
// 			console.log(name + ', since you are a ' + title + ', can you please explain what UX design is?')
// 		}
// 	} else if(job === 'teacher') {
// 		return function (name) {
// 			console.log('What subject do you teach, ' + name + '?')
// 		}
// 	} else if(job === 'developer') {
// 		return function (name, title) {
// 			console.log('His name is ' + name + ', and he is a ' + title + '.')
// 		}
// 	}
// 	else {
// 		return function (name) {
// 			console.log('Hello, ' + name + ', what do you do?')
// 		}
// 	}
// }
// interviewQuestion('')('Daniel')
// interviewQuestion('developer')('Ujwal', 'Director of Web Services')
//
// // let teacherQuestion = interviewQuestion('teacher')
// // teacherQuestion('John')
// //
// let designerQuestion = interviewQuestion('designer')
// designerQuestion('Mason', 'Senior UX Designer')
//
// let shrugQuestion = interviewQuestion()
// shrugQuestion('Julie')

/**
 Immediately Invoked Function Expressions (IIFE)
 **/

// //IFFEs are good for when you want data privacy.
// //You can only call an iffe once, because the function is not assigned to a variable, and that is what we want here
// // They also don't interfere with other variables in the global execution context.

// function game () {
// 	var score = Math.random() * 10;
// 	console.log(score >= 5);
// }
//
// game()

// (function () {
// 	var score = Math.random() * 10;
// 	console.log(score >= 5);
// })();
// // console.log(score) --Can't see the score here because it is outside the scope of the function
//
// (
// 	function (goodLuck) {
// 		var score = Math.random() * 10;
// 		console.log(score >= 5 - goodLuck);
// 	}
// )(5);
//
//
// //My example
// (
// 	function (el) {
// 		var realAge = 2019 - el;
// 		console.log(realAge);
// 	}
// )(1949);
// console.log(realAge)

/**
 Closures
 **/

//An inner function always has access to the variables and parameters of its outer function, even after the outer function has returned
//after the function is returned, it is taken off the execution stack, so we can't access the variables. right? nope. the secret to closures is
//that we're storing those variables, so they're still in the same scope chain as they were before. it still sits there in memory and can be accessed
//the current execution context has closed in on the outer variable object so it can use it, and that's why it's called a closure

// function retirement (retirementAge) {
// 	let a = ' years left until retirement.';
// 	return function (yearOfBirth) {
// 		let age = 2019 - yearOfBirth;
// 		console.log(retirementAge - age + a);  //here, the inner function has access to 'retirementAge' and 'a' even though they're declared in
// 		//in the outer function
// 	};
// }
//
// let retirementUS = retirement(66);
// retirementUS(1980);
//
// let retirementGermany = retirement(65);
// let retirementIceland = retirement(67);
// retirementGermany(1980);
// retirementIceland(1980);
//
// function interviewQuestion (job) {
// 	let des = ', can you please explain what UX design is?';
// 	let teach = 'What subject do you teach, ';
// 	let shrug = ', what do you do?';
// 	return function (name) {
// 		if (job === 'designer') {
// 			console.log(name + des);
// 		} else if (job === 'teacher') {
// 			console.log(teach + name + '?');
// 		} else {
// 			console.log(name + shrug);
// 		}
// 	};
// }
//
// interviewQuestion('designer')('Dustin');
// interviewQuestion('teacher')('Frannie');
// interviewQuestion()('Julie');
//
// //OR
//
// let interviewQuestionDesigner = interviewQuestion('designer');
// let interviewQuestionTeacher = interviewQuestion('teacher');
// let interviewQuestionIDK = interviewQuestion();
// interviewQuestionDesigner('Mason');
// interviewQuestionIDK('John');
// interviewQuestionTeacher('Samantha');
//
// function init () { //original function
// 	let name = 'Daniel'; //variable created by init()
//
// 	function display (lastName) { //inner function inside init(), this is a CLOSURE
// 		alert(name); //alerting 'name' which the closure has access to even though it's outside its own scope
// 		             //it's in the scope of its parent
// 	}
// 	display(); //evaluate the closure
// 			   //in this example, I'm not returning the closure, so I have to call it here.
// 	           //otherwise, I'd return the closure, and then call it down with the original
// 	           //function like this: init()()
// }
//
// init();//evaluate the original function

// 	if(job === 'designer') {
// 		return function (name, title) {
// 			console.log(name + ', since you are a ' + title + ', can you please explain what UX design is?')
// 		}

// 	} else if(job === 'developer') {
// 		return function (name, title) {
// 			console.log('His name is ' + name + ', and he is a ' + title + '.')
// 		}
// 	}

// }

/**
 Bind, Call, and Apply
 **/
//
// var emmett = {
// 	name: 'Emmett',
// 	age: 26,
// 	job: 'teacher',
// 	presentation: function (style, timeOfDay) {
// 		if(style === 'formal') {
// 			console.log('Good ' + timeOfDay + ', Ladies and Gentleman! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.')
// 		} else if(style === 'friendly') {
// 			console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '!' )
// 		}
// 	}
// }
//
// var emily = {
// 	name: 'Emily',
// 	age: 35,
// 	job: 'designer',
// 	calcYear: function () {
// 		console.log(2019 - this.age)
// 	}
// }
//
// var erin = {
// 	age: 38,
// 	name: 'Erin',
// 	job: 'CPA'
// }
//
// emmett.presentation('formal', 'morning')
//
// emmett.presentation.call(emily, 'friendly', 'afternoon')//we used the call method. this is called 'method borrowing.' we borrowed the call method from emmett
// emmett.presentation.apply(emily, ['friendly', 'early morning'])//this is the apply method. Same as call basically, but accepts an array
//
// emily.calcYear()
//
// emily.calcYear.call(emmett)//using the call method again. this time emmett borrows it from emily
// emily.calcYear.call(erin)
//
// var emmettFriendly = emmett.presentation.bind(emmett, 'friendly')
// var emilyFormal = emmett.presentation.bind(emily, 'formal')
// var erinFormal = emmett.presentation.bind(erin, 'formal')
// emilyFormal('evening')
// emmettFriendly('evening')
// emmettFriendly('afternoon')
// erinFormal('morning')
//
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
// function isFullAge (limit, el) {
// 	return el >= limit;
// }
// var ages = arrayCalc(years, calculateAge)
// var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20))
// console.log(ages, fullJapan)

/**
 Everything is an Object: Prototype and Inheritance Chain
 **/

