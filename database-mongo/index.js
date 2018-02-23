const mongoose = require('mongoose');
const Promise = require("bluebird");

mongoose.connect('mongodb://localhost/foodmatrix');

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
  document.save(function(err, favorite) {
    if (err) return console.error(err);
  });
};
// save({
//   username:'greg',
//   recipe: {
//     id:1242414,
//     title:'food',
//     image:'awsomepic.jpg',
//     likes:61928469
//   }
// });

//Returning list of a user's favorites, sorted descending by popularity('likes')
let retrieve = (username) => {
  return new Promise(function(resolve, reject) {
    var query = UserFavorite.find({ 'username' : username });
    query.select({});
    query.limit(10);
    query.sort({ likes: -1 });
    query.exec(function(err, favorites) {
      if (err) {
        reject(err);
      } else {
        resolve(favorites);
      }
    });
  })
};

// retrieve('greg')
// .then(console.log)

module.exports = {
  save : save,
  retrieve : retrieve
}