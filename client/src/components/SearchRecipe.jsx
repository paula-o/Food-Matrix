import React from 'react';

var SearchRecipe = (props) => {
  return (
    <div>
      <form class="ui form">
        <div class="field">
          <label>Search Recipe</label>
          <input value={props.recipeSearch} name="search-recipe" type="text" onChange={props.onRecipeSearch}/>
        </div>
        <button
          class="ui button"
          onClick={props.onRecipeSearchClick}>
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchRecipe;