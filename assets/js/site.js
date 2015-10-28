$( "a[id^='game-action-choose-']" ).click(function(){
	var action = $(this).attr("id").replace("game-action-choose-", "");
	play(action);
	return false;
});

function play(player)
{
	var options = ["Paper", "Rock", "Lizard", "Spock", "Scissors"],
	  result = [" ties ", " beats ", " loses to "],
		i = Math.floor(Math.random() * 5),
		randomChoice = options[i],
	  shuffle = function (choice1, choice2)
	  {
	  	var index1 = options.indexOf(choice1),
		  index2 = options.indexOf(choice2),
		  dif = index2 - index1;
	  	if (dif < 0)
	  	{
	  		dif += options.length;
	  	}
	  	while (dif > 2)
	  	{
	  		dif -= 2;
	  	}
          
	  	$("#game-text").html("<strong>" + choice1 + "</strong>" + result[dif] + "<strong>" + choice2 + "</strong>");
          
        $("#game-icons").addClass("game-result");
	  	switch(result[dif]) {
	  		case " ties ":
	  			$("#game-icons").html("<span class=\"game-result-tie\"><i class=\"fa fa-hand-" + choice1 + "-o\"></i></span>" + "<span class=\"game-result-tie\"><i class=\"fa fa-hand-" + choice2 + "-o\"></i></span>");
	  			break;
            case " beats ":
	  			$("#game-icons").html("<span class=\"game-result-win\"><i class=\"fa fa-hand-" + choice1 + "-o\"></i></span>" + "<span class=\"game-result-lose\"><i class=\"fa fa-hand-" + choice2 + "-o\"></i></span>");
	  			break;
            case " loses to ":
	  			$("#game-icons").html("<span class=\"game-result-lose\"><i class=\"fa fa-hand-" + choice1 + "-o\"></i></span>" + "<span class=\"game-result-win\"><i class=\"fa fa-hand-" + choice2 + "-o\"></i></span>");
	  			break;
	  	}
          
        $("#game-text-extra").html("<a href=\".\">Try Again?</a>");
	  };

	shuffle(randomChoice, player);
}
//alert(bigBang(randomChoice, "rock"));
