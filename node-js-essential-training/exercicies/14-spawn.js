const cp = require('child_process');

const questionApp = cp.spawn('node', ['07-questions.js']);

questionApp.stdin.write('David \n');
questionApp.stdin.write('Natal \n');
questionApp.stdin.write('Be rich \n');

questionApp.stdout.on('data', data => {
	console.log(`from the question app: ${data}`);
});


questionApp.on('close', () => {
	console.log('this is the end');
});
