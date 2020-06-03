import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/header/Header';

class PublicLayout extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	UNSAFE_componentWillMount() {
		// this.props.getMovies();
	}
	
	render() {
		return (
			<div className="main-app">
				<div className='main-container'>
					{this.props.children}
				</div>
			</div>
		);
	}
}

PublicLayout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default PublicLayout;