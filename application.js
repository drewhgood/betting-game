$("#start").click(function(){
    // $('#start').addClass('active');
    $("#welcome").fadeOut(600, function(){
      $("#playing").fadeIn(400);
    });
});


$("#play").click(function(){
  promptForBet();
  promptForGuess();
  console.log('guess '+ guess)
  console.log('bet '+ bet)
  evaluate(guess,generateAnswer(randomNumberRange));
  console.log(playerCash)
});

$("#restart").click(function(){
  restartGame();
});