function quiz (questions) {
	this.score = 0;
	this.questions = questions;
	this.questionIndex = 0;

}
quiz.prototype.getQuestionIndex = function () {
	return this.questions[this.questionIndex];
}
quiz.prototype.guess = function(answer) {
	this.questionsIndex++;
	if(this.getQuestionIndex().isCorrectAnswer (answer)) {
		this.score++;	
}
quiz.prototype.isEnded= function() {
return this.questionsIndex === this.questions.lenght;
}
