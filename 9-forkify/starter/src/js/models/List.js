import uniqid from 'uniqid';

export default class List {
	constructor () {
		this.items = [];
	}

	addItem (count, unit, ingredient) {
		const item = {
			id: uniqid(),
			count,
			unit,
			ingredient
		}
		this.items.push(item)
		return item;
	}

	deleteItem (id) {
		const index = this.items.findIndex(el => el.id === id)
		this.items.splice(index, 1)
	}

	updateCount (id, newCount) {
		this.items.find(el => el.id === id).count = newCount
	}
}

// Quick mini lesson on difference between slice and splice
// splice removes elements from an array, returns that/those element(s), and MUTATES the original array
//---> splice will take in two arguments: the index where you want to start, and how many you want to remove
//--->---> [22,53,44,5,56,90,32].splice(2,3): returns [44,5,56] and array mutated to leave [22,53,90,32]
// slice removes elements from an array, returns that/those element(s), and DOES NOT mutate the original array
//---> slice takes in two arguments: the index where you want to start AND DOES NOT RETURN
// THAT ELEMENT--STARTS AFTER THAT INDEX POSITION, and how far you want to go
//--->---> [22,53,44,5,56,90,32].slice(2,3): returns [5,56,90] and array NOT mutated to leave [22,53,44,5,56,90,32]
