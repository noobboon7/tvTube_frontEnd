import React from 'react';



class SearchBar extends React.Component {
  state= {
    searchQuery: ""
  }
  handleSubmit = (event) => {
    event.preventDefault()

  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return(
      <div className="ui fluid category search">
        <div className="ui icon input">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} name="searchQuery" className="prompt" type="text" placeholder="Search Shows..."/>
          <i className="search icon"></i>
          </form>
        </div>
          <div className="results"></div>
      </div>
    )
  }
}

export default SearchBar;
