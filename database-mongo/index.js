const mongoose = require('mongoose');

mongoose.connect();

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));


let userFavoriteSchema = mongoose.Schema({
  username: String,
  recipeID: Number,
  title: String,
  imageUrl: String,
  dateCreated: {
    type: Date,
    default: Date.now
  },
  likes: Number
});

let UserFavorite = mongoose.model('UserFavorite', userFavoriteSchema);


//Saving only relevant information from recipe object passed from front-end (see schema)
//Auto-generates a "now date"
let save = (documentObj) => {
  let document = new UserFavorite({
                                    username: documentObj.username,
                                    recipeID: documentObj.recipe.id,
                                    title: documentObj.recipe.title,
                                    imageUrl: documentObj.recipe.image,
                                    likes: documentObj.recipe.likes
  });
  document.save(function(err, repo) {
    if (err) return console.error(err);
  });
};

//Returning list of a user's favorites, sorted descending by popularity('likes')
let retrieve = (username, callback) => {
  var query = Repo.find({ 'username' : username });
  query.select({});
  query.limit(10);
  query.sort({ likes: -1 });
  query.exec(function(err, favorites) {
    callback(favorites);
  });
};

module.exports = {
  save : save,
  retrieve : retrieve
}