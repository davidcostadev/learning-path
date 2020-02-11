const fs = require('fs');

const writeStream = fs.createWriteStream('./12-data.txt', 'UTF-8');

// process.stdin.on('data', data => {
//	writeStream.write(data);
// });


process.stdin.pipe(writeStream);



