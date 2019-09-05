var scores, roundScore, activePlayer, gamePlaying, previousRoll, previousRollRight;

init();

document.querySelector('.btn-roll').addEventListener('click', function () {
	if (gamePlaying) {
		var dice = Math.floor(Math.random() * 6) + 1;
		var diceRight = Math.floor(Math.random() * 6 + 1);
		var diceDOM = document.querySelector('.dice');
		var diceDOMRight = document.querySelector('.dice-right');
		diceDOM.style.display = 'block';
		diceDOMRight.style.display = 'block';
		diceDOM.src = 'dice-' + dice + '.png';
		diceDOMRight.src = 'dice-' + diceRight + '.png';

		if (dice === 6 && previousRoll === 6 || diceRight === 6 && previousRollRight === 6) {
			roundScore = 0;
			scores[activePlayer] = 0;
			document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
			nextPlayer();
		} else if (dice !== 1 && diceRight !== 1) {
			roundScore += dice + diceRight;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
		} else {
			roundScore = 0;
			nextPlayer();
		}
		previousRoll = dice;
		previousRollRight = diceRight;
		console.log('LEFT: ' + dice + ' ' + 'RIGHT: ' + diceRight)
	}
});

document.querySelector('.btn-hold').addEventListener('click', function () {
	var input = document.querySelector('.score-threshold');
	var currentVal = input.value;
	var winningScore;

	if (gamePlaying) {
		if (currentVal) {
			winningScore = currentVal;
		} else {
			winningScore = 100;
		}
		scores[activePlayer] += roundScore;
		document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
		if (scores[activePlayer] >= winningScore) {
			document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.dice-right').style.display = 'none';
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
	document.querySelector('.dice-right').style.display = 'none';

}

function init () {
	scores = [0, 0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;
	document.querySelector('.dice').style.display = 'none';
	document.querySelector('.dice-right').style.display = 'none';
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
