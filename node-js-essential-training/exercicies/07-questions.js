const collectAnswers = require('./07-myModule.js');

const questions = [
	'What is your name? ',
	'Where do you live? ',
	'What are you going to do with NodeJS? ',
];

collectAnswers(questions, answers => {
	console.log('Thanks for your answers. ');
	console.log(answers);
	process.exit();
});

