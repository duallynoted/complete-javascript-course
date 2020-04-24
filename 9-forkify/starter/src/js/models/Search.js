import axios from 'axios';

export default class Search {
	constructor (query) {
		this.query = query;
	}

	async getResults () {
		try {
			const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
			this.result = res.data.recipes;
			// console.log('Made it to getResults', this.result);
		} catch (error) {
			alert('No recipes match your request. Sorry! ', error);
		}

	}
}

// let movies = [
// 	{
// 		title: 'The Princess Bride'
// 	},
// 	{
// 		title: 'Rushmore'
// 	},
// 	{
// 		title: 'Man of Steel'
// 	}
// ];
//
// const movieTitler = (title, limit = 3) => {
// 	const newTitle = []
// 	if(movies)
// }
//
// if (test.length > 8) {
// 	testSplit.reduce((acc, cur) => {
// 		if (acc + cur.length < test.length) {
// 			retirm;
// 		}
// 	}, 0);



















