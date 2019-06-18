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
      <div class="ui fluid category search">
        <div class="ui icon input">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} name="searchQuery" class="prompt" type="text" placeholder="Search Shows..."/>
          <i class="search icon"></i>
          </form>
        </div>
          <div class="results"></div>
      </div>
    )
  }
}

export default SearchBar;
