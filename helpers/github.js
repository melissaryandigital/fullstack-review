const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (usernameForAxios) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${usernameForAxios}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  return axios.get(options.url, options.headers)
  // .then(function(response) {
  //   //console.log(response.data);
  //   callback(response.data);
  //   })
  // .catch(function(error) {
  //   console.log(error);
  // });

}

module.exports.getReposByUsername = getReposByUsername;