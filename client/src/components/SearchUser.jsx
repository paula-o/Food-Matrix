import React from 'react';

const style = {
  backgroundColor: "#88C057"
}

var SearchUser = (props) => {
  return (
    <div class="ui segment">
      <form class="ui form">
        <div class="ui field">
          <div class="ui header small">Friend Search</div>
          <input value={props.userSearch} onChange={props.onUserSearch}/>
        </div>
        <button class="ui button"
          style= {style}
          onClick={props.onUserSearchClick}>
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchUser;