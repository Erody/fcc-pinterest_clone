import React from 'react';
import { Input, Menu, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../actions/auth';


class Navbar extends React.Component {

	state = {
		activeItem: 'home'
	};

	handleItemClick = (e, { name }) => {
		this.setState({ activeItem: name });
		if(name === 'logout') {
			this.props.logout();
		}
	};

	render() {
		const { activeItem } = this.state;
		const { isAuthenticated } = this.props.auth;

		const userLinks = (
			<Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
		);

		const guestLinks = (
			<Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick}>
				<NavLink className={'link_black'} to="/Login" exact>Login</NavLink>
			</Menu.Item>
		);

		return (
			<Menu secondary>
				<Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} >
					<NavLink className={'link_black'} to="/" exact>Home</NavLink>
				</Menu.Item>
				<Menu.Item name='pictures' active={activeItem === 'pictures'} onClick={this.handleItemClick}>
					<NavLink className={'link_black'} to="/pictures" exact>Pictures</NavLink>
				</Menu.Item>
				<Menu.Menu position='right'>
					{isAuthenticated ? userLinks : guestLinks}
				</Menu.Menu>
			</Menu>
		)
	}
}

function mapStateToProps(state) {
	return {
		auth: state.auth
	}
}

export default connect(mapStateToProps, {logout})(Navbar);