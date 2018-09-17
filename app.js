
function populate() {

	if(quiz.isEnded()) {
		//showScores ();

	}
	else
		//shoq question
	var element = document.getElementById('question');
	element.innerHTML = quiz.getQuestionIndex ().text;
	// show choices
	var choices = quiz.getQuestionIndex ().choices;
	for (var i = 0; i < choices.lenght;i++) {
		var element = document.getElementById ("choice"+i);
		element.innerHTML = choices[i];
	};

// create questions
var questions = [
new Questions ("What is the abbreviation of OK?", ["Oll wright", "Oll korrect"], "Oll korrect"),
new Questions ("Where is OK first use", ["Boston, USA", "Oxford, UK"], "Boston, USA")
];
// create quiz 
var quiz = new quiz(questions);
populate ();