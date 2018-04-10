import React, {Component} from 'react'
import axios from 'axios'

class Bear extends Component {

	constructor(props) {
		super(props)
		this.state = {
			bears : []
		}
	}

	componentDidMount() {
		this.getAllBears()
	}

	getAllBears() {
		axios.get('http://localhost/api/bears')
			.then( (response) => {
				this.setState( {bears: response.data} )
			})
	}

	renderBears() {
		return this.state.bears.map(
			(bear,index) => (<li key={index}>{bear.id}:{bear.name}:{bear.weight}</li>)
		)
	}

	render() {
		return (
			<div>
				<h1> Bear </h1>
				<ul> {this.renderBears()} </ul>
			</div>
		)
	}
}

export default Bear