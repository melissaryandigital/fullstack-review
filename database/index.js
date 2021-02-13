const mongoose = require('mongoose');
mongoose.connect(process.env.ATLAS_URI || 'mongodb://localhost/fetcher');

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


let sort = () => {

  // sort documents in repos collection in descending order by stargazer count

  return Repo.find({}).sort({stargazersCount: -1}).limit(25).exec(function (err, docs) {
    if (err) return console.log(err);

  });

}


module.exports.save = save;

module.exports.sort = sort;