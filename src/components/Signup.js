import React from 'react';
import { Button, Form, Grid, Header, Message, Segment, List } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { signup } from '../actions/auth';
import isEmpty from 'lodash/isEmpty'

class Signup extends React.Component {

	state = {
		email: '',
		password: '',
		passwordVerification: '',
		errors: {},
	};

	componentWillMount = () => {
		document.body.classList.add('login')
	};

	componentWillUnmount = () => {
		document.body.classList.remove('login')
	};

	handleChange = (e) => {
		const errors = this.state.errors;
		delete errors[e.target.name];
		this.setState({
			[e.target.name]: e.target.value,
			errors,
		})
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const {email, password, passwordVerification} = this.state;
		this.props.signup({email, password, passwordVerification})
			.then(() => this.context.router.history.push('/login'))
			.catch(err => {
				const errors = err.response.data;
				this.setState({errors});
			});
	};

	render() {
		const errorMessages = !isEmpty(this.state.errors) ? (
			<List bulleted>
				{Object.keys(this.state.errors).map(key => <List.Item>{this.state.errors[key]}</List.Item>)}
			</List>
		) : undefined;
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
					<Form size='large' onSubmit={this.handleSubmit} error={!isEmpty(this.state.errors)}>
						<Segment stacked>
							<Form.Input
								fluid
								name="email"
								icon='user'
								iconPosition='left'
								placeholder='E-mail address'
								value={this.state.email}
								onChange={this.handleChange}
								error={this.state.errors.email}
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
								error={this.state.errors.password}
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
								error={this.state.errors.passwordVerification}
							/>

							<Button color='teal' fluid size='large'>Signup</Button>

							<Message
								error
								header='Error'
								content={errorMessages}
							/>
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