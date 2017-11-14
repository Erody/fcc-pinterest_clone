import React from 'react';
import {  Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { login } from '../actions/auth';

class Login extends React.Component {

	state = {
		email: '',
		password: '',
		loading: false,
	};

	componentWillMount = () => {
		document.body.classList.add('login')
	};

	componentWillUnmount = () => {
		document.body.classList.remove('login')
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({loading: true});
		const {email, password} = this.state;
		this.props.login({email, password});
	};

	render() {
		return (
			<Grid
				textAlign='center'
				style={{ height: '100%' }}
				verticalAlign='middle'
			>
				<Grid.Column style={{ maxWidth: 450 }}>
					<Header as='h2' color='teal' textAlign='center'>
						Log-in to your account
					</Header>
					<Form size='large' onSubmit={this.handleSubmit}>
						<Segment stacked>
							<Form.Input
								fluid
								name="email"
								icon='user'
								iconPosition='left'
								placeholder='E-mail address'
								value={this.state.email}
								onChange={this.handleChange}
							/>
							<Form.Input
								fluid
								icon='lock'
								iconPosition='left'
								placeholder='Password'
								name="password"
								type='password'
								value={this.state.password}
								onChange={this.handleChange}
							/>

							<Form.Button loading={this.state.loading} color='teal' fluid size='large'>Login</Form.Button>
						</Segment>
					</Form>
					<Message>
						New to us? <a href='/signup'>Sign Up</a>
					</Message>
				</Grid.Column>
			</Grid>
		)
	}
}



export default connect(null, {login})(Login);