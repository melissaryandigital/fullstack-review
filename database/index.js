const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('CONNECTED TO DB');
});

let repoSchema = new mongoose.Schema({
  repoId: Number,
  repoName: String,
  username: String,
  stargazersCount: Number,
  htmlUrl: String,
  created: Date
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (username) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  console.log('in the db save function');

  // const username = new Repo
  // username.save(function (err, username) {
  //   if (err) return console.error(err);
  // });

}

module.exports.save = save;