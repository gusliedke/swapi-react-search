import React, { Component } from 'react';

class Person extends Component {

	render() {

		return (
			<div>
				Hi, my name is {this.props.name} and I was born in {this.props.age}.
			</div>
		)

	}

}

export default Person;
