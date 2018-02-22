require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const recipe = require('../database-mongo/RecipeIDData.js');
const recipeList = require('../database-mongo/RecipeListData.js');
const twilio = require('../helpers/twilioHelpers.js')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/../client/dist'));

app.post('/db/save', (req, res) => res.send('save to db'));
app.get('/db/fetch', (req, res) => res.send('favorites list'));
app.get('/recipeByIngredient', (req, res) => res.send(recipeList.recipeObj.fakeRecipes));
app.get('/recipeById', (req, res) => res.send(recipe.sampleRecipe));
app.post('/sendText', (req, res) => {
  twilio.sendMessage(req, res)
  .then(res.send('messag sent'))
});



app.listen(3000, () => console.log('Example app listening on port 3000!'))