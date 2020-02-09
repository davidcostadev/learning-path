const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const collectAnswers = (questions, done) => {
	const answers = [];
	const [firstQuestion] = questions;

	const questionAnswerd = answer => {
		answers.push(answer);
		if (answers.length < questions.length) {
			rl.question(questions[answers.length], questionAnswerd);
		} else {
			done(answers);
		}
	};

	rl.question(firstQuestion, questionAnswerd);

};

module.exports = collectAnswers;

