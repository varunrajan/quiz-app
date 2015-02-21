$(document).ready(function(){

	var allQuestions = [
		{
		id: 1,
		question: "During the Dundees at Chili's, what award does Pam win?",
		choices: ["Longest Engagement","Diabetes Award","Whitest Sneakers","Bushiest Beaver"],
		correct: ["Whitest Sneakers"]
		},

		{
		id: 2,
		question: "In Season 3, Dunder Mifflin executives chose to shut down the Stamford branch, and have Scranton absorb the remaining sales team. Why?",
		choices: ["Sabre bought Dunder Mifflin.","Josh, Stamford's manager, left the company.","Jan sued the company for sexual harassment","As VP, Ryan was arrested for defrauding investors"],
		correct: ["Josh, Stamford's manager, left the company."]
		},

		{
		id: 3,
		question: "Complete the song line: Dunder Mifflin:",
		choices: ["People person's paper people","Paper for people who like paper","Peter Piper's Preferred Paper","People Person's Paper Pushers"],
		correct: ["People person's paper people"]
		},

		{
		id: 4,
		question: "How does Ryan win Kelly back at the end of the series?",
		choices: ["By proposing to her in front of her husband","By dressing in traditional Indian clothing","By asking her parents for her hand in marriage","By giving his baby an allergic reaction"],
		correct: ["By giving his baby an allergic reaction"]
		},

		{
		id: 5,
		question: "Meredith is most frequently identified as...",
		choices: ["A stoner","An alcoholic","An addict","A glutton"],
		correct: ["An alcoholic"]
		}
	];


//Make sure only one possible answer is displayed as chosen.
	function displayChoice(){
	$("li").on("click",function(e){
		$(this).closest("ul").children().removeClass("selected");
		$(this).addClass("selected");
	});
	};
	displayChoice();

//Define what happens after each question


// counter function
var count = parseInt($("span#count").text());
var answered = parseInt($("span#answered").text());
	function counter(){
		if (count < 5){
			$("span#count").replaceWith($("<span id='count'>"+(++count)+"</span>"));
		}

		if (answered < 5){
			$("span#answered").replaceWith($("<span id='answered'>"+(++answered)+"</span>"));
		}

	}

//Make number-right counter go up only upon choosing correct answer.
var numberRight = parseInt($("span#number-right").text());


	function answerReview(){
			if ($("li.selected").text() == allQuestions[answered].correct){
				$("span#number-right").replaceWith($("<span id='number-right'>"+(++numberRight)+"</span>"));
				$("h2.message").remove();
				$("h3").after($("<h2 class='message' id='right-answer'>Wow, you watch this show way too much. You have no life</h2>"));
			}
			else {
				$("h2.message").remove();
				$("h3").after($("<h2 class='message' id='right-answer'>Uh okay, have you ever seen this show?</h2>"));
			}

	}

// Start the quiz over
//$("button").on("click",function(e){
//		count = 1;
//		answered = 0;
//		numberRight = 0;
//		
//		$("h3").replaceWith($("<h3>Question Number <span id=\'count\'>"+count+"</span> || You have answered <span id=\'answered\'>"+answered+"</span> questions || You've gotten <span id=\'number-right\'>"+numberRight+"</span> right so far.</h3>"));
//		$("h2.message").remove();
//		$("button#new-game").replaceWith("<button id='submit'>Make a guess, homie</button>");
//		$("div#quiz-content").replaceWith($("<div id='quiz-content'><h2 class='question'>"+allQuestions[answered].question+"</h2><ul><li class='choice'>"+allQuestions[answered].choices[0]+"</li><li class='choice'>"+allQuestions[answered].choices[1]+"</li><li class='choice'>"+allQuestions[answered].choices[2]+"</li><li class='choice'>"+allQuestions[answered].choices[3]+"</li></ul></div>"));
//});

// Replace each question
	function replaceQuestion(){

		if (answered < 5){
		$("div#quiz-content").replaceWith($("<div id='quiz-content'><h2 class='question'>"+allQuestions[answered].question+"</h2><ul><li class='choice'>"+allQuestions[answered].choices[0]+"</li><li class='choice'>"+allQuestions[answered].choices[1]+"</li><li class='choice'>"+allQuestions[answered].choices[2]+"</li><li class='choice'>"+allQuestions[answered].choices[3]+"</li></ul></div>"));
		} else if (answered = 5){
			$("h2.message").remove();
			$("h3").after($("<h2 class='message' id='result'>You got "+numberRight+" out of "+answered+" questions.</h2>"));
			$("button#submit").replaceWith($("<button id='new-game'>Take Quiz again?</button>"));
		}
	}


	function result(){
			$("h2.message").remove();
			$("h3").after($("<h2 class='message' id='result'>You got "+numberRight+" out of "+answered+" questions.</h2>"));			
		}
//  How the quiz works
	function rules(){
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

});

