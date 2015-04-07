$( document ).ready(function() {

  $("#start").click(function(){
      // $('#start').addClass('active');
      $("#welcome").fadeOut(600, function(){
        $("#playing").fadeIn(400);
      });
  });

  $("#play").click(function(){
    promptForBet();
    promptForGuess();
    evaluate(guess,generateAnswer(randomNumberRange));

    $('#cash').text("$"+playerCash);

    $( "#info" ).animate({height:'72px'}, 500 , function(){
      $("#scoreboard").fadeIn(400, function(){
        $('#scoreboard').delay(2200).fadeOut(400);
        $("#info").delay(2500).animate({height:'0px'}, 500);
      });
    });
  });

  $("#restart").click(function(){
    restartGame();
    $('#cash').text('Game Reset').delay(1000).queue(function(next) {
      $(this).text("$"+playerCash);
    });
  });

});