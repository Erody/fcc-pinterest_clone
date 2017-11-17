import React from 'react';
import { connect } from 'react-redux';
import {  Form, Grid, Header, Message, Segment, Image } from 'semantic-ui-react'
import { addImage } from '../actions/images';


class AddImage extends React.Component {

	state = {
		imageLink: '',
		header: '',
		description: '',
		error: {},
		loading: false,
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	};

	handleSubmit = (e) => {
		e.preventDefault();

		this.setState({loading: true});

		const image = {
			imageLink: this.state.imageLink,
			description: this.state.description,
			header: this.state.header,
		};

		this.props.addImage({image})
			.then(() => {
				this.context.router.history.push('/')
			})
			.catch(err => {
				this.setState({error: {message: err.response.data.errors.global}})
			})
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
						Link to an image
					</Header>
					<Form size='large' onSubmit={this.handleSubmit} error={!!this.state.error.message}>
						<Segment stacked>
							<Form.Input
								fluid
								name="imageLink"
								icon='image'
								iconPosition='left'
								placeholder='Image URL'
								value={this.state.imageLink}
								onChange={this.handleChange}
							/>

							<Form.Input
								fluid
								name="header"
								icon='newspaper'
								iconPosition='left'
								placeholder='Header'
								value={this.state.header}
								onChange={this.handleChange}
							/>

							<Form.Input
								fluid
								name="description"
								icon='comment'
								iconPosition='left'
								placeholder='Description'
								value={this.state.description}
								onChange={this.handleChange}
							/>

							<Image src={this.state.imageLink} fluid />

							<Form.Button loading={this.state.loading} color='teal' fluid size='large'>Submit</Form.Button>

							<Message
								error
								header='Error'
								content={this.state.error.message}
							/>
						</Segment>
					</Form>
				</Grid.Column>
			</Grid>
		)
	}
}

AddImage.contextTypes = {
	router: React.PropTypes.object.isRequired
};

export default connect(null, {addImage})(AddImage);