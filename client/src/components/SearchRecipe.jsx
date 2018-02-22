import React from 'react';

class SearchRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeSearch: ''
    };
    this.onRecipeSearch = this.onRecipeSearch.bind(this);
    this.onRecipeSearchClick = this.onRecipeSearchClick.bind(this);
  }

  onRecipeSearch(e) {
    this.setState({
      recipeSearch: e.target.value
    });
    console.log(this.state.recipeSearch);
  }

  onRecipeSearchClick() {
    console.log(this.state.recipeSearch + ' was searched');
  }

  render() {
    return (
      <div>
        <h5>Search Recipe</h5>
        <input value={this.state.recipeSearch} onChange={this.onRecipeSearch}/>
        <button 
          onClick={this.onRecipeSearchClick}> 
          Search
        </button>
      </div>
    );
  }
}

export default SearchRecipe;