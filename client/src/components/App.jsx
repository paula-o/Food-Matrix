import React from 'react';
import $ from 'jquery';

import AllRecipesList from './AllRecipesList.jsx';
import FavoritesList from './FavoritesList.jsx';
import SearchRecipe from './SearchRecipe.jsx';
import FocalRecipe from './FocalRecipe.jsx';
import RecipeEntry from './RecipeEntry.jsx';
import SearchUser from './SearchUser.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeList: [], //array of all recipes that come back from search
      favoriteList: [], //array of recipes associated with a user
      focalRecipe: {}, //object that contains recipe url, image, includes recipe ingredients


    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>This works!
      
      <FocalRecipe
      focalRecipe = {this.state.focalRecipe};
      />

      <SearchRecipe/>

      <SearchUser/>

      <FavoritesList/>

      <AllRecipesList/>

      <RecipeEntry/>

      </div>
    );
  }
}

export default App;