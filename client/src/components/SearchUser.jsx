import React from 'react';

class SearchUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userSearch: ''
    };
    this.onUserSearch = this.onUserSearch.bind(this);
    this.onUserSearchClick = this.onUserSearchClick.bind(this);
  }

  onUserSearch(e) {
    this.setState({
      userSearch: e.target.value
    });
    console.log(this.state.userSearch);
  }

  onUserSearchClick() {
    console.log(this.state.userSearch + ' was searched');
  }

  render() {
    return (
      <div>
        <h5>Friend Search</h5>
        <input value={this.state.userSearch} onChange={this.onUserSearch}/>
        <button 
          onClick={this.onUserSearchClick}> 
          Search
        </button>
      </div>
    );
  }
}

export default SearchUser;