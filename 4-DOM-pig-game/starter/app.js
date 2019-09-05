/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

NOTES:
The state variable. The state variable tells us the condition of a system. We need a state variable when we
need to remember something or its state.
The way the state variable `gamePlaying` is working in this code:
1. It is declared in the global scope
2. It is set to `true` in the init data
	a. So, wherever the init function is called, the `gamePlaying` variable will be true
3. The main JS interaction for the game is in the event listener `.btn-roll`. So, we wrap the whole thing
in a conditional that checks to see if `gamePlaying` is true. If it is, `.btn-roll` will continue to work.
4. We don't want it to work any more if the game has been completed, so we set it to `false` in the `btn-hold` winning condition.
	a. this will mean that it has flipped the boolean to false in the condition of `.btn-roll` and will not work
	   no matter how hard it is pressed
5. When New Game is clicked, it runs the init function which flips `gamePlaying` back to true.
6. This is how state works.


*/

var scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function () {
	if (gamePlaying) {
		var dice = Math.floor(Math.random() * 6) + 1; //get random number
		var diceDOM = document.querySelector('.dice'); //display result
		diceDOM.style.display = 'block';
		diceDOM.src = 'dice-' + dice + '.png';

		//update the round score, only if they don't roll a 1
		if (dice !== 1) {
			roundScore += dice;
			document.querySelector('#current-' + activePlayer).textContent = roundScore; //using textContent
		} else {
			roundScore = 0;
			nextPlayer();
			// document.querySelector('.player-0-panel').classList.remove('active')
			// document.querySelector('.player-1-panel').classList.add('active')
		}
	}

});

document.querySelector('.btn-hold').addEventListener('click', function () {
	if (gamePlaying) {
		scores[activePlayer] += roundScore;
		document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
		//check if player won the game, so > 100?
		if (scores[activePlayer] >= 20) {
			document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
		} else {
			nextPlayer();

		}
	}
});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer () {
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	document.querySelector('.dice').style.display = 'none';
}

function init () {
	scores = [0, 0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;
	document.querySelector('.dice').style.display = 'none';
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
}

// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; //using innerHTML
// var x  = document.querySelector('#score-1').textContent;
// console.log(x)

/*
function btn () {
	//do something here
}
btn();
document.querySelector('.btn-roll').addEventListener('click', btn);
writing just the name of the function here (btn) without calling it, because we don't
want to automatically call it, we want it to LISTEN
this is a callback function, or, a function that is
not called by us, but rather another function
*/
