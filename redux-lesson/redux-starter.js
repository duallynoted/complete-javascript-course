/** Making a counter*/
// const counter = (state = 0, action) => {
// 	switch (action.type) {
// 		case 'INCREMENT':
// 			return state + 1;
// 		case 'DECREMENT':
// 			return state - 1;
// 		default:
// 			return state;
// 	}
// }
//
// const Counter = ({
// 					 value,
// 					 onIncrement,
// 					 onDecrement
// 				 }) => (
// 	<div>
// 		<h1>{value}</h1>
// 		<button onClick={onIncrement}>+</button>
// 		<button onClick={onDecrement}>-</button>
// 	</div>
// )
// const { createStore } = Redux;
// const store = createStore(counter);
// const render = () => {
// 	ReactDOM.render(
// 		<Counter value={store.getState()}
// 				 onIncrement={() =>
// 					 store.dispatch({
// 						 type: 'INCREMENT'
// 					 })
// 				 }
// 				 onDecrement={() =>
// 					 store.dispatch({
// 						 type: 'DECREMENT'
// 					 })
// 				 }
// 		/>,
// 		document.getElementById('root')
// 	)
// }
// store.subscribe(render)
// render()
//
// document.addEventListener('click', () => {
// 	store.dispatch({ type: 'INCREMENT' });
// });

/** Testing adding and removing counters*/
// const addCounter = (list) => {
// 	return [...list, 0];
// }
//
// const removeCounter = (list, index) => {
// 	return [
// 		...list.slice(0, index),
// 		...list.slice(index + 1)
// 	]
// }
//
// const incrementCounter = (list, index) => {
// 	return [
// 		...list.slice(0, index),
// 		list[index] + 1,
// 		...list.slice(index + 1)
// 	]
// }
//
// const testAddCounter = () => {
// 	const listBefore = [];
// 	const listAfter = [0];
//
// 	deepFreeze(listBefore)
// 	expect(addCounter(listBefore)).toEqual(listAfter)
// };
//
// const testRemoveCounter = () => {
// 	const listBefore = [0, 10, 20]
// 	const listAfter = [0, 20]
//
// 	deepFreeze(listBefore)
// 	expect(removeCounter(listBefore, 1)).toEqual(listAfter)
// }
//
// const testIncrementCounter = () => {
// 	const listBefore = [0, 10, 20]
// 	const listAfter = [0, 11, 20]
// 	deepFreeze(listBefore)
// 	expect(incrementCounter(listBefore, 1)).toEqual(listAfter)
// }
//
// testAddCounter()
// testRemoveCounter()
// testIncrementCounter()
// console.log('All tests passed.')
//
//
//
// let spliceArray = [1,2,3,4,5,6,7]
// console.log('WIRES ' + spliceArray.splice(3,3))
// console.log('WIRES ' + spliceArray)
//
// let sliceArray = [1,2,3,4,5,6,7]
// console.log('PIZZA ' + sliceArray.slice(2, -2))
// console.log('PIZZA ' + sliceArray)
//
// let parts = ['head', 'shoulders', 3]
// let whole = ['eyes', 'nose', ...parts, 'legs']
// console.log(whole)

//Testing todos
// const toggleTodo = (todo) => {
// 	return {
// 		...todo,
// 		completed: !todo.completed
// 	}
// }
// //original version, instead of spread operator:
// /** return Object.assign({}, todo, {
// completed: !todo.completed
// })
//  */
//
// const testToggleTodo = () => {
// 	const todoBefore = {
// 		id:0,
// 		text: 'Learn Redux',
// 		completed: false
// 	}
// 	const todoAfter = {
// 		id:0,
// 		text: 'Learn Redux',
// 		completed: true
// 	}
// 	deepFreeze(todoBefore)
// 	expect(toggleTodo(todoBefore)).toEqual(todoAfter)
// }
//
// testToggleTodo()
// console.log("All tests passed.")

import { key } from '../9-forkify/final/src/js/config';

