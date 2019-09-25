'use strict';
const fs = require('fs');
const path = require('path');

if (!process.env.INPUT_TOKEN) {
	throw new Error('Input required and not supplied: token');
}

const throwErrors = err => {
	if (err) {
		throw err;
	}
};

fs.appendFile('.git/config', `
[user]
	name = ${process.env.INPUT_NAME}
	email = ${process.env.INPUT_EMAIL}
`, throwErrors);

fs.writeFile(path.join(process.env.HOME, '.netrc'), `
machine github.com
login ${process.env.GITHUB_REPOSITORY.replace(/\/.+/, '')}
password ${process.env.INPUT_TOKEN}
`, throwErrors);
