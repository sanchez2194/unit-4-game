
$(document).ready(function() {

	// NUMBER ARRAYS 

	// random computer variable array
	var random = [];

	for (var i = 19; i < 121; i++) {
		random.push(i);
	}
        console.log(random)
	// crystal numbers array
	var crystals = [];

	for (var c = 1; c < 13; c++) {

		crystals.push(c);
	}

	 console.log(crystals);

	//  GLOBAL VARIABLES 

	// random variables selected by computer
	var randomNumber; 
	var crystalNumbers = []; 

	var c1;
	var c2;
	var c3;
	var c4;

    var totalScore = 0; 

	var wins = 0;
	var losses = 0;

	// FUNCTIONS 

	// pick a random number
	function pickRandomNumber(array) {

		var x = array[Math.floor(Math.random() * array.length)];
		randomNumber = x;
		$("#randomNumber").html(randomNumber);

		console.log("random number: " + randomNumber);

	} 

	// pick random numbers for crystals

	function pickRandomCrystals(array) {

		for (var i = 0; i < 4; i++){

			var a = array[Math.floor(Math.random() * array.length)];

			crystalNumbers.push(a);
		}
    // check which numbers have been picked
		console.log("crystal numbers: " + crystalNumbers);

	} 

	function crystalValues(array) {

		// change value of each crystal button according to array
		for (i = 0; i < array.length; i++) {

		$("#button-" + (i+1)).attr("value", array[i]);
		console.log(this);
		}
		c1 = array[0];
		c2 = array[1];
		c3 = array[2];
		c4 = array[3];
	} 

	function gameReset(x) {

		crystalNumbers = []; 

		pickRandomNumber(random);

		pickRandomCrystals(crystals);

		crystalValues(crystalNumbers);

		totalScore = 0;
		$("#totalNumber").html(totalScore);

		alert(x);
	}

	// GAME SETTINGS AT START

	pickRandomNumber(random); 
	pickRandomCrystals(crystals); 
	crystalValues(crystalNumbers);

	

		$("#button-1").on("click", function() {

			totalScore += c1;
			$("#totalNumber").html(totalScore);
		});

		$("#button-2").on("click", function() {

			totalScore += c2;
			$("#totalNumber").html(totalScore);
		});

		$("#button-3").on("click", function() {

			totalScore += c3;
			$("#totalNumber").html(totalScore);
		});

		$("#button-4").on("click", function() {

			totalScore += c4;
			$("#totalNumber").html(totalScore);
		});

	$("button").on("click", function() {
		
		if (totalScore == randomNumber) {

			wins++;
			console.log(totalScore);
			$("#totalNumber").html(totalScore);
			$("#wins").html("Wins: " + wins);


			setTimeout(function() {gameReset("YOU WIN!!")}, 200);
		}

		else if (totalScore > randomNumber){

			losses++;
			$("#totalNumber").html(totalScore);
			$("#losses").html("Losses: " + losses);

			setTimeout(function() {gameReset("YOU LOSE!")}, 200);
		}
	});

});