/**Adding todos*/
// const todo = (state, action) => {
// 	switch (action.type) {
// 		case 'ADD_TODO':
// 			return {
// 				id: action.id,
// 				text: action.text,
// 				completed: false
// 			};
// 		case 'TOGGLE_TODO':
// 			if (state.id !== action.id) {
// 				return state;
// 			}
// 			return {
// 				...state,
// 				completed: !state.completed
// 			};
// 		default:
// 			return state;
// 	}
// };
//
// const todos = (state = [], action) => {
// 	switch (action.type) {
// 		case 'ADD_TODO':
// 			return [
// 				...state,
// 				todo(undefined, action)
// 			];
// 		case 'TOGGLE_TODO':
// 			return state.map(t => todo(t, action));
// 		default:
// 			return state;
// 	}
// };
//
// const { createStore } = Redux;
// const store = createStore(todos);
// console.log('Initial State: ');
// console.log(store.getState());
// console.log('- - - - - - - - - -');
//
// console.log('Dispatching ADD_TODO: ');
// store.dispatch({
// 	type: 'ADD_TODO',
// 	id: 0,
// 	text: 'Learn Redux'
// });
// console.log('Current state: ');
// console.log(store.getState());
// console.log('- - - - - - - - - -');
//
// const testAddTodos = () => {
// 	const stateBefore = [];
// 	const action = {
// 		type: 'ADD_TODO',
// 		id: 0,
// 		text: 'Learn Redux'
// 	};
// 	const stateAfter = [{
// 		id: 0,
// 		text: 'Learn Redux',
// 		completed: false
// 	}];
// 	deepFreeze(stateBefore);
// 	deepFreeze(action);
// 	expect(todos(stateBefore, action)).toEqual(stateAfter);
// };
//
// const testToggleTodos = () => {
// 	const stateBefore = [{
// 		id: 0,
// 		text: 'Learn Redux',
// 		completed: false
// 	}, {
// 		id: 1,
// 		text: 'Go Shopping',
// 		completed: false
// 	}
// 	];
// 	const action = {
// 		type: 'TOGGLE_TODO',
// 		id: 1
// 	};
// 	const stateAfter = [{
// 		id: 0,
// 		text: 'Learn Redux',
// 		completed: false
// 	}, {
// 		id: 1,
// 		text: 'Go Shopping',
// 		completed: true
// 	}
// 	];
// 	deepFreeze(stateBefore);
// 	deepFreeze(action);
// 	expect(todos(stateBefore, action)).toEqual(stateAfter);
// };
//
// testAddTodos();
// testToggleTodos();
// console.log('All tests pass.');
//
// const visibilityFilter = (
// 	state = 'SHOW_ALL',
// 	action
// ) => {
// 	switch (action.type) {
// 		case 'SET_INVISIBILITY_FILTER':
// 			return action.filter;
// 		default:
// 			return state;
// 	}
// };
//
// let nextTodoId = 0;
//
// class TodoApp extends Component {
// 	render () {
// 		return (
// 		<div>
// 			<button onClick={() => {(
// 					store.dispatch({
// 						type: 'ADD_TODO',
// 						text: 'Test',
// 						id: nextTodoId++
// 					})
// 				)}}>+</button>
// 		</div>
// 		)
// 	}
// }

// LESSON 17
const todo = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				id: action.id,
				text: action.text,
				completed: false
			}
		case 'TOGGLE_TODO':
			if(state.id !== action.id) {
				return state
			}
			return {
				...state,
				completed: !state.completed
			}
		default:
			return state;
	}
}

const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				todo(undefined, action)
			];
		case 'TOGGLE_TODO':
			return state.map(t => todo(t, action))
		default:
			return state;
	}
}

const visibilityFilter = (
	state = 'SHOW_ALL',
	action
) => {
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter;
		default:
			return state
	}
}


//this is common, so we use combineReducers from Redux
/* const todoApp = (state = [], action) => {
  return {
    todos: todos(
      state.todos,
      action
      ),
    visibilityFilter: visibilityFilter (
      state.visibilityFilter,
      action
      )
  }
} */

//This is a deconstruction of the combineReducers function from Redux
/* const combineReducers = (reducers) => {
  return (state = [], action) => {
    return Object.keys(reducers).reduce(
      (nextState, key) => {
        nextState[key] = reducers[key] (
          state[key],
          action
          )
          return nextState;
      },
      {}
    )
  }
} */

const {combineReducers} = Redux;
const todoApp = combineReducers({
	todos,
	visibilityFilter
})

