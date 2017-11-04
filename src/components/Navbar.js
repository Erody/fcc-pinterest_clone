import React from 'react';
import { Input, Menu, Button } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {

	state = {
		activeItem: 'home'
	};

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;

		return (
			<Menu secondary>
				<Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} >
					<NavLink className={'link_black'} to="/" exact>Home</NavLink>
				</Menu.Item>
				<Menu.Item name='pictures' active={activeItem === 'pictures'} onClick={this.handleItemClick}>
					<NavLink className={'link_black'} to="/pictures" exact>Pictures</NavLink>
				</Menu.Item>
				<Menu.Menu position='right'>
					<Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
					<Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick}>
						<NavLink className={'link_black'} to="/Login" exact>Login</NavLink>
					</Menu.Item>
				</Menu.Menu>
			</Menu>
		)
	}
}

export default Navbar;