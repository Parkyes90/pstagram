import React, {Component} from 'react';

class SearchBar extends Component {
  state = { term: '' };

  onInputChange = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  onFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);

  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="">Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              name="term"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
