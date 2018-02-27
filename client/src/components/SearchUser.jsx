import React from 'react';

var SearchUser = (props) => {
  return (
    <div class="ui segment">
      <form class="ui form">
        <div class="ui field">
          <div class="ui header small">Friend Search</div>
          <input value={props.userSearch} onChange={props.onUserSearch}/>
        </div>
        <button class="ui fluid blue button"
          onClick={props.onUserSearchClick}>
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchUser;