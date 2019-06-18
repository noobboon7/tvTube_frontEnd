import React from 'react';



class Playlist extends React.Component {
  render() {
    return(
      <div>
        <ol>
        {this.props.playlist.map(show =>
          <li>
          <img src={show.thumbnail} alt={show.name} />
          {show.name}
          </li>)}
        </ol>
      </div>
    )
  }
}

export default Playlist;
