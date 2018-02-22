import React from 'react';

class SearchUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userSearch: ''
    };
  }

  render() {
    return (
      <div>Search User</div>
    );
  }
}

export default SearchUser;