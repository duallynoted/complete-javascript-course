function handleClick () {
	window.alert('https://www.bestbuy.com');
}

// /************************
// * Variables and Data Types
// */
// // let firstName = 'Emmett '
// // console.log(firstName)
// //
// // let lastName = 'Henderson'
// // let age = 5
// // console.log(firstName + lastName + ' is ' + age + ' today.')
// //
// // let fullAge = true
// // console.log(fullAge)
// //
// // let job;
// // console.log(job)
// //
// // job = 'Kindergardener';
// //
// // console.log(job)
// //
// // let answer;
// //
// // answer = 42;
// // console.log(answer)
//
// /***
//  * Variables Mutation and Type Coercion
//  */
//
// //Type Coercion
// let firstName = 'Jack'
// let age = 26;
//
// console.log(firstName + ' is s' + age)
//
// //So, here, we are declaring variables without knowing what they're value or data type will be. Then we can define them later.
// //this is how this.props works: const { address, id, path } = this.props
// let job, isMarried;
// job = 'Software Developer';
// isMarried = false
//
// console.log(firstName + ' is a ' + age + ' year old ' + job +'. He\'s married, right? The answer to that is ' + isMarried +'.')
//
// //Variable Mutation
// age = 'twenty eight';
// job = 'driver'
//
// // alert(firstName + ' is a ' + age + ' year old ' + job +'. He\'s married, right? The answer to that is ' + isMarried +'.')
// console.log(firstName + ' is a ' + age + ' year old ' + job +'. He\'s married, right? The answer to that is ' + isMarried +'.')
// let lastName = prompt('What is his last name?')
// console.log(firstName + ' ' + lastName)

/*****************************
 * Basic Operators
 */

// let now, yearJohn, yearMark;
// now = 2019
// ageJohn = 28
// ageMark = 33
//
// //Math Operators
// yearJohn = now - ageJohn
// yearMark = now - ageMark
//
// console.log(now * 2)
// console.log(now + 2)
// console.log(now / 2)
// console.log(now % 99)
//
// //Logical Operator
//
// let johnOlder = ageJohn < ageMark
// console.log(johnOlder)
//
// //Typeof Operator
// console.log(typeof now)
// console.log(typeof ageJohn)
// console.log(typeof 'Mh')
// var x;
// console.log(typeof x)

/*****************************
 * Operator Precedence
 */
//
// let now = 2018
// let yearJohn = 1989
// let votingAge = 18
//
// //Multiple Operators
// let isVotingAge = now - yearJohn >= votingAge
// // console.log(isVotingAge)
//
// //Grouping
// let ageJohn = now - yearJohn
// let ageMark = 35
// let average = (ageMark + ageJohn) / 2
// // console.log(average)
//
// // let pemdas = 8 / 2 * (2 + 2)
// // console.log(pemdas)
//
// //Multiple Assignments
// let x, y, getIt;
// x = y = (3 + 5) * 4 - 6 // 8 * 4 -6 // 32 - 6 // 26
// /*Okay, the reason both x and y equal 26 is because the assignment operator's associativity works right to left
// unlike most which work left to right.
// * So, this is saying that '(3+5) *4-6'--which is 26--equals y, and then y = x. So, voila, both x and y = 26*/
// console.log(x, y)
//
// // x = x * 2
// x *= 2;
// console.log(x)
//
// x++
// console.log(x)

/******************************
 * If/Else Statements
 */

//Control structures are features that allow us to execute only a certain portion of our code
//or a portion multiple times
//if/else statements are a control structure

// let firstName = 'John';
// let civilStatus = 'single';
//
// if(civilStatus === 'married') {
//     console.log(firstName + ' is married!')
// } else {
//     console.log(firstName + ' will hopefully marry soon :>')
// }
//
// let isMarried = true
//
// if(isMarried) {
//     console.log(firstName + ' is married!')
// } else {
//     console.log(firstName + ' will hopefully marry soon :>')
// }
//
// let markMass,johnMass,markHeight,johnHeight, markHeightForBMI, johnHeightForBMI;
// markMass = 118.4
// johnMass = 90.7
// markHeight = 1.7
// johnHeight = 1.8
// markHeightForBMI = (markHeight * markHeight)
// johnHeightForBMI = (johnHeight * johnHeight)
//
// let markBMI = markMass / markHeightForBMI;
// let johnBMI = johnMass / johnHeightForBMI;
//
// let higherBMI = markBMI > johnBMI
//
// // console.log('Is Mark\'s BMI higher than John\'s? ' + higherBMI)
//
//
// if (higherBMI) {
//     console.log('Yup, he is a fatty')
// } else {
//     console.log(johnBMI)
// }

/******************************
 * Boolean Logic
 */

