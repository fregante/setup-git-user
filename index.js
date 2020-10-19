'use strict';

require('fs').appendFile('.git/config', `
[user]
	name = GitHub Actions
	email = actions@users.noreply.github.com
`, error => {
	if (error) {
		throw error;
	}
});
