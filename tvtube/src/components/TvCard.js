import React from 'react';


class TvCard extends React.Component {


  handleClick = (event) => {
    this.props.addTv(this.props.tv)
  }

  render() {
    const {name,poster,genre,id,runtime,summary}= this.props.tv
    return(
      <div  id= {id} class="item">
        <div class="ui small image">
          <img src={poster} alt={name} />
          <button class="ui button" onClick={this.handleClick}>AddtoPlaylist</button>
        </div>
        <div class="middle aligned content">
           <div class="header">
             {name}
           </div>
           <div class="description">
             {summary}
           </div>
           <div>
            <h6 className="runtime">Runtime:{runtime}</h6>
            <h6 className="genre">Genres:{genre} Runtime:{runtime}</h6>
           </div>
         </div>
      </div>
    )
  }
}

export default TvCard;
