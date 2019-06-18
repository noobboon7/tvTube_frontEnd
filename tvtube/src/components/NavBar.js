import React from 'react';
import SearchBar from './SearchBar';
import Login from './Login';


class NavBar extends React.Component {
  render() {
    return(
      <div Stylte= "flex-box">
      
      <Login login={this.props.login}/>
      <SearchBar/>
      </div>
    )
  }
}

export default NavBar;
