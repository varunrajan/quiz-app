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
				console.log("Aha!");
				$("span#number-right").replaceWith($("<span id='number-right'>"+(++numberRight)+"</span>"));
			}

	}



// Replace each question
	function replaceQuestion(){

		$("div#quiz-content").replaceWith($("<div id='quiz-content'><h2 class='question'>"+allQuestions[answered].question+"</h2><ul><li class='choice' id='A'>"+allQuestions[answered].choices[0]+"</li><li class='choice' id='B'>"+allQuestions[answered].choices[1]+"</li><li class='choice' id='C'>"+allQuestions[answered].choices[2]+"</li><li class='choice' id='D'>"+allQuestions[answered].choices[3]+"</li></ul></div>"));
	}

//  How the quiz works
	function rules(){
		$("button").on("click",function(e){

		answerReview();
		counter();
		replaceQuestion();
		displayChoice();


	})
	}
	rules();

});

