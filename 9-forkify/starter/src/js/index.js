import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likesView from './views/likesView';
import { clearLoader, elements, renderLoader } from './views/base';
/*Global state of the app
* - Search object
* - Current recipe object
* - Shopping list object
* - Liked recipes*/
const state = {};
window.state = state;

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
		recipeView.clearRecipe();
		renderLoader(elements.recipe);

		// Highlight selected search item
		if (state.search) searchView.highlightSelected(id);
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
			clearLoader();
			recipeView.renderRecipe(
				state.recipe,
				state.likes.isLiked(id));
		} catch (e) {
			console.log(e)
			alert('Error processing recipe', e);
		}
	}
};

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));
// window.addEventListener('hashchange', controlRecipe)
// window.addEventListener('load', controlRecipe)

const controlList = () => {
	// Create a new list if there is none
	if (!state.list) {
		state.list = new List();
	}
	// Add each ingredient to the list
	state.recipe.ingredients.forEach(el => {
		const item = state.list.addItem(el.count, el.unit, el.ingredient);
		listView.renderItem(item);
	});
};

// Handle delete and update list item events
elements.shopping.addEventListener('click', evt => {
	const id = evt.target.closest('.shopping__item').dataset.itemid;

	if (evt.target.closest('.shopping__delete, .shopping__delete *')) {
		// Delete from state
		state.list.deleteItem(id);
		// Delete from user interface
		listView.deleteItem(id);
	} else if (evt.target.closest('.shopping__count-value')) {
		const val = parseFloat(evt.target.value);
		state.list.updateCount(id, val);
	}
});

//testing
state.likes = new Likes();
likesView.toggleLikeMenu(state.likes.getNumLikes())
/* LIKE CONTROLLER */
const controlLike = () => {
	if (!state.likes) state.likes = new Likes();
	const currentID = state.recipe.id;
	if (!state.likes.isLiked(currentID)) {
		// Add like to the state
		const newLike = state.likes.addLike(
			currentID,
			state.recipe.title,
			state.recipe.author,
			state.recipe.img
		);
		// Toggle the like button
		likesView.toggleLikeButton(true)
		// Add like to UI list
		likesView.renderLike(newLike)
	} else {
		// Remove like to the state
		state.likes.deleteLike(currentID);
		// Toggle the like button
		likesView.toggleLikeButton(false)
		// Remove like from UI list
		likesView.deleteLike(currentID)
	}
	likesView.toggleLikeMenu(state.likes.getNumLikes())
};

// Handling recipe button clicks
elements.recipe.addEventListener('click', e => {
	if (e.target.closest('.btn-decrease, btn-decrease *')) {
		// Decrease button is clicked
		if (state.recipe.servings > 1) {
			state.recipe.updateServings('dec');
			recipeView.updateServingsIngredients(state.recipe);
		}
	} else if (e.target.closest('.btn-increase, btn-increase *')) {
		// Increase button is clicked
		state.recipe.updateServings('inc');
		recipeView.updateServingsIngredients(state.recipe);
	} else if (e.target.closest('.recipe__btn--add, .recipe__btn--add *')) {
		controlList();
	} else if (e.target.closest('.recipe__love, .recipe__love *')) {
		// Like controller
		controlLike();
	}
});

window.l = new List();
