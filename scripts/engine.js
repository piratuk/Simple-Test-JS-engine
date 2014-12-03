
		var testName = "Test name";
		var testDescription = "";
		var questions = [
		{question: "Example question", var1: 'First var.', var2:'Second var.', correct: 1},
		];

		var score = 0;
		var questionNumber = 0;
		var currAnswer = 0;

		function showRules () {
			$("#rules").fadeIn('fast', function() {
			});

			$("#rules").children(".button").click(function () {
				$("#rules").fadeOut('fast', function() {
					startGame();
				});
			});

		}

		function startGame () {
			$("#result").fadeOut('fast');
			$("#game-area").fadeIn('fast');
			score = 0;
			questionNumber = 0;
			currAnswer = 0;
			askNext();
		}

		function showResult () {
			$("#game-area").fadeOut('fast', function() {
				$("#result").fadeIn('fast');
			});
			$("#score").html(score+"/"+questions.length);
		}

		function answer (choosenVar) {
			if (choosenVar == currAnswer) {
				score++;
			};
			askNext();
		}

		function askNext () {
			if (questionNumber==questions.length) {
				showResult();
				return;
			};

			var currQuestion = questions[questionNumber++];
			$('#ask').html(currQuestion.question);
			$('#first').html(currQuestion.var1);
			$('#second').html(currQuestion.var2);
			currAnswer = currQuestion.correct;
		}

		function showTestInfo () {
			$(".test-name").html(testName);
			$("#test-description").html(testDescription);
		}
		$(document).ready(function() {
			showTestInfo();
			showRules();
		});