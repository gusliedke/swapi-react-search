import React, { Component } from 'react';

class Person extends Component {

	render() {
		return (
			<div className="star-wars-search__info">
				<h2 className="visually-hidden">Character information</h2>
				<p>Hi, my name is {this.props.name} and I was born in {this.props.age}.</p>
			</div>
		)
	}

}

export default Person;