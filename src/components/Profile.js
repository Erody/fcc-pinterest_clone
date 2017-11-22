import React from 'react';
import PictureList from './PictureList';
import { connect } from 'react-redux';

class Profile extends React.Component {
	render() {
		return (
			<div>
				<PictureList imageFilter={{owner: this.props.location.pathname.slice(6)}} />
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		auth: state.auth,
	}
}

export default connect(mapStateToProps, null)(Profile);