const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log('CONNECTED TO DB');

  let itemSchema = new mongoose.Schema({
    itemId: Number,
    itemName: String,
    username: String,
    stargazersCount: Number,
    htmlUrl: String,
    created: String
  });

  let item = mongoose.model('item', itemSchema);

});


// Input - array of items from github API

let save = (items) => {
  // TODO: Your code here
  // This function should save a item or items to
  // the MongoDB


  // Map through each repo in array, create document, save document to dbx
  items.forEach(item => {

    // Check if this document already exists in db

    // Create document
    const repo = new item({
      itemId: item.id,
      itemName: item.name,
      username: item.owner.login,
      stargazersCount: item.stargazers_count,
      htmlUrl: item.html_url,
      created: item.created_at
    });

    // Save document to DB
    repo.save(function (err, repo) {
      if (err) return console.error(err);
      console.log('item saved to db: ', repo);
    });

  });

}

module.exports.save = save;