import React, { Component } from 'react';
import logo from '../star-wars-logo.svg';

class Header extends Component {

	render() {

		return(
			<header>
        <img src={logo} className="star-wars-search__logo" alt="logo" />
        <h1>Star Wars Character Search</h1>
      </header>
		)

	}

}

export default Header;