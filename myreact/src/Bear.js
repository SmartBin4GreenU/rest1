import React, {Component} from 'react'
import axios from 'axios'

class Bear extends Component {

	renderBears() {
		const request = axios.get('http://localhost/api/bears')
		console.log(request)
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