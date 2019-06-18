import React from 'react';
import TvCard from './TvCard';

class MainContent extends React.Component {
  render() {
    return(
      this.props.tvData.map(info => {
        return <div key={info.id} className="ui items">
        <TvCard
        addTv={this.props.addTv}
        tv={info}/>
        </div>

      })
    )

  }
}

export default MainContent;
