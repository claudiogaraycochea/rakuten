import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

class PublicLayout extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="main-app">
				<Header/>
				<div className='container'>
					{this.props.children}
					<Footer/>
				</div>
			</div>
		);
	}
}

PublicLayout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default PublicLayout;