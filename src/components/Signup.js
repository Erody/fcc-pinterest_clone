import React from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { signup } from '../actions/auth';

class Signup extends React.Component {

	state = {
		email: '',
		password: '',
		passwordVerification: '',
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
		const {email, password, passwordVerification} = this.state;
		this.props.signup({email, password, passwordVerification})
			.then(this.context.router.history.push('/login'))
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
						Sign up
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
							<Form.Input
								fluid
								icon='lock'
								iconPosition='left'
								placeholder='Password Verification'
								name="passwordVerification"
								type='password'
								value={this.state.passwordVerification}
								onChange={this.handleChange}
							/>

							<Button color='teal' fluid size='large'>Signup</Button>
						</Segment>
					</Form>
					<Message>
						Already have an account? <a href='/login'>Log In</a>
					</Message>
				</Grid.Column>
			</Grid>
		)
	}
}

Signup.contextTypes = {
	router: React.PropTypes.object.isRequired
};



export default connect(null, {signup})(Signup);