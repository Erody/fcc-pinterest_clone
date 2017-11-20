import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


export default function(ComposedComponent) {
	class Authorization extends React.Component {

		render() {
			return (
				this.props.auth.isAuthenticated ?
				<ComposedComponent {...this.props}/> :
				<Redirect to="/login" />
			)
		}
	}

	function mapStateToProps(state) {
		return {
			auth: state.auth,
		}
	}

	return connect(mapStateToProps, null)(Authorization);
}