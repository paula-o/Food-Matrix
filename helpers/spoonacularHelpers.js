const request = require('request-promise');
const _ = require('lodash');
const axios = require('axios');
var Promise = require("bluebird");

var getRecipesByIngredients = function(ingredients) {
  ingredients = ingredients.split(',').join('%2C');
  return axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=${ingredients}&limitLicense=false&number=10&ranking=1`, {
    headers: {
      'X-Mashape-Key': process.env.X_MASHAPE_KEY
      },
  });
};

var getRecipeByRecipeID = function(recipeID) {
  return axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${recipeID}/information?includeNutrition=false`, {
    headers: {'X-Mashape-Key': process.env.X_MASHAPE_KEY}
  });
};

var parseRecipe = function(recipe) {
  return _.map(recipe.extendedIngredients, function(ingredient) {
    return `${ingredient.name} ${ingredient.amount} ${ingredient.unit}`;
  });
};

var getIngredients = function(recipeID) {
  return getRecipeByRecipeID(recipeID)
    .then(response => parseRecipe(response.data))
};



module.exports.getRecipesByIngredients = getRecipesByIngredients;
module.exports.getIngredients = getIngredients;