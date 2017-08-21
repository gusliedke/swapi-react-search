import React, { Component } from 'react';
import axios from 'axios';
import {Typeahead, AsyncTypeahead} from 'react-bootstrap-typeahead';
import Header from './Components/Header';
import People from './Components/People';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      allowNew: false,
      multiple: false,
      options: [],
      person: [],
    };

    this._handleChange = this._handleChange.bind(this);
  }

  render() {
    return (
      <div className="star-wars-search">
        <Header />
        <AsyncTypeahead
          onSearch={this._handleSearch}
          onChange={this._handleChange}
          className="star-wars-search__form"
          labelKey="name"
          placeholder="Search for a Character..."
          renderMenuItemChildren={this._renderMenuItemChildren}
          options={this.state.options}
        />
        <People data={this.state.person} />
      </div>
    );
  }

  _handleSearch = query => {
    if (!query) {
      return;
    }
    axios.get(`https://swapi.co/api/people/?search=${query}`)
    .then(response => this.setState({options: response.data.results}))
    .catch(error => {
      console.log('error fetching', error);
    })
  }

  _renderMenuItemChildren(option, id, index) {
    return (
      <div key={option.index}>
        <span>{option.name}</span>
      </div>
    );
  }

  _handleChange(data) {
    this.setState({
      person: data,
    })
  }

}

export default App;