// let firstName = 'John'
// let age = 26
//
// if (age < 13) {
//     console.log(firstName + ' is a boy.')
// } else if (age >= 13 && age < 20) { //Between 13 and 20 = age should be 13 or greater and 20 or less
//     console.log(firstName + ' is a teenager.')
// } else if (age >= 21 && age <= 30) {
//     console.log(firstName + ' is a young man.')
// }
// else {
//     console.log(firstName + ' is a man.')
// }

/******************************
 * The Ternary Operator and Switch Statements
 */

//It is called a 'ternary' because it has 3 operands

// let firstName = 'John'
// let age = 16
//
// age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.')
//
// let drink = age >= 18 ? 'beer' : 'juice'
// console.log(drink)
//
//
// let job = 'developer'
//
// switch (job) {
//     case 'teacher':
//     case 'instructor':
//         console.log(firstName + ' teaches kids how to code.')
//         break
//     case 'driver':
//     case 'over-the-road trucker':
//         console.log(firstName + ' delivers goods.')
//         break
//     case 'designer':
//     case 'developer':
//         console.log(firstName + ' architects the web.')
//         break
//     case 'cpa':
//     case 'accountant':
//         console.log(firstName + ' does your taxes.')
//         break
//     default :
//         console.log('John is a shiftless layabout.')
// }
//
// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a boy.')
//         break
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager.')
//         break
//     case age >= 20 && age < 30:
//         console.log(firstName + ' is a young man.')
//         break
//     default :
//         console.log('Obviously, you\'re not a golfer')
// }

/******************************
 * Truthy and Falsy values and Equality Operators
 */

//Falsy values are values that are converted to false when in a conditional
// falsy values: undefined, null, 0, '', and NaN
//Truthy values are values that are converted to true when in a conditional
//truthy values: all that are not falsy
//
// let height;
// height = '24';
// if (height || height === 0) { //this is now saying whatever height is OR if 0 if that is what height is
//     console.log('Variable is defined')
// } else {
//     console.log('Variable has NOT been defined')
// }
//
// console.log(typeof height)
//
// //Equality Operators
// //So, this "===" is a strict comparison, this "==" does type coercion
//
// if(height == 24) {
//     console.log('The == operator does type coercion.')
// } else {
//     console.log('Type coercion is not a go.')
// }

//What happened here is that the == operand turned the string '24' in to a number 24

/******************************
 * Functions
 */

// function calculateAge(birthYear) { //maybe arguments are like event target values, or, user-supplied values
//     return 2019 - birthYear
// }
//
// let userAge = calculateAge(2017) //we have to store the value somewhere, so it's stored in a variable
// console.log(userAge)
//
// let height = 2.89
// function calculateBMI (mass) {
//     return mass / height
// }
//
// let danielBMI = calculateBMI(40)
// console.log(danielBMI)
//
//
// function yearsUntilRetirement(year, firstName) {
//     let age = calculateAge(year)
//     let retirement = 65 - age
//
//     if(retirement > 0 ){
//     console.log(firstName + ' retires in ' + retirement + ' years.')
//     } else {
//         console.log(firstName + ' has already retired.')
//     }
// }
//
// yearsUntilRetirement(1980, 'Daniel')
// yearsUntilRetirement(1945, 'Robert')
// yearsUntilRetirement(1974, 'Robin')
// yearsUntilRetirement(1949, 'Margaret')

/******************************
 * Function Statements and Expressions
 */

//function declaration
// function whatDoYouDo(job, firstName) {
// }

//function expression--anything function that produces a result
//whenever JavaScript expects a value, we must write an expression
// const whatDoYouDo = function(job, firstName) {
//     switch (job) {
//         case 'teacher':
//             return firstName + ' teaches kids to code.'
//         case 'driver':
//             return firstName + ' drives kids to school.'
//         case 'designer':
//             return firstName + ' designs kid clothes.'
//         default:
//             return firstName +' does something else'
//     }
// }
//
// console.log(whatDoYouDo('s', 'Daniel'))
// console.log(whatDoYouDo('designer', 'Jane'))
// console.log(whatDoYouDo('driver', 'John'))
//
// //function statement--doesn't necessarily have to return anything or
// // don't have to produce an immediate result
// if(true) {//true is undefined, but it will still log 23 to the console
//     console.log(23)
// }

/******************************
 * Arrays
 */

// //initialize new array
// let names = ['John', 'Mark', 'Jane'];
// let years = new Array(1990, 1969, 1948);
//
// console.log(years.length);
//
// //mutate array data
// names[1] = 'Ben';
// names[names.length] = 'Daniel'; //similar to .push, arrayName.length = 'thing' will add the 'thing' to the end of the array
// names.unshift('Elliot');
// console.log(names);
//
// //Different data types
// let john = ['John', 'Smith', false, 1990, 'designer', false];
//
// john[john.length] = 'orange';
// john.push('blue');
// john.unshift('Mr.');
// john.pop();
// john.pop();
// john.shift();
// console.log(john);
// let isDesigner = john.indexOf('teacher') === -1 ? 'John is NOT a designer' : 'John designs, like, all the time';
// //okay, so this is what happens: we're searching for 'designer' in this array, and it does not find it. If indexof can't find
// // something in an array, it returns -1. So "john.indexOf('designer')" becomes "-1" and -1 === -1
// let isImmigrant = john.indexOf(true) === 2 ? 'John is an immigrant' : 'Born in America';
// console.log(isImmigrant);
//
// console.log(isDesigner);

