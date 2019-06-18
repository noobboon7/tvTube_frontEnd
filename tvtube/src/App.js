import React from 'react';
import './App.css';
import  MainContent from './components/MainContent';
import  NavBar from './components/NavBar';

class App extends React.Component {
  state = {
    tvData:[],
    playlist:[],
    showSearch:"",
    user:"",
    loggedIn: false
  }
  componentDidMount() {
    fetch("http://localhost:3000/tvshows")
    .then(res => res.json())
    .then(showData =>{
      console.log(showData);
        this.setState({
        tvData:showData
      })
    })
  }

  AddtoPlaylist = (tvshow) => {
     this.setState({
       playlist: [...this.state.playlist, tvshow]
     })
  }
handleLogIn= (bool) => {
  this.setState({
    loggedIn: bool
  })
}

  render() {
    console.log(this.state.playlist);
    return (
      <div className="App" >

        <div  className="App-header">
          <NavBar user={this.state.user}
          login={this.handleLogIn}/>
          <MainContent
          addTv={this.AddtoPlaylist}
          tvData={this.state.tvData}
          search={this.state.showSearch}/>
        </div>
      </div>
    )
  }
}

export default App;
