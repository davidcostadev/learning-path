const fs = require('fs');

fs.readdir('./assets', (err, files) => {
	if (err) throw err;

	console.log(files);
	console.log('completed');


	fs.readFile(`./assets/${files[0]}`, 'UTF-8', (err2, content) => {
		if (err2) throw err2;

		console.log(content);
	});
});
	

