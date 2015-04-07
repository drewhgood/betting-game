var startingCash = 100;
var playerCash = startingCash
var promptForBetText = 'Please place a bet between $5 and $10.';
var promptForGuessText = 'Please make a guess between 1 and 10.';
var randomNumberRange = 10
var bet;
var guess;


var promptForBet = function(){ 
  bet = $('#wager').val();
};

var promptForGuess = function(){ 
  guess = $('#guess').val();
};

var generateAnswer = function(n){
  return Math.floor((Math.random() * n) + 1);
}

var evaluate = function(guess, answer){
  console.log('answer is '+answer)
  if(guess == answer){
    updateCash('correct')
    console.log('correct');
  }
  else if (guess == answer + 1 || guess == answer - 1){
    console.log('keep money')
  }
  else{
    updateCash('wrong')
    console.log('wrong');
  }
};

var updateCash =function(outcome){
  outcome == 'correct' ? playerCash += bet * 2 : playerCash -= bet
};


var restartGame = function(){
  playerCash = startingCash;
  guess = null;
  bet = null;
};

  
 





