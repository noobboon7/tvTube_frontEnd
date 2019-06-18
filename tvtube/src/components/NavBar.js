import React from 'react';
import SearchBar from './SearchBar';

import { Link, withRouter } from 'react-router-dom'


class NavBar extends React.Component {
  render() {
    return(
      <>
      <h1>Welcome Back {this.props.user}!</h1>
      <div  className="ui top attached tabular menu">
        <Link to="/home">
        <button className="item active" data-tab="home">Home</button>
        </Link>
        <Link to="/playlist">
        <button className="item active" data-tab="playlist">Playlist</button>
        </Link>
        <button onClick={this.props.logout} type="button">LOGOUT</button>
        <SearchBar/>
      </div>
      </>
    )
  }
}

export default withRouter(NavBar);
