import Search from './models/Search';
import * as searchView from './views/searchView';
import Recipe from './models/Recipe';
import { clearLoader, elements, renderLoader } from './views/base';
/*Global state of the app
* - Search object
* - Current recipe object
* - Shopping list object
* - Liked recipes*/
const state = {};

/* SEARCH CONTROLLER */
const controlSearch = async () => {
	// 1. Get query from view
	const query = searchView.getInput();
	if (query) {
		//2. New search object and add to state
		state.search = new Search(query);

		//3. Prepare UI for results
		searchView.clearInput();
		searchView.clearResults();
		renderLoader(elements.searchRes);
		try {

			//4. Search for recipes
			await state.search.getResults();

			//5. Render results on UI
			clearLoader();
			searchView.renderResults(state.search.result);
		} catch (e) {
			alert('Something went wrong with the search', e);
			clearLoader();
		}
	}
};

elements.searchForm.addEventListener('submit', e => {
	e.preventDefault();
	controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
	const btn = e.target.closest('.btn-inline');
	if (btn) {
		const goToPage = parseInt(btn.dataset.goto, 10);
		searchView.clearResults();
		searchView.renderResults(state.search.result, goToPage);
	}
});

/* RECIPE CONTROLLER */

const controlRecipe = async () => {
	const id = window.location.hash.replace('#', '');
	console.log(id);

	if (id) {
		// Prepare UI for changes

		// Create new recipe object
		state.recipe = new Recipe(id);

		try {
			// Get recipe data and parse ingredients
			await state.recipe.getRecipe();
			state.recipe.parseIngredients();
			// Calculate servings and time
			state.recipe.calcServings();
			state.recipe.calcTime();

			// Render recipe
			console.log(state.recipe);
		} catch (e) {
			alert('Error processing recipe', e);
		}
	}
};

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));
// window.addEventListener('hashchange', controlRecipe)
// window.addEventListener('load', controlRecipe)
