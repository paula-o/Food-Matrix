import React from 'react';
import RecipeEntry from './RecipeEntry.jsx';

var FavoritesList = (props) => {
  return (
    <div>
      <h3>Favorites List</h3>
      {props.favoriteList.map((recipe) =>
        <ul>
          <RecipeEntry recipe={recipe} 
          onRecipeClick = {props.onRecipeClick}
          />
        </ul>
      )}
    </div>
  );
}

export default FavoritesList;