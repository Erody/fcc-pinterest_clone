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

// todo - USER
	// todo - User can delete images
	// todo - broken links will be replaced by a placeholder image

// todo - AUTH
	// todo - Check if user is authenticated server side upon page reload
