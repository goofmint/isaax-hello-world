const octokit = require('@octokit/rest')();
const fs = require('fs');
const filePath = './config.json';

(async () => {
  let config = {};
  try {
    if (fs.statSync(filePath)) {
      config = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }
  } catch (e) {
  }
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
  octokit.authenticate({
    type: 'token',
    token: config.GITHUB_TOKEN || process.env.GITHUB_TOKEN
  });
  const res = await octokit.repos.createRelease({
    owner: pkg.repository.user,
    repo: pkg.repository.name,
    tag_name: `v${pkg.version}`
  });
})();
