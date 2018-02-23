require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const recipe = require('../database-mongo/RecipeIDData.js');
const recipeList = require('../database-mongo/RecipeListData.js');
const twilio = require('../helpers/twilioHelpers.js')
const db = require('../database-mongo/index.js')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/../client/dist'));

app.post('/db/save', (req, res) => res.send('save to db'));

app.post('/db/fetch', (req, res) => {
  var username = req.body.username;
  db.retrieve(username)
    .then(data => res.send(data));
});

app.get('/recipeByIngredient', (req, res) => res.send(recipeList.recipeObj.fakeRecipes));

app.get('/recipeById', (req, res) => res.send(recipe.sampleRecipe));

app.post('/sendText', (req, res) => {
  var phoneNumber = req.body.number;
  console.log(phoneNumber)
  twilio.sendMessage(phoneNumber)
    .then(res.send('message sent'))
});



app.listen(3000, () => console.log('Example app listening on port 3000!'))