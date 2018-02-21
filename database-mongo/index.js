var mongoose = require('mongoose');

mongoose.connect();

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var userFavorites = mongoose.Schema({
  _id: String,
  username: String,
  url: String,
  imageUrl: String,
  recipeID: String,
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

var UserFavorite = mongoose.model('UserFavorite', userFavorites);

// var save = (userFavorite) => {
//   let newUserFavorite = new UserFavorite({

//   });
// }

