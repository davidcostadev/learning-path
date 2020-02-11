const fs = require('fs');

const readStream = fs.createReadStream('./11-data.txt', 'UTF-8');

let readedLength = 0;

readStream.on('data', data => {
	console.log(`I read ${data.length} characters of text`);
	readedLength += data.length;
});

readStream.once('data', data => {
	// console.log(data);
});

readStream.on('end', () => {
	console.log('finished reading file');
	console.log(`I read ${readedLength} of total charecters`);
});


