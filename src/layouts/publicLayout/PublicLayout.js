import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/header/Header';

class PublicLayout extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	UNSAFE_componentWillMount() {
		const queryParams = {
			classification_id: 5,
			device_identifier: 'web',
			locale: 'es',
			market_code: 'es',
		};
		this.props.getMovies(queryParams);
	}
	
	render() {
		const { children} = this.props;
		return (
			<div className="main-app">
				<Header/>
				<div className='main-container' props={this.props}>
					{children}
				</div>
			</div>
		);
	}
}

PublicLayout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default PublicLayout;