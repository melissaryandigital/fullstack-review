const express = require('express');
let app = express();

const gitHubAPI = require('../helpers/github.js');
const database = require('../database/index.js');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname + '/../client/dist'));



app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  let username = req.body.username;


  // Need to make this asynchromous
  gitHubAPI.getReposByUsername(username);
  database.save();

  // const repoPromise = (username) => {
  //   return new Promise((resolve, reject) => {
  //     gitHubAPI.getReposByUsername((error, username) => {
  //       if (error) reject(error);
  //       else resolve(data);
  //     })
  //   });
  // }

  // repoPromise(username)
  //   .then((repos) => {
  //     console.log('inside promise chain: ', repos);
  //   })
  //   .catch(error => console.error('something went wrong', error));


});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

