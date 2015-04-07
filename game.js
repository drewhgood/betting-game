

  var startingCash = 100;
  var playerCash = startingCash
  var promptForBetText = 'Please place a bet between $5 and $10.';
  var promptForGuessText = 'Please make a guess between 1 and 10.';
  var correctText = 'You were right. Lucky, but right!';
  var wrongText = "Wrong! We told you... the house always wins";
  var almostText = "It's a draw, try again.";
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
   
    if(guess == answer){
      updateCash('correct');
      updateScoreboard(correctText);
      highlighCash('correct');
    }
    else if (guess == answer + 1 || guess == answer - 1){  
      updateScoreboard(almostText);
      highlighCash('almost');
    }
    else{
      updateCash('wrong');
      updateScoreboard(wrongText);
      highlighCash('wrong');
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

  var updateScoreboard = function(text){
    $('#notice').text(text)
  };

  var highlighCash = function(outcome){
    var active;
    if(outcome === 'correct'){
      active = 'correct'
    }
    else if(outcome === 'wrong'){
      active ='wrong'
    }
    else{
      active ='almost'
    }

    
    $('#cash').addClass(active).delay(3300).queue(function(next) {
      $(this).removeClass();
    });
   
  };


