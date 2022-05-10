'use strict';

require('fs').appendFile(process.env.GITHUB_REPOSITORY + '/.git/config', `
[user]
	name = github-actions[bot]
	email = 41898282+github-actions[bot]@users.noreply.github.com
`, error => {
	if (error) {
		throw error;
	}
});
