import React from 'react';


var RecipeEntry = (props) => {
  //Creating a conditional here to avoid trying to map an undefined object as a list entry
  if (props.recipe !== undefined) {
  return (
      <div>
        <div> {props.recipe.title} </div>
        <div> <img src={props.recipe.image} alt="" /> </div>
        <div> Likes: {props.recipe.likes} </div>
      </div>
    );
  } else {
    return (<div></div>)
  }
}

export default RecipeEntry;