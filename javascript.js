$(document).ready(function(){
	//Picks random number at start of game between 30 and 150
	var Random =Math.floor(Math.random()*120+30)

	//puts random number text to randomNumber id html
	$("#randomNumber").text(Random);

	//random numbers for each crystal
	//random numbers must be between 1-12
	var num1 = Math.floor(Math.random()*11+1)
	var num2 = Math.floor(Math.random()*11+1)
	var num3 = Math.floor(Math.random()*11+1)
	var num4 = Math.floor(Math.random()*11+1)

	//declare variables for tallies
	var playerTotal = 0;
	var wins = 0;
	var losses = 0;

	$("numberWins").text(wins);
	$("numberLoss").text(losses);

	//reset game
	function reset() {
		Random = Math.floor(Math.random()*120+30);
		console.log(Random)
		$("#randomNumber").text(Random);
		num1 = Math.floor(Math.random()*11+1);
		num2 = Math.floor(Math.random()*11+1);
		num3 = Math.floor(Math.random()*11+1);
		num4 = Math.floor(Math.random()*11+1);
		playerTotal = 0;
		$("#finalScore").text(playerTotal);
		}

	//adds wins to playerTotal
	function win() {
		alert("You won!!");
		wins++;
		$("#numberWins").text(wins);
		reset();
	}
	//adds the losses to userTotal
	function loss() {
		alert("You lose!!");
		losses++;
		$("#numberLoss").text(losses);
		reset()
	}

	//Click buttons for Crystals
		$("#one").on("click", function(){
			playerTotal = playerTotal + num1;
			console.log("New playerTotal= " + playerTotal);
			$("#finalScore").text(playerTotal);

			//conditions for wins/loss
			if (playerTotal == Random) {
				win();
			}
			else if (playerTotal > Random) {
				loss();
			}
		})
		$("#two").on("click", function(){
			playerTotal = playerTotal + num2;
			console.log("New playerTotal= " + playerTotal);
			$("#finalScore").text(playerTotal);

			//conditions for wins/loss
			if (playerTotal == Random) {
				win();
			}
			else if (playerTotal > Random) {
				loss();
			}
		})
		$("#three").on("click", function(){
			playerTotal = playerTotal + num3;
			console.log("New playerTotal= " + playerTotal);
			$("#finalScore").text(playerTotal);

			//conditions for wins/loss
			if (playerTotal == Random) {
				win();
			}
			else if (playerTotal > Random) {
				loss();
			}
		})
		$("#four").on("click", function(){
			playerTotal = playerTotal + num4;
			console.log("New playerTotal= " + playerTotal);
			$("#finalScore").text(playerTotal);

			//conditions for wins/loss
			if (playerTotal == Random) {
				win();
			}
			else if (playerTotal > Random) {
				loss();
			}
		});
	});