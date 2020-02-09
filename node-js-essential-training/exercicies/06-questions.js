const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const questions = [
	'What is your name? ',
	'Where do you live? ',
	'What are you going to do with NodeJS? ',
];

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

collectAnswers(questions, answers => {
	console.log('Thanks for your answers. ');
	console.log(answers);
	process.exit();
});

