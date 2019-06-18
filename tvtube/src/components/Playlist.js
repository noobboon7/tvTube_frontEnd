import React from 'react';



class Playlist extends React.Component {
  render() {
    return(
      <div>
        <ol>
        {this.props.playlist.map(show =>

          <li key={show.id}>
          <img src={show.thumbnail} alt={show.name} />
          {show.name}
          <button onClick={() => {
            this.props.remove(show)}} className="remove">Remove</button>
          </li>)}
        </ol>
      </div>
    )
  }
}

export default Playlist;
