const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log('CONNECTED TO DB');

  let repoSchema = new mongoose.Schema({
    repoId: Number,
    repoName: String,
    username: String,
    stargazersCount: Number,
    htmlUrl: String,
    created: String
  });

  let Repo = mongoose.model('Repo', repoSchema);

});


// Take a repo from the API
// Create a document of it (based on the model)
// Save that document to the database


// Input - array of repos from github API

let save = (repos) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB


  // Map through each repo in repos array
  repos.map(repo => {

    // Create document
    const id = new Repo({
      repoId: repo.id,
      repoName: repo.name,
      username: repo.owner.login,
      stargazersCount: repo.stargazers_count,
      htmlUrl: repo.html_url,
      created: repo.created_at
    });

    // Save document to DB
    id.save(function (err, id) {
      if (err) return console.error(err);
      console.log('repo saved to db: ', id);
    });

  });

}

module.exports.save = save;