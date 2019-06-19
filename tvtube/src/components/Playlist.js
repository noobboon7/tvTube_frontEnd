import React from 'react';



class Playlist extends React.Component {
  render() {
    return(
      <div className="ui horizontal list">
        {this.props.playlist.map(show =>
          <div key={show.id} className="item">
          <img src={show.thumbnail} alt={show.name} />
            <div className="content">
              <div className="header">{show.name}</div>
              <button onClick={() => {
                this.props.remove(show)}} className="remove">Remove</button>
            </div>
          </div>
      )}
      </div>

    )
  }
}

export default Playlist;
