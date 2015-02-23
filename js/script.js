$(document).ready(function(){

	var allQuestions = [
		{
		question: "During the Dundees at Chili's, what award does Pam win?",
		choices: ["Longest Engagement","Diabetes Award","Whitest Sneakers","Bushiest Beaver"],
		correct: ["Whitest Sneakers"]
		},

		{
		question: "In Season 3, Dunder Mifflin executives chose to shut down the Stamford branch, and have Scranton absorb the remaining sales team. Why?",
		choices: ["Sabre bought Dunder Mifflin.","Josh, Stamford's manager, left the company.","Jan sued the company for sexual harassment","As VP, Ryan was arrested for defrauding investors"],
		correct: ["Josh, Stamford's manager, left the company."]
		},

		{
		question: "Complete the song line: Dunder Mifflin:",
		choices: ["People person's paper people","Paper for people who like paper","Peter Piper's Preferred Paper","People Person's Paper Pushers"],
		correct: ["People person's paper people"]
		},

		{
		question: "How does Ryan win Kelly back at the end of the series?",
		choices: ["By proposing to her in front of her husband","By dressing in traditional Indian clothing","By asking her parents for her hand in marriage","By giving his baby an allergic reaction"],
		correct: ["By giving his baby an allergic reaction"]
		},

		{
		question: "Meredith is most frequently identified as...",
		choices: ["A stoner","An alcoholic","An addict","A glutton"],
		correct: ["An alcoholic"]
		}
	];


	//Make sure only one possible answer is displayed as chosen.
	function displayChoice(){
		console.log("displayChoice ran!");
		$("li").on("click",function(e){
			$(this).closest("ul").children().removeClass("selected");
			$(this).addClass("selected");
		});
		};
	displayChoice();

	//Define what happens after each question


	// Set up variables for counter
	var count = parseInt($("span#count").text());
	var answered = parseInt($("span#answered").text());
	// counter logic, increment on each question -- regardless of response

	function counter(){
		console.log("counter ran!")
		if (count < 5){
			$("span#count").replaceWith($("<span id='count'>"+(++count)+"</span>"));
		}

		if (answered < 5){
			$("span#answered").replaceWith($("<span id='answered'>"+(++answered)+"</span>"));
		}

	}

	//Make number-right counter go up only upon choosing correct answer.
	var numberRight = parseInt($("span#number-right").text());

	//Display different messages under the counters 
	var rightMessage = $("<h2 class='message' id='right-answer'>Wow, you watch this show way too much. You have no life</h2>");
	var wrongMessage = $("<h2 class='message' id='right-answer'>Uh okay, have you ever seen this show?</h2>");

	function answerReview(){
		console.log("answerReview ran!");
		if ($("li.selected").text() == allQuestions[answered].correct){
			$("span#number-right").replaceWith($("<span id='number-right'>"+(++numberRight)+"</span>"));
			$("h2.message").remove();
			$("h3").after(rightMessage);
		}
		else {
			$("h2.message").remove();
			$("h3").after(wrongMessage);
		}

	}


	// What happens at the end of the quiz: provide the results and replace the submission button with that to restart the quiz
	var newQuizButton = $("<button id='new-game'>Take Quiz again?</button>");
	
	function result(){
		console.log("result ran!");
		$("h2.message").remove();
		$("h3").after($("<h2 class='message' id='result'>You got "+numberRight+" out of "+answered+" questions.</h2>"));
		$("button#submit").replaceWith(newQuizButton);
	}

	// Replace each question upon submitting a response, and provide the quiz results at the end.
	function replaceQuestion(){
		console.log("replaceQuestion ran!");
		if (answered < 5){
			$("div#quiz-content").replaceWith($("<div id='quiz-content'><h2 class='question'>"+allQuestions[answered].question+"</h2><ul><li class='choice'>"+allQuestions[answered].choices[0]+"</li><li class='choice'>"+allQuestions[answered].choices[1]+"</li><li class='choice'>"+allQuestions[answered].choices[2]+"</li><li class='choice'>"+allQuestions[answered].choices[3]+"</li></ul></div>"));
		} else if (answered == 5){
			result();
		}
	}


	//  How the quiz works
	function rules(){
		console.log("rules ran!");
		$("button#submit").on("click",function(e){

		if (!$("ul>li").hasClass("selected")){
			$("h2.message").remove();
			$("h3").after($("<h2 class='message' id='idiot-message'>You didn't choose an answer. Don't be an idiot. Think to yourself, 'Would an idiot do this?' And if the answer is yes, then do not do that thing.</h2>"));
		}
		else {
			answerReview();
			counter();
			replaceQuestion();
			displayChoice();
		}

	})
	}
	rules();

	// Start the quiz over
	newQuizButton.on("click",function(e){
		count = 1;
		answered = 0;
		numberRight = 0;
		
		console.log("new quiz began!");

		$("h3").replaceWith($("<h3>Question Number <span id=\'count\'>"+count+"</span> || You have answered <span id=\'answered\'>"+answered+"</span> questions || You've gotten <span id=\'number-right\'>"+numberRight+"</span> right so far.</h3>"));
		$("h2.message").remove();
		$("button#new-game").replaceWith("<button id='submit'>Make a guess, homie</button>");
		$("div#quiz-content").replaceWith($("<div id='quiz-content'><h2 class='question'>"+allQuestions[answered].question+"</h2><ul><li class='choice'>"+allQuestions[answered].choices[0]+"</li><li class='choice'>"+allQuestions[answered].choices[1]+"</li><li class='choice'>"+allQuestions[answered].choices[2]+"</li><li class='choice'>"+allQuestions[answered].choices[3]+"</li></ul></div>"));


	});

});

