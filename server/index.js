require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const recipe = require('../database-mongo/RecipeIDData.js');
const recipeList = require('../database-mongo/RecipeListData.js');
const twilioHelpers = require('../helpers/twilioHelpers.js')
const spoonacularHelpers = require('../helpers/spoonacularHelpers.js')
const db = require('../database-mongo/index.js')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/../client/dist'));

app.post('/db/save', (req, res) => {res.send('save to db')});

app.post('/db/fetch', (req, res) => {
  var username = req.body.username
  db.retrieve(username)
    .then(data => res.send(data));
});

app.get('/recipes', (req, res) => {
  if(req.query.ingredients) {
      res.send(req.query.ingredients)
  } else {
    res.status(400).send({
       message: 'Pick Some Ingredients Please'
    });
  }
})

app.get('/recipe/:id', (req, res) => {
  spoonacularHelpers.getIngredients(req.params.id)
    .then(data => res.send(data))
});

app.post('/sendText', (req, res) => {
  var phoneNumber = req.body.number;
  console.log(phoneNumber)
  twilioHelpers.sendMessage(phoneNumber)
    .then(res.send('message sent'))
});



app.listen(3000, () => console.log('Example app listening on port 3000!'))