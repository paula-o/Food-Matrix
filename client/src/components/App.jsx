import React from 'react';
import $ from 'jquery';

import AllRecipesList from './AllRecipesList.jsx';
import FavoritesList from './FavoritesList.jsx';
import SearchRecipe from './SearchRecipe.jsx';
import FocalRecipe from './FocalRecipe.jsx';
import RecipeEntry from './RecipeEntry.jsx';
import SearchUser from './SearchUser.jsx';
//import recipeObj from '../../../database-mongo/RecipeListData.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: '',
      recipeList: recipeObj.fakeRecipes, 
      favoriteList: favoriteRecipes.fakeRecipes, 
      focalRecipe: sampleRecipe, 
    };
    this.onRecipeClick = this.onRecipeClick.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
  }

  // componentDidMount() {
  //   $.ajax({
  //     method: 'GET',
  //     url: '/', 
  //     success: (res) => {
  //       this.setState({
  //         recipeList: res.recipeList,
  //         favoriteList: res.favoriteList,
  //         focalRecipe: res.recipeList[0]
  //       });
  //     },
  //     error: (err) => {
  //       console.log('get request failed');
  //     }
  //   });
  // }

  onRecipeClick (recipe) {
    this.setState({
      focalRecipe: recipe
    });
  }

  addFavorite (recipe) {
    console.log('added to favorites');
    //post request to server
    //data: {user: '', recipe: ID}
  }

  render() {
    return (
      <div>

      <FocalRecipe
      focalRecipe = {this.state.focalRecipe}
      recipeList = {this.state.recipeList}
      addFavorite = {this.addFavorite}
      />

      <SearchRecipe/>

      <SearchUser/>

      <FavoritesList
      favoriteList = {this.state.favoriteList}
      />

      <AllRecipesList
      onRecipeClick = {this.onRecipeClick}
      recipeList = {this.state.recipeList}
      />

      <RecipeEntry/>

      </div>
    );
  }
}


//sample data to render

var favoriteRecipes = {fakeRecipes: [
    {
        "id": 933310,
        "title": "2 Ingredient Instant Pot Applesauce",
        "image": "https://spoonacular.com/recipeImages/933310-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 1,
        "missedIngredientCount": 0,
        "likes": 0
    },
    {
        "id": 936707,
        "title": "Dried Apples",
        "image": "https://spoonacular.com/recipeImages/936707-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 1,
        "missedIngredientCount": 1,
        "likes": 265
    },
]}

var recipeObj = {fakeRecipes: [
    {
        "id": 933310,
        "title": "2 Ingredient Instant Pot Applesauce",
        "image": "https://spoonacular.com/recipeImages/933310-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 1,
        "missedIngredientCount": 0,
        "likes": 0
    },
    {
        "id": 936707,
        "title": "Dried Apples",
        "image": "https://spoonacular.com/recipeImages/936707-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 1,
        "missedIngredientCount": 1,
        "likes": 265
    },
    {
        "id": 721001,
        "title": "Apple Fruit Baskets",
        "image": "https://spoonacular.com/recipeImages/721001-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 1,
        "missedIngredientCount": 2,
        "likes": 45
    },
    {
        "id": 65597,
        "title": "Cinnamon Streusel Muffins",
        "image": "https://spoonacular.com/recipeImages/65597-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 1,
        "missedIngredientCount": 2,
        "likes": 0
    },
    {
        "id": 163949,
        "title": "Pork Chops with Apples and Sage",
        "image": "https://spoonacular.com/recipeImages/163949-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 1,
        "missedIngredientCount": 2,
        "likes": 0
    }
]}


var sampleRecipe = {
  "id": 65597,
  "title": "Cinnamon Streusel Muffins",
  "image": "https://spoonacular.com/recipeImages/65597-312x231.jpg",
  "likes": 0,
  "ingredients": ['ingredient1', 'ingredient2', 'ingredient3', 'ingredient4', 'ingredient5','ingredient6', 'ingredient7', 'ingredient8']
}

export default App;