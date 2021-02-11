const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  repoId: Number,
  repoName: String,
  username: String,
  stargazersCount: Number,
  htmlUrl: String,
  created: String
});

let Repo = mongoose.model('Repo', repoSchema);


let save = (gitHubRepos) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB


  // See if you can get one thing saved


  gitHubRepos.forEach(gitHubRepo => {

    const repo = new Repo({
      repoId: gitHubRepo.id,
      repoName: gitHubRepo.name,
      username: gitHubRepo.owner.login,
      stargazersCount: gitHubRepo.stargazers_count,
      htmlUrl: gitHubRepo.html_url,
      created: gitHubRepo.created_at
  });

    repo.save(function (err, repo) {
      if (err) return console.log(err);
    });
  });

  // Repo.find(function (err, repo) {
  //   if (err) return console.error(err);
  //   console.log(repo);
  // });

  // To query in shell
  // use fetcher
  // db.repos.find({})


}

module.exports.save = save;