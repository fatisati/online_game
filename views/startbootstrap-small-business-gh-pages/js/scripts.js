
var turn = 0;
var current0 = 0;
var current1 = 0;

var score0 = 0;
var score1 = 0;

var shish = 0;
var winner = 0;

function rollDice() {
	if(winner == 0){
    document.getElementById('p0').innerHTML = 'player 0 <i class="fas fa-circle" style="font-size : 10px"></i>';
    document.getElementById('p1').innerHTML = 'player 1 <i class="fas fa-circle" style="font-size : 10px"></i>';


    r = Math.floor(Math.random() * 6) + 1;
    r2 = Math.floor(Math.random() * 6) + 1;
    if(r == 6 || r2 == 6){
        shish += 1;
    }
    else{
        shish = 0;
    }
    // console.log(shish);
    img = document.getElementById('dice_img')
    img.src = './img/dice-' + r + '.png';

    img2 = document.getElementById('dice_img2')
    img2.src = './img/dice-' + r2 + '.png';

    if (turn == 0) {
        if(shish == 2){
            score0 = 0;
            current0 = 0;
            setCurrentScore(0, 0);
            setGlobalScore(0, 0);
            switchTurn();
            return;
        }
        if (r == 1 || r2 == 1) {
            // console.log('r2 is ', r2);
            current0 = 0;
            switchTurn();
        }
        else {
            current0 += r + r2;
        }
        setCurrentScore(0, current0);
        // document.getElementById('current0').innerHTML = current0;
    }
    else {
        if(shish == 2){
            score1 = 0;
            current1 = 0;
            setCurrentScore(1, 0);
            setGlobalScore(1, 0);
            switchTurn();
            return;
        }
        if (r == 1 || r2 == 1) {
            // console.log('r2 is ', r2);
            current1 = 0;

            switchTurn();
        }
        else {
            current1 += r + r2;
        }
    
        setCurrentScore(1, current1);
        // document.getElementById('current1').innerHTML = current1;
    }
	}
}

function hold() {
    if (turn == 0) {
        score0 += current0;
        current0 = 0;
        setGlobalScore(0, score0);
        setCurrentScore(0, 0);
        // document.getElementById('score0').innerHTML = score0;

    }
    else {
        score1 += current1;
        current1 = 0;
        setGlobalScore(1, score1);
        setCurrentScore(1, 0);
        // document.getElementById('score1').innerHTML = score1;
    }
    score = document.getElementById('score').value;
    
    score = parseInt(score);
    console.log(score + 2);

    if(isNaN(score)){
        score = 100;
    }else{}

    if (score0 >= score) {
        document.getElementById('p0').innerHTML = 'winner!';
		winner = 1;
        //newGame();
    }
    else if (score1 >= score) {
        document.getElementById('p1').innerHTML = 'winner!';
		winner = 1;
        //newGame();
    }
    else {
        switchTurn();
    }
}

function switchTurn() {
    shish = 0;
    if (turn == 0) {
        turn = 1;
        document.getElementById('player0').classList.remove('current_player');
        document.getElementById('player1').classList.add('current_player');
    }
    else {
        turn = 0;
        document.getElementById('player1').classList.remove('current_player');
        document.getElementById('player0').classList.add('current_player');
    }
}

function newGame() {
    turn = 0;
    current0 = 0;
    current1 = 0;

    score0 = 0;
    score1 = 0;
	winner = 0;

    document.getElementById('player1').classList.remove('current_player');
    document.getElementById('player0').classList.add('current_player');
    setCurrentScore(0, 0);
    setCurrentScore(1, 0);
    setGlobalScore(0, 0);
    setGlobalScore(1, 0);

    document.getElementById('dice_img').src = '';
    document.getElementById('dice_img2').src = '';
    document.getElementById('score').value = null;
}

function setCurrentScore(player, score) {
    console.log('here');
    document.getElementById('current' + player).innerHTML = score;
}

function setGlobalScore(player, score) {
    document.getElementById('score' + player).innerHTML = score;
}