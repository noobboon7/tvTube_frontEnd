import React from 'react';
import './App.css';
import  MainContent from './components/MainContent';
import  NavBar from './components/NavBar';
import Login from './components/Login';
import Playlist from './components/Playlist';
import { Route, Switch } from 'react-router';



class App extends React.Component {
  state = {
    tvData:[],
    playlist:[],
    showSearch:"",
    user:"",
    loggedIn: true,
    page: "home"
  }
  componentDidMount() {
    fetch("http://localhost:3000/tvshows")
    .then(res => res.json())
    .then(showData =>{
        this.setState({
        tvData:showData
      })
    })
  }


  currentUser =(event) => {
    this.setState({
      user: event.target.value
    })
  }
  AddtoPlaylist = (tvshow) => {
     this.setState({
       playlist: [...this.state.playlist, tvshow]
     })
  }
  handleLogIn= (bool) => {
    console.log(bool);
    this.setState({
      loggedIn: bool
    })
  }

  render() {
    return (

      <div className="App" >

      {this.state.loggedIn?
        <div  className="App-header">
          <NavBar user={this.state.user} playlist={this.state.playlist}/>
          <Switch>
          <Route path='/playlist' render={(routerProps) => {
            return <Playlist playlist={this.state.playlist}/>
          }}
          />

          <Route path="/home" render={(routerProps) => {
          return <MainContent
          addTv={this.AddtoPlaylist}
          tvData={this.state.tvData}
          search={this.state.showSearch}/>
        }}/>
          </Switch>
        </div>
        :
        <Login login={this.handleLogIn} user={this.currentUser}/>
      }
      </div>

    )
  }
}

export default App;
