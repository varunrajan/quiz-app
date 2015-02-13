%(document).ready(function(){

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
		question: "Complete the song line: Dunder Mifflin:"
		choices: ["People person's paper people","Paper for people who like paper","Peter Piper's Preferred Paper","People Person's Paper Pushers"]
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

	$("ul").on("click","li.choice",function(){
		$(this).addClass("selected");
		preventDefault();
	});

})