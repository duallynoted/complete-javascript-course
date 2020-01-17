// function friendsQuiz(question) {
//     let a = { 0: 'Gaygas', 1: 'Vegas', 2: 'Mexico' }
//     let b = { 0: 'hotel chocolates', 1: 'sandwich', 2: 'monkey' }
//     let c = { 0: '5', 1: '36', 2: '18' }
//     let d = { 0: 'Mr. Beauregard', 1: 'Mr. Buford', 2: 'Mr. Beumont' }
//     let e = { 0: 'alcohol', 1: 'card tricks', 2: 'ability to read people' }
//     let f = { 0: 'clown fish', 1: 'orange roughy', 2: 'salmon' }
//     return function (answer) {
//         if (question === 'chandler') {
//             console.log(a)
//             let chanPrompt = prompt('What was the name of Chandler\'s dad\'s all-male burlesque show: Viva las?', 'Type 0, 1, or 2.')
//             switch (chanPrompt) {
//                 case '0':
//                     return console.log('Correct!');
//                 case '1':
//                     return console.log('Try again.')
//                 case '2':
//                     return console.log('Try again.')
//                 default:
//                     return console.log('Could you BE any more wrong?')
//             }
//         } else if (question === 'rachel') {
//             console.log(c)
//             let rachelPrompt = prompt('How many pages was Rachel\'s letter to Ross at the beach house?', 'Type 0, 1, or 2.')
//             switch (rachelPrompt) {
//                 case '0':
//                     return console.log('Try again.');
//                 case '1':
//                     return console.log('Try again.')
//                 case '2':
//                     return console.log('Correct!')
//                 default:
//                     return console.log('Did you fall aSLEEP?!?')
//             }
//         } else if (question === 'joey') {
//             console.log(d)
//             let joeyPrompt = prompt('What is the name of Joey\'s boat?', 'Type 0, 1, or 2.')
//             switch (joeyPrompt) {
//                 case '0':
//                     return console.log('Try again.');
//                 case '1':
//                     return console.log('Try again.')
//                 case '2':
//                     return console.log('Correct!')
//                 default:
//                     return console.log('How YOU doin\'? Aside from getting the answer wrong?')
//             }
//         } else if (question === 'monica') {
//             console.log(e)
//             let monPrompt = prompt('What made Monica\'s boyfriend Fun Bobby "fun"?', 'Type 0, 1, or 2.')
//             switch (monPrompt) {
//                 case '0':
//                     return console.log('Correct!');
//                 case '1':
//                     return console.log('Try again.')
//                 case '2':
//                     return console.log('Try again.')
//                 default:
//                     return console.log('Not cleaning up this board, are ya?')
//             }
//         } else if (question === 'phoebe') {
//             console.log(f)
//             let phoebePrompt = prompt('What was Phoebe\'s mom\'s favorite fish?', 'Type 0, 1, or 2.')
//             switch (phoebePrompt) {
//                 case '0':
//                     return console.log('Try again.');
//                 case '1':
//                     return console.log('Correct!')
//                 case '2':
//                     return console.log('Try again.')
//                 default:
//                     return console.log('Smelly answer.')
//             }
//         } else if (question === 'ross') {
//             console.log(b)
//             let rossPrompt = prompt('Ross had to go on sabbatical because someone ate his: ?', 'Type 0, 1, or 2.')
//             switch (rossPrompt) {
//                 case '0':
//                     return console.log('Try again.')
//                 case '1':
//                     return console.log('Correct!')
//                 case '2':
//                     return console.log('Try again.')
//                 default:
//                     return console.log('Use unagi, and maybe you\'ll have better luck.')
//             }
//         }
//         else {
//             console.log('fritters')
//         }
//     }
// }

// let chanQuestion = friendsQuiz('chandler')
// let rossQuestion = friendsQuiz('ross')
// let rachQuestion = friendsQuiz('rachel')
// let joeyQuestion = friendsQuiz('joey')
// let monQuestion = friendsQuiz('monica')
// let pheebsQuestion = friendsQuiz('phoebe')
// let allQuestions = [chanQuestion(), rossQuestion(), rachQuestion(), joeyQuestion(), monQuestion(), pheebsQuestion()]


// (function () {

//     function Question(question, answers, correct) {
//         this.question = question;
//         this.answers = answers;
//         this.correct = correct;
//     }

//     Question.prototype.displayQuestion = function () {
//         console.log(this.question)
//         for (let i = 0; i < this.answers.length; i++) {
//             console.log(i + ':' + this.answers[i])

//         }
//     }
//     Question.prototype.checkAnswer = function (ans) {
//         if (ans === this.correct) {
//             console.log('You are correct!')
//         } else {
//             console.log('Sorry, that\'s not right.')
//         }
//     }

//     let q1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'], 0)
//     let q2 = new Question('What is the name of this course\'s teacher?', ['John', 'Michael', 'Jonas'], 2)
//     let q3 = new Question('What best describes coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2)
//     let questions = [q1, q2, q3]

//     let n = Math.floor(Math.random() * questions.length)
//     questions[n].displayQuestion()
//     let answer = parseInt(prompt('Select correct answer.'))
//     questions[n].checkAnswer(answer)
// })()


(function () {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    Question.prototype.displayQuestion = function () {
        console.log(this.question)
        for (let i = 0; i < this.answers.length; i++) {
            console.log(i + ':' + this.answers[i])
        }
    }
    Question.prototype.checkAnswer = function (ans, callback) {
        let sc;
        if (ans === this.correct) {
            console.log('Great jaaaaaaooooooorrrrrrrb!')
            sc = callback(true)
        } else {
            console.log('Amscray')
            sc = callback(false)
        }
        this.displayScore(sc)
    }

    Question.prototype.displayScore = function (currentScore) {
        console.log('Your current score is ' + currentScore + ' -------------------------')
    }

    let q1 = new Question('What does padding usually control?', [' text', ' margins', ' borders'], 0)
    let q2 = new Question('A closure still has access to?', [' variables', ' parameters', ' both'], 2)
    let q3 = new Question('If you don\'t clear your floats, what happens?', [' everything moves left', ' everything moves right', ' nothing renders properly'], 2)
    let questions = [q1, q2, q3]

    function score() {
        let sc = 0;
        return function (correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }

    let scoreKeeper = score()

    function nextQuestion() {
        let n = Math.floor(Math.random() * questions.length)
        questions[n].displayQuestion()
        let answer = prompt('Choose correct answer')

        if (answer !== 'stop') {
            questions[n].checkAnswer(parseInt(answer), scoreKeeper)
            nextQuestion()
        }
    }
    nextQuestion()
})()

// function nextQuestion() {
//     let n = Math.floor(Math.random() * questions.length)
//     let gamePlaying = questions.length;
//     if (gamePlaying) {
//         questions[n].displayQuestion()
//         let answer = parseInt(prompt('Choose your destiny.'))
//         questions[n].checkAnswer(answer)
//     } else {
//         console.log('placeholder')
//     }
// }