const { createStore } = Redux;
const store = createStore(todoApp)
const { Component } = React

let nextTodoId = 0
class TodoApp extends Component {
	render () {
		return (
			<div>
				<button>Hit</button>
			</div>
		)
	}
}

const render = () => {
	ReactDOM.render(
		<TodoApp />
	)
	document.getElementByID('root')
}

store.subscribe(render)
console.log('Initial State: ')
console.log(store.getState())
console.log('- - - - - - - - - -')


console.log('Dispatching ADD_TODO: ')
store.dispatch({
	type: 'ADD_TODO',
	id: 0,
	text: 'Learn Redux'
})
console.log('Current state: ')
console.log(store.getState())
console.log('- - - - - - - - - -')

console.log('Dispatching ADD_TODO: ')
store.dispatch({
	type: 'ADD_TODO',
	id: 1,
	text: 'Go Shopping'
})
console.log('Current state: ')
console.log(store.getState())
console.log('- - - - - - - - - -')

console.log('Dispatching TOGGLE_TODO: ')
store.dispatch({
	type: 'TOGGLE_TODO',
	id: 0,
})
console.log('Current state: ')
console.log(store.getState())
console.log('- - - - - - - - - -')

console.log('Dispatching SET_VISIBILITY_FILTER: ')
store.dispatch({
	type: 'SET_VISIBILITY_FILTER',
	filter: 'SHOW_COMPLETED',
})
console.log('Current state: ')
console.log(store.getState())
console.log('- - - - - - - - - -')







const testAddTodos = () => {
	const stateBefore = [];
	const action = {
		type: 'ADD_TODO',
		id: 0,
		text: 'Learn Redux'
	}
	const stateAfter = [{
		id: 0,
		text: 'Learn Redux',
		completed: false
	}]
	deepFreeze(stateBefore)
	deepFreeze(action)
	expect(todos(stateBefore, action)).toEqual(stateAfter)
}

const testToggleTodos = () => {
	const stateBefore = [{
		id:0,
		text: 'Learn Redux',
		completed: false
	}, {
		id:1,
		text: 'Go Shopping',
		completed: false
	}
	];
	const action = {
		type: 'TOGGLE_TODO',
		id: 1
	}
	const stateAfter = [{
		id:0,
		text: 'Learn Redux',
		completed: false
	}, {
		id:1,
		text: 'Go Shopping',
		completed: true
	}
	]
	deepFreeze(stateBefore)
	deepFreeze(action)
	expect(todos(stateBefore, action)).toEqual(stateAfter)
}

testAddTodos()
testToggleTodos()
console.log('All tests pass.')





// const domContainer = document.querySelector('#counter_container');
// ReactDOM.render(e(CounterExample), domContainer);

// console.log(store.getState())
// store.dispatch({type: 'INCREMENT'})
// console.log(store.getState())

/** This is very cool: it is the createStore function from Redux
 destructured and broken down in to its several pieces.
 */
// const createStore = (reducer) => { //reducer passed in for your purpose
// 	let state; //need variable to store state
// 	let listeners = []; //need empty array to push listeners into as there will be several
// 	const getState = () => state; //this sets state
// 	const dispatch = (action) => { //dispatch will pass in an action, for your purpose
// 		state = reducer(state, action) //state will be the result of that reducer's state and action
// 		listeners.forEach(listener => listener()) //not sure on this
// 	};
// 	const subscribe = (listener) => { //passes in an eventListener, for your purpose
// 		listeners.push(listener) //pushes each listener in to array
// 		return () => {
// 			listeners = listeners.filter(l => l !== listener) //this unsubscribes the listener
// 		}
// 	};
// 	dispatch({}) //this will set initial state
// 	return {getState, dispatch, subscribe} //returns the functions of createStore
// }

// if (typeof state === 'undefined') {
// 	return 0
// }
// if (action.type === 'INCREMENT') {
// 	return state + 1;
// } else if (action.type === 'DECREMENT') {
// 	return state - 1;
// } else {
// 	return state;
// }
// console.log(counter(0, {type: 'INCREMENT'}))
// console.log(counter(5, {type: 'DECREMENT'}))
// console.log(counter(32, {type: 'GIVEME5'}))
// console.log(counter(undefined, {}))



