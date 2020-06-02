import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PublicLayout extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<div>Header</div>
				{this.props.children}
				<div>Footer</div>
			</div>
		);
	}
}

PublicLayout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default PublicLayout;