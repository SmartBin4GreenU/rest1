import React, {Component} from 'react'
import {fetchBears} from './actions'
import {connect} from 'react-redux'

// Source code:  https://gist.github.com/wwarodom/f27e0903ed3a12cd2360dea88d53c295

class Bear extends Component {

	// constructor(props) {
	// 	super(props)
	// 	this.state = {
	// 		bears : []
	// 	}
	// }

	componentDidMount() {
		// this.getAllBears()
		this.props.fetchBears()
	}
    //
	// getAllBears() {
	// 	axios.get('http://localhost/api/bears')
	// 		.then( (response) => {
	// 			this.setState( {bears: response.data} )
	// 		})
	// }

	renderBears() {
		if ( Object.keys(this.props.bears).length !== 0 )
			return this.props.bears.map(
				(bear,index) =>
					(<li key={index}>{bear.id}:{bear.name}</li>)
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

function mapStateToProps (state) {
	return {bears: state.bears}
}

export default connect (mapStateToProps,{fetchBears})(Bear)