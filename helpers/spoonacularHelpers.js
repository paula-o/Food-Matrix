const request = require('request-promise');
const _ = require('lodash')
const axios = require('axios')
var Promise = require("bluebird");

var getRecipesByIngredient = function(ingredients) {
}

var getRecipeByRecipeID = function(recipeID) {
  return axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${recipeID}/information?includeNutrition=false`, {
    headers: {'X-Mashape-Key': 'CPtcvnMkgKmshQbAjey2bnPOdy99p1mLzewjsn0EqLEzlis1jc'}
  });
}

var parseRecipe = function(recipe) {
  return _.map(recipe.extendedIngredients, function(ingredient) {
    return `${ingredient.name} ${ingredient.amount} ${ingredient.unit}`;
  });
}

var getIngredients = function(recipeID) {
  return getRecipeByRecipeID(recipeID)
    .then(response => parseRecipe(response.data))
}



module.exports.getRecipesByIngredient = getRecipesByIngredient;
module.exports.getIngredients = getIngredients;