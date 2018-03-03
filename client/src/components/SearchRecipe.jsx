import React from 'react';

const style = {
  backgroundColor: "#88C057"
}

var SearchRecipe = (props) => {
  return (
    <div class="ui segment">
      <form class="ui form">
        <div class="field">
          <div class="ui header small">Search Recipe</div>
          <input value={props.recipeSearch} name="search-recipe" type="text" onChange={props.onRecipeSearch}/>
        </div>
          <button
            style={style}
            class="ui button"
            onClick={props.onRecipeSearchClick}>
            Search
          </button>
      </form>
    </div>
  );
}

export default SearchRecipe;