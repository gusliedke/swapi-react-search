import React, { Component } from 'react';
import Person from './Person'

class People extends Component {

	render() {
		return (
			<section>
				{ this.props.data.map((person) => { 
				return <Person name={person.name} age={person.birth_year}/>; }) }
			</section>
		)
	}
}

export default People;