import React from 'react';


class TvCard extends React.Component {


  handleClick = (event) => {
    this.props.addTv(this.props.tv)
  }

  render() {
    const {name,poster,genre,id,runtime,summary}= this.props.tv
    return(
      <div  id= {id} className="item">
        <div className="ui small image">
          <img src={poster} alt={name} />
          <button className="ui button" onClick={this.handleClick}>AddtoPlaylist</button>
        </div>
        <div className="middle aligned content">
           <div className="header">
             {name}
           </div>
           <div className="description">
             {summary}
           </div>
           <div>
            <h6 className="runtime">Runtime:{runtime}</h6>
            <h6 className="genre">Genres:{genre}</h6>
           </div>
         </div>
      </div>
    )
  }
}

export default TvCard;
