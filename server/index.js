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

app.post('/db/save', (req, res) => {
  //need to finish
  // var documentObj = {
  //   username:'greg3',
  //     recipe: {
  //       id:1242414,
  //       title:'food',
  //       image:'awsomepic.jpg',
  //       likes:61928469
  //     }
  // }
  db.save(documentObj)
    .then(response => res.send('saved to db'));
});

app.get('/db/fetch', (req, res) => {
  var username = req.query.username
  db.retrieve(username)
    .then(data => {
      console.log(data)
      res.send(data)
    });
});

app.get('/recipes', (req, res) => {
  var ingredients = req.query.ingredients;
  if(ingredients) {
    spoonacularHelpers.getRecipesByIngredients(ingredients)
      .then(data => res.send(data.data))
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