/******************************
 * Objects and Properties
 */
//
// let john = {
// 	//IMPORTANT Key/value pair. The property `firstName` is the key, and 'John' is the value. Key/value pair.
// 	firstName: 'John',
// 	lastName: 'Smith',
// 	birthYear: 1990,
// 	family: ['Jane', 'Mark', 'Bob', 'Emily'],
// 	famYears: {
// 		jane: 45,
// 		mark: 72,
// 	},
// 	job: 'teacher',
// 	isMarried: false
//
// };
// console.log(john);
// let by = 'birthYear';
// console.log(john[by]);
// console.log(john['job']);
// console.log(john.family[3]);
//
// john.job = 'developer';
// john['isMarried'] = true;
//
// wifeBirthYear = john.famYears.jane;
// console.log(wifeBirthYear);
//
// let erin = new Object();
// erin.name = 'Erin';
// erin.birthYear = 1981;
// erin['lastName'] = 'Ridley';
// erin.isHot = true;
//
// console.log(erin);
//
// let daniel = new Object();
// daniel.name = 'Daniel';
// daniel.hobbies = ['music, reading, podcasts, learning'];
// daniel.favoriteBands = {
// 	eighties: 'Guns n Roses',
// 	nineties: 'The Refreshments',
// 	aughts: 'Ben Folds',
// 	tens: 'Grizzly Bear'
// },
// 	daniel.isMarried = true;
// console.log(daniel.favoriteBands.aughts)

/******************************
 * Objects and Methods
 */

// let john = {
// 	firstName: 'John',
// 	lastName: 'Smith',
// 	birthYear: 1990,
// 	family: ['Jane', 'Mark', 'Bob', 'Emily'],
// 	famYears: {
// 		jane: 45,
// 		mark: 72,
// 	},
// 	job: 'teacher',
// 	isMarried: false,
// 	calcAge: function () {
// 		//this was `return 2019 - this.birthYear
// 		//we can access properties inside an object
// 		this.age = 2019 - this.birthYear;
// 	}
// };
//
// john.calcAge();
// console.log(john);
//Here is one way to do it: declare an age variable, then dot-notation-it equal to that variable (age)
// let age = jon.calcAge()
// john.age = age

//Here is another way: go ahead and write dot notation creating the new property(age), and have it equal the called function
// john.age = john.calcAge()

/******************************
 * Loops and Iterations
 */

//for loop
// for (let i = 0; i < 10; i++) {
// 	console.log(i);
// }
//
// let john = ['John', 'Smith', false, 1990, 'designer', false];
//
// for (let i = 0; i < john.length; i++) {
// 	console.log(john[i]);
// }
//
// //while loop
// let favBands = ['Grizzly Bear', 'Radiohead', 'Tool', 'Ben Folds Five', 'Twelve Foot Ninja'];
// let i = 0
// while (i < favBands.length) {
// 	console.log(favBands[i])
// 	i++
// }

//continue and break statements
// let john = ['John', 'Smith', false, 1990, 'designer', false];
//
// for (let i = 5; i < john.length; i++) {
// 	if (typeof john[i] !== 'string') continue;
// 	console.log(john[i]);
// }
// for (let i = 0; i < john.length; i++) {
// 	if (typeof john[i] !== 'string') break;
// 	console.log(john[i]);
// }
//
// let favBands = ['Grizzly Bear', 'Radiohead', 'Tool', 'Ben Folds Five', 'Twelve Foot Ninja'];
//
// for (let i = favBands.length - 1; i >= 0; i--) {
// 	console.log(favBands[i]);
// }
//
// let family = ['Daniel', 1980, 'Erin', 1981, 'Emmett', 2014, 'Milo', 2017];
//
// for (let i = 0; i < family.length; i++) {
// 	console.log(family[i]);
// }
//
// for (let i = family.length -1; i >= 0; i--){
// 	console.log(family[i])
// }
//
// let tvService = ['Netflix', 'Hulu', 'Disney', 'Amazon']
// tvService.push('PBS')
// console.log(tvService)
//
// for (let i = 0; i < tvService.length ; i++) {
// 	console.log(tvService[i])
// }
//
// for (let i = tvService.length - 1; i >= 0 ; i--) {
// 	console.log(tvService[i])
// }


