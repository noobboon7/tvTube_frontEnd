import React from 'react';



class Login extends React.Component {

  handleSubmit =(evt) => {
    evt.preventDefault()
    this.props.login(true)
  }

  render(){
    return(
      <div className="loginPage">
      <div className="ui form">
      <h1 className="log">LOGIN</h1>
      <form onSubmit={this.handleSubmit}>
        <div className="required field">
          <label>Name</label>
            <input onChange={this.props.user} name="username" type="text" placeholder="username" minLength="3" required="required"/>
            <br/>
            <br/>
            <div className="blue ui button">
            <input className="blue ui button" onClick={this.handleClick} name="submit" type="submit" value="LOGIN" />
            <i class="sign in alternate icon"></i>
            </div>
          </div>
        </form>
      </div>
      </div>
    )
  }
}



export default Login;
