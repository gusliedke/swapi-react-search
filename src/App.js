import React, { Component } from 'react';
import axios from 'axios';
import logo from './star-wars-logo.svg';
import {Typeahead, AsyncTypeahead} from 'react-bootstrap-typeahead';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      allowNew: false,
      multiple: false,
      options: [],
    };
  }

  render() {
    return (
      <div className="star-wars-search">
        <header>
          <img src={logo} className="star-wars-search__logo" alt="logo" />
          <h1>Star Wars Character Search</h1>
        </header>
        <AsyncTypeahead
          onSearch={query => (
            axios.get(`https://swapi.co/api/people/?search=${query}`)
            .then(response => this.setState({options: response.data.results}))
            .catch(error => {
              console.log('error fetching', error);
            })
          )}
          onChange={this._handleChange}
          className="star-wars-search__form"
          labelKey="name"
          placeholder="Search for a Character..."
          renderMenuItemChildren={this._renderMenuItemChildren}
          options={this.state.options}
        />
        {this._handleChange()}
      </div>
    );
  }

  _renderMenuItemChildren(option, id, index) {
    return (
      <div key={option.index}>
        <span>{option.name}</span>
      </div>
    );
  }

  _handleChange(option) {
    return (
      console.log(option),
      <p>load</p>
    );
  }

  _handleChange = e => {
    const {name} = e.target;
    console.log(name);
  }

}

export default App;
