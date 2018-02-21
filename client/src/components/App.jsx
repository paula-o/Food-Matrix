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

    this.state = {};
  }

  render() {
    return (
      <div>This works!
      
      <FocalRecipe/>

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