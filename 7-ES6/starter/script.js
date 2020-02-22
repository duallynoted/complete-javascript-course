// // Let and Const

// // ES5
// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';

// console.log(name5);

// //ES6

// const name6 = 'Jane Smith';
// let age6 = 23;
// // name6 = 'Jane Miller'
// console.log(name6);

// //ES5
// function driversLicense5(passedTest) {
//     if (passedTest) {
//         var firstName = 'John';
//         var yearOfBirth = 1990;
//     }
//     console.log(firstName, 'born in', yearOfBirth, 'is now officially able to drive a car.'); //this console log still works because the vars were created inside the function, so the whole function has access to them
// }

// driversLicense5(true);

// //ES6 variables are block-scoped, not function-scoped
// function driversLicense6(passedTest) {
//     //let firstName; would have to be declared here in order to have access to it throughout the function
//     if (passedTest) {
//         let firstName = 'John';
//         const yearOfBirth = 1990;
//     }
//     //console.log(firstName, 'born in', yearOfBirth, 'is now officially able to drive a car.'); //this console log does not work because the let and const were created inside a block, between curly braces, so the only that block has access to them
// }

// driversLicense6(true);


// let i = 23

// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }
// console.log(i)

// /*Lecture: Blocks and IIFES */

// {
//     const a = 1
//     let b = 2
//     var c = 3
// }
// // console.log(a + b)
// console.log(c)

/*Lecture: Strings */

// let firstName = 'Daniel';
// let lastName = 'Ridley';
// const yearOfBirth = 1981
// function calcAge(year) {
//     return 2020 - year
// }

// console.log('This is' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.')
// console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`)

// const n = `${firstName} ${lastName}`
// console.log(n.startsWith('D'))
// console.log(n.endsWith('y'))
// console.log(n.includes('ani'))
// console.log(firstName.repeat(58))
// console.log(`${firstName} did a thing `.repeat(8))
// console.log(' string theory '.repeat(300))

/*Lecture: Arrow Functions */
// const years = [1945, 1949, 1974, 1976, 1980]

// //es5
// var ages5 = years.map(function (el) {
//     return 2020 - el
// })
// console.log(ages5)

// //es6

// const ages6 = years.map((el) => { //this was my take, the better one is below
//     return 2020 - el
// })
// //changed this from a const to a let, so I'm mutating it below
// let agesES6 = years.map(el => 2020 - el) //An arrow function will automatically return if it is on the same line


// agesES6 = years.map((el, index) => `Age element at index ${index + 1}: ${2020 - el}`)


// agesES6 = years.map((el, index) => {
//     const now = new Date().getFullYear()
//     const age = now - el
//     return `Age of volunteer at index ${index + 1}: ${age}`
// })
// console.log('ES6', agesES6)

// const guitars = ['Les Paul', 'Telecaster', 'Martin', 'Washburn']

// let getGuitars = guitars.map(git => git) //if you only have one argument, you don't need parenthesis, automatically returns on one line
// console.log(getGuitars)
// getGuitars = guitars.map((git, index) => `My favorite guitars, in order of preference, are ${index + 1}: ${git}.`) //two or more args requires 
//                                                                                                                    //parenthesis, automatically returns on one line
// console.log(getGuitars)
// getGuitars = guitars.map((git, index) => { //if writing on more than one line, does not automatically return, 
//                                            //so you must write a block with curly braces `{}` and you must write `return` so it will return something...
//                                            //because functions HAVE to return something. Say it again. Functions must return something.
//     const currentYear = new Date().getFullYear()
//     const month = new Date().getMonth()
//     const date = new Date().getDate()
//     return `To date, ${month}/${date}/${currentYear}, these are my favorite guitars in order of preference ${index + 1}: ${git}.`
// })
// console.log(getGuitars)

/*Lecture: Arrow Functions 2 */
//arrow functions do not get a `this` keyword, they use the `this` keyword of the function they're written in

//es5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        var self = this;
        document.querySelector('.green').addEventListener('click', function () {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color
            alert(str)
        })
    }
}
// box5.clickMe()

//es6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color
            alert(str)
        })
    }
}
// box6.clickMe()

/*
const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color
            alert(str)
        })
    }
}
box66.clickMe()
*/

//es5
function Person(name) {
    this.name = name
}
Person.prototype.myFriends5 = function (friends) {
    var arr = friends.map(function (el) {
        return this.name + ' is friends with ' + el
    }.bind(this))
    console.log(arr)
}
var friends = ['Matt', 'Jack', 'Nathan']
new Person('Daniel').myFriends5(friends)

//es6
Person.prototype.myFriends6 = function (friends) {
    let arr = friends.map(el => `${this.name} is friends with ${el}.`)
    console.log(arr)
}
new Person('Daniel').myFriends6(friends)
/*Lecture: Strings */
/*Lecture: Strings */
/*Lecture: Strings */
/*Lecture: Strings */

