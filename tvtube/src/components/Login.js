import React from 'react';



class Login extends React.Component {

  handleSubmit =(evt) => {
    evt.preventDefault()
    this.props.login(true)
  }

  render(){
    return(

      <form onSubmit={this.handleSubmit}>
        Name: <input onChange={this.props.user} name="username" type="text" placeholder="username" minLength="3" required="required"/>
        <br/>
        <input onClick={this.handleClick} name="submit" type="submit" value="LOGIN"/>
      </form>
    )
  }
}



export default Login;
