const express = require('express');
let app = express();

let gitHubAPI = require('../helpers/github.js');
//console.log(getReposByUsername);

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname + '/../client/dist'));



app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database


  console.log(req.body);
  console.log(req.body.username);

  let username = req.body.username;
  gitHubAPI.getReposByUsername(username);
  //res.json(req.body.username);


});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

