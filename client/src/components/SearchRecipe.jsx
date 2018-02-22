import React from 'react';

class SearchRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeSearch: ''
    };
  }

  render() {
    return (
      <div>Search Recipe</div>
    );
  }
}

export default SearchRecipe;