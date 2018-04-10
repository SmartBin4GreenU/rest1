import React, {Component} from 'react'
import axios from 'axios'

class Bear extends Component {

	constructor(props) {
		super(props)
		this.state = {
			bears : []
		}
	}

	getAllBears() {
		axios.get('http://localhost/api/bears')
			.then( (response) => {
				this.setState( {bears: response.data} )
			})
	}

	renderBears() {
		return this.state.bears.map(
			(bear) => (<div>{bear.name}</div>)
		)
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