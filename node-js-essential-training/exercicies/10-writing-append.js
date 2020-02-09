const fs = require('fs');

const md = 'legal\n';

fs.writeFile('./assets/note.txt', md, (err) => {
	if (err) throw err;
});

