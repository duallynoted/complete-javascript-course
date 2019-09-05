/******************************
 * How JavaScript Code is Executed: Engines and Parsers
 */

/*
JavaScript is always hosted in some environment, and that is usually on the browser
The host has an engine that takes our code and executes it
An engine is a program that executes JavaScript code
>First thing that happens inside the engine is our code is parsed by a parser
 a parser reads the code line by line and checks if the syntax is correct
 it knows the rules of JavaScript and can tell if there's an error
 if there's a mistake, it throws an error and stops the execution
>>Next, if there's no mistakes, the parser produces a data structure called the Abstract Syntax Tree
>>>It is then translated in to machine code
   it is no longer JS, but a set of instructions that a computer can understand and execute
>>>>Only then, once it's converted to machine code, does the code run and actually do its work
* */

/******************************
 * Execution Contexts and the Execution Stack
 */

/*
JS runs in environments called Execution Contexts
We can associate an execution context as an object
Execution Context is like a box or container that stores variables and in which a piece of our code is executed
The default execution context is the Global Execution Context
--this is code that is not inside any function
--associated with the global object, which in the browser, is ```the window object```
Everything we declare in the global context automatically gets attached to the global object
--so, lastName === window.lastName //true
properties are just variables attached to objects
Each time you call a function, it gets its own, brand-new, execution context

let name = 'John'; --this is a global context

function first () { ---this is also a global context, as is second() and third()
let a = 'Hello!'; --now in the first execution context, this variable is no longer global
second(); --then this is called
let x = a + name

function second () {
let b = 'hi!';
third();
let z = a + age

first(); ---but now, this has its own execution context, adding to the stack
 		 ---as will second(), and then third()(not shown, but doesn't call anything, so it gets returned)
these add to the stack:
global execution context _- execution context for first() _- execution context for second() _- execution context for third()--third() gets returned so we start taking them off the stack
-_ execution context for second() *gets returned and taken off the stack* -_ execution context for first() *gets returned and taken off the stack*
-_ global execution context *back to the global object from whence it started*
*/

/******************************
 * Execution Contexts in Detail: Creation and Execution Phases and Hoisting
 */

/*
We can associate an execution context as an object
`let ECO = execution context object`
--this object has 3 properties
  --Variable Object (VO)
  	--contain args, inner variable declarations, variables, function declarations
  --Scope Chain
    --contains current variable objects as well as the variable objects of all its parents
  --"This" variable
    --already seen: references properties of an object
How the execution context is created:
1. Creation phase--this is where the properties of the ECO are defined
	A)Creation of the VO
		*The argument object is created: this contains all the arguments that were passed in to the function
		*Code is scanned for function declarations: for each function, a property is created in the VO that points to the function
			this means that all the functions will be stored in the VO, even before the code starts executing
		*Code scanned for variable declarations: for each variable, a property is created in the VO, and set to undefined
		Hoisting: these last two parts of VO creation. It means that the properties are available before the code is executed in execution phase
				  they are hoisted in different ways though:
				  	functions: are already defined, but not executed
				  	variables: are set to undefined, and will only be defined in the execution phase
	B)Creation of the scope chain
		*Scope answers the question, "Where can we access a certain variable or function?"
		*In JS, each new function creates a scope: the space/environment which the variables it defines are accessible
		*The only way to have a new scope is to write a new function
		*Lexical scoping: a function that is lexically within another function and gets access to the
		 scope of the outer function, also called the parent function
		*Global scope will not have access to its chidren's scope unless the values are returned

	C) Determine value of the 'this' variable
		*In a regular function call: the `this` keyword points at the global object
		 (the window object in the browser) this is the default
		*In a method(function within an object) call: the `this` variable points to the object that is calling that method
		*`this` keyword is not assigned a value until a function where it is defined is actually called
		 even though it appears that `this` refers to the object where it's defined, it is technically only assigned a value
		 as soon as an object calls a method

2. Execution phase
   The code of the function that generated the current ECO is ran line by line
   if it's a global context, then the global code is executed
   all the variable are defined



*/

/******************************
 * Hoisting in Practice
 */
///////////////////////////////////////
// Lecture: Hoisting

//functions
// calculateAge(1981); // hoisting works because function declarations are automatically stored in the VO
// function calculateAge (year) {
// 	console.log(2016 - year + ' AGE');
// }
//
// // retirement(1980) --hoisting doesn't work here because variable declarations are set to undefined before the execution phase
// //                    so, retirement() is a function expression, stored in a variable, and therefore  not executable yet
//
// let retirement = function (year) {
// 	console.log(65 - (2019 - year) + ' RETIREMENT');
// };
// retirement(1980) //now that the function expression is defined, we can use it
//
// //variables
//
// console.log(age) //hoisting doesn't work because variables are set to undefined before the execution phase
// var age = 39
//
// function foo () {
// 	var age = 65
// 	// console.log(age)
// }
// foo()//`age` in this function has its own ECO, so age === 65
// console.log(age) //`age` here is is in the Global ECO, so age === 39

/******************************
 * Scope and the Scope Chain
 */

///////////////////////////////////////
// Lecture: Scoping

// First scoping example

// var a = 'Hello!'; //this has a global scope, so lines 136-147
// first();
//
// function first() {
//     var b = 'Hi!'; //this function's scope is lines 140-146
//     second();
//
//     function second() {
//         var c = 'Hey!';           //this function's scope is 144 and 145
//         console.log(a + b + c); //the scope chain says that it knows `c` because it's defined here;
// 		                        //it knows `b` because it's defined in its parent(first()), and therefore has access to it;
// 		                        //it knows `a` because it is defined in global so all children have access
//     }
// }


// Example to show the difference between execution stack and scope chain

//the execution stack is the order in which our functions are called
//the scope chain is the order in which our functions appear in our code, lexically
// var a = 'Hello!';
// first();
//
// function first() {
//     var b = 'Hi!';
//     second();
//     // console.log(b, c) //cannot access c
//
//     function second() {
//         var c = 'Hey!';
//         third()
// 		console.log(a, b, c) //cannot access d
//     }
// }
//
// function third() {
// 	var d = 'John';
// 	console.log(a + d);
// 	// console.log(a + b + c + d);  third() does not have access to b or c because they are in different scopes
// }

/******************************
 * The `this` Keyword
 */

///////////////////////////////////////
// Lecture: The this keyword

/*
console.log(this)
calcAge(1985)
function calcAge (year) {
	console.log(2019 - year)
	console.log(this)
}

 */

let daniel = {
	name: 'Daniel',
	yearOfBirth: 1980,
	calcAge: function () {
		console.log( 2019- this.yearOfBirth)
		console.log(this)

		// function innerFunction () {
		// 	console.log(this) //this will go back to logging the global window because even though
		// 	                  //it is inside a method of an object, it is a regular function call,
		// 	                  //and regular function calls always points to the window object
		// }
		// innerFunction()
	}
}
daniel.calcAge()

var mike = {
	name: 'Mike',
	yearOfBirth: 1984
}
mike.calcAge = daniel.calcAge
mike.calcAge()
//This proves that the `this` keyword is only assigned a value once the method is called
//As you'll see in the console, `this` logs the daniel object, and then the mike object


/******************************
 * If/Else Statements
 */
/******************************
 * If/Else Statements
 */
/******************************
 * If/Else Statements
 */
/******************************
 * If/Else Statements
 */
/******************************
 * If/Else Statements
 */
/******************************
 * If/Else Statements
 */
/******************************
 * If/Else Statements
 */






