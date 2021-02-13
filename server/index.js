const express = require('express');
let app = express();

const gitHubAPI = require('../helpers/github.js');
const database = require('../database/index.js');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname + '/../client/dist'));



let top25;


app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  let username = req.body.username;

  gitHubAPI.getReposByUsername(username)
    .then(response => {
      //console.log(response.data);
      database.save(response.data);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(error);
    });

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos

  database.sort()
    .then((data) => {
      res.send(data).status(200);
    })
    .catch((error) => {
      console.log(error);
    });

});

let port = process.env.PORT || 1128;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

