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
    loggedIn: false,
    page: "/"
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

  // filterSearch =() => {
  //
  // }
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
  removeFromPlaylist = (showObj) => {
    this.setState({
      playlist: this.state.playlist.filter(show => show.id !== showObj.id)
    })
  }
  handleLogIn= (bool) => {
    this.setState({
      loggedIn: bool
    })
  }

  logOut = () => {
    this.setState({
      loggedIn: false
    })
  }

  render() {
    return (

      <div className="App" >

      {this.state.loggedIn?
        <div  className="App-header">
          <NavBar user={this.state.user}
          playlist={this.state.playlist}
          logout={this.logOut}
          search={this.state.showSearch}/>
          <Switch>
          <Route path='/playlist' render={(routerProps) => {
            return <Playlist remove={this.removeFromPlaylist} playlist={this.state.playlist}/>
          }}
          />

          <Route path="/home" render={(routerProps) => {
          return <MainContent
          addTv={this.AddtoPlaylist}
          tvData={this.state.tvData}/>
        }}/>
          <Route path="/" render={() => {
            return <><h1>TVTUBE</h1> <img src="./Tv.jpeg" alt="TVTUBE" /></>
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
