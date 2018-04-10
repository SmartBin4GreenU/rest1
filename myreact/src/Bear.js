import React, {Component} from 'react'
import axios from 'axios'

class Bear extends Component {

	renderBears() {
		axios.get('http://localhost/api/bears')
			.then( (response) => console.log(response) )
		return ( <div>Bear 1</div> )
	}

	render() {
		return (
			<div>
				<h1> Bear </h1>
				<div> {this.renderBears()} </div>
			</div>
		)
	}
}

export default Bear