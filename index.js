'use strict';

const user = process.env.GITHUB_ACTOR ?? 'github-actions';
const userEmail = process.env.GITHUB_ACTOR ?? '41898282+github-actions[bot]';


require('fs').appendFile('.git/config', `
[user]
	name = ${user}
	email = ${userEmail}
`, error => {
	if (error) {
		throw error;
	}
});
