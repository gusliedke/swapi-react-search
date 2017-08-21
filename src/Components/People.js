import React, { Component } from 'react';
import Person from './Person'

class People extends Component {

	static defaultProps = {
    data: []
  }

	render() {
		
		return (
			<div>
						{ this.props.data.map((person) => { 
						return <Person name={person.name} age={person.birth_year}/>; }) }
			</div>
		)

	}

}



export default People;
