var startingCash = 100;
var playerResponse;
var promptForBetText = 'Please place your bet.';
var randomNumberRange = 10


var promptForBet = function(){ 
  return prompt(promptForBetText);
};

var randomNumber = function(n){
  return Math.floor((Math.random() * n) + 1);
}

var evaluate = function(guess, answer){
  console.log('answer is '+answer)
  if(guess == answer){
    console.log('correct');
  }
  else if (guess == answer+1 || guess == answer-1){
    console.log('keep money')
  }
  else{
    console.log('wrong');
  }
};


evaluate(promptForBet(),randomNumber(randomNumberRange));

