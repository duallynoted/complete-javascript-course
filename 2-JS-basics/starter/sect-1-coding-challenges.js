/**********************************
 * Coding Challenge 1
 */

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
// console.log('Is Mark\'s BMI higher than John\'s? ' + higherBMI)

/**********************************
 * Coding Challenge 2
 */

// let johnAvgScore = (116 + 94 + 123) / 3 //104
// let mikeAvgScore = (116 + 94 + 123) / 3 //111
// let maryAvgScore = (98 + 130 + 105) / 3 //112
//
// if(mikeAvgScore > johnAvgScore && mikeAvgScore > maryAvgScore) {
//     console.log('Mike is the winner', mikeAvgScore)
// } else if(johnAvgScore > mikeAvgScore && johnAvgScore > maryAvgScore) {
//     console.log('John is the winner!', johnAvgScore)
// } else if(maryAvgScore > mikeAvgScore && maryAvgScore > johnAvgScore) {
//     console.log('Mary is the winner!', maryAvgScore)
// } else {
//     console.log('It\'s a draw!')
// }
// console.log(johnAvgScore, mikeAvgScore, maryAvgScore)

/**********************************
 * Coding Challenge 3
 */

// const tipCalculator = function (bill) {
// 	if (bill > 200) {
// 		return bill * .1;
// 	} else if (bill >= 50 && bill < 199) {
// 		return bill * .15;
// 	} else if (bill >= 0 && bill < 49) {
// 		return bill * .2;
// 	}
// };
//
// const totaler = function () {
// 	tipCalculator();
// };
//
// console.log(tipCalculator(48));
// console.log(tipCalculator(124));
// console.log(tipCalculator(268));
//
// let bills = [48, 124, 268];
// let tips = [
// 	tipCalculator(bills[0]),
// 	tipCalculator(bills[1]),
// 	tipCalculator(bills[2])];
// let finalAmounts = [
// 	tips[0] + bills[0],
// 	tips[1] + bills[1],
// 	tips[2] + bills[2],
// ];
//
// console.log(tips, finalAmounts);

/**********************************
 * Coding Challenge 4
 */

// let john = new Object();
// john.firstName = 'John';
// john.lastName = 'Smith';
// john.mass = 90.7;
// john.height = 1.8;
// john.calcBMI = function () {
// 	this.bodyMassTotal = this.mass / (2 * this.height);
// 	return this.bodyMassTotal;
// };
//
// let mark = {
// 	firstName: 'Mark',
// 	lastName: 'Stevens',
// 	mass: 118.4,
// 	height: 1.7,
// 	calcBMI: function () {
// 		this.bodyMassTotal = this.mass / (2 * this.height);
// 		return this.bodyMassTotal
// 	},
// 	birthYear: 1980,
// 	calcAge: function () {
// 		this.currentAge = 2019 - this.birthYear;
// 		//still adds the property of `currentAge` to the object even though it isn't returned
// 		// return this.currentAge
// 	}
// };
// mark.calcAge()
// console.log(john, mark);
//
// // john.calcBMI()
// // mark.calcBMI()
// //Instead of calling these and checking `john.bodyMassTotal > mark.bodyMassTotal`, since we're
// //returning the bodyMassTotal in the functions within the objects, we can just call them in the
// //conditional
//
// const bmiChecker = function () {
// 	if (john.calcBMI() > mark.calcBMI()) {
// 		console.log(john.firstName + ' is fatter with a body mass index of ' + john.bodyMassTotal);
// 	} else if (mark.bodyMassTotal > john.bodyMassTotal) {
// 		console.log(mark.firstName + ' is fatter with a body mass index of ' + mark.bodyMassTotal);
// 	} else {
// 		console.log('Nobody wins at this game');
// 	}
// };
// bmiChecker();

/**********************************
 * Coding Challenge 5
 */

let johnDinners = {
	fullName: 'John Smith',
	bills: [124, 48, 268, 180, 42],
	tipCalculator: function () {
		this.tips = [];
		this.totalAmounts = [];
		for (let i = 0; i < this.bills.length; i++) {
			let percentage;
			let bill = this.bills[i];
			if (bill > 200) {
				percentage = .1;
			} else if (bill >= 50 && bill < 199) {
				percentage = .15;
			} else if (bill >= 0 && bill < 49) {
				percentage = .2;
			}
			this.tips[i] = bill * percentage;
			this.totalAmounts[i] = (bill * percentage) + bill;
		}
	},
};

console.log(johnDinners.tipCalculator());
console.log('Johns: ' + johnDinners.tips, johnDinners.totalAmounts);

let markDinners = {
	fullName: 'Mark Phillips',
	bills: [77, 375, 110, 45],
	tipCalculator: function () {
		this.tips = [];
		this.totalAmounts = [];
		for (let i = 0; i < this.bills.length; i++) {
			let percentage;
			let bill = this.bills[i];
			if (bill < 99) {
				percentage = .2;
			} else if (bill >= 100 && bill <= 300) {
				percentage = .1;
			} else if (bill >= 301) {
				percentage = .25;
			}
			this.tips[i] = bill * percentage;
			this.totalAmounts[i] = (bill * percentage) + bill;
		}
	}
};

markDinners.tipCalculator();
console.log('Marks: ' + markDinners.tips, markDinners.totalAmounts);

function average (arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum / arr.length;
}

johnDinners.average = average(johnDinners.tips)
markDinners.average = average(markDinners.tips)

if (johnDinners.average > markDinners.average) {
	console.log('John cares more about people with an average tip of ' + johnDinners.average)
} else if (markDinners.average > johnDinners.average) {
	console.log('Mark cares more about people with an average tip of ' + markDinners.average)
} else {
	console.log('They both care about people the same.')
}

console.log(markDinners, johnDinners)

//the way i did the percentage calc to fill arrays before watching the solution was:
// this.tips.push(bill * percentage)
// this.finalAmounts.push((bill * percentage) + bill)
//gets the same answer, but this wouldn't really work unless tips and finalAmounts are arrays

// function average (arr) {
// 	let sum = 0;
// 	let final = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		sum += arr[i];
// 		final = sum / arr.length;
// 	}
// 	return final;
// }
/**********************************
 * Coding Challenge 6
 */
/**********************************
 * Coding Challenge 7
 */
/**********************************
 * Coding Challenge 8
 */
/**********************************
 * Coding Challenge 9
 */















