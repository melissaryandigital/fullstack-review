const axios = require('axios');

let GITHUB_TOKEN;

if (process.env.NODE_ENV !== 'production') {
  const config = require('../config.js');
  GITHUB_TOKEN = config.TOKEN;
} else {
  GITHUB_TOKEN = process.env.GITHUB_API;
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
      'Authorization': `token ${GITHUB_TOKEN}`
    }
  };

  return axios.get(options.url, options.headers)

}

module.exports.getReposByUsername = getReposByUsername;