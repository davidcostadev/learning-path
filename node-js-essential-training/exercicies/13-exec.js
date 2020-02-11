const cp = require('child_process');

cp.exec('ls', (err, data) => {
	if (err) throw err;

	console.log(data);
});

