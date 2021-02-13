const axios = require('axios');

if (process.env.NODE_ENV !== production) {
  const config = require('../config.js');
}


let getReposByUsername = (usernameForAxios) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${usernameForAxios}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${process.env.GITHUB_API || config.TOKEN}`
    }
  };

  return axios.get(options.url, options.headers)

}

module.exports.getReposByUsername = getReposByUsername;