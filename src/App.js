import React, {Component} from 'react';
import logo from './logo.svg';
import Routes from './components/Routes';
import Navbar from './components/Navbar';
import './App.css';

class App extends Component {
	render() {
		return (
			<div>
				<Navbar/>
				<Routes/>
			</div>
		);
	}
}

export default App;

// todo - ACTIONS:
	// todo - create login/logout/signup actions
	// todo - hook buttons up to their respective actions

// todo - NAVBAR:
	// todo - if user is logged in show logout button
	// todo - if user is not logged in show login button (login page has link to signup page if user has no account)