import React from 'react'
import { Card, Button, Icon} from 'semantic-ui-react'
import PropTypes from 'prop-types';
import {voteImage} from '../actions/images';
import { connect } from 'react-redux';


class PictureCard extends React.Component {

    state = {
        likes: this.props.likes,
        dislikes: this.props.dislikes
    };

    handleUpvote = (e) => {
        e.preventDefault();
        this.props.voteImage({id: this.props.id, vote: 'like'})
            .then(() => {
                const index = this.props.images.findIndex(x => x._id === this.props.id);
                this.setState({likes: this.props.images[index].likes})
            });
    };

    handleDownvote = (e) => {
        e.preventDefault();
		this.props.voteImage({id: this.props.id, vote: 'dislike'})
			.then(() => {
				const index = this.props.images.findIndex(x => x._id === this.props.id);
				this.setState({dislikes: this.props.images[index].dislikes})
			});
	};

	render() {

		const extra = (
            <div className='ui two buttons'>
                <Button onClick={this.handleUpvote} basic color='green'><Icon name="thumbs up"/>{this.state.likes}</Button>
                <Button onClick={this.handleDownvote} basic color='red'><Icon name="thumbs down"/>{this.state.dislikes}</Button>
            </div>
		);

		return(
            <Card
                image={this.props.image}
                header={this.props.header}
                description={this.props.description}
                extra={extra}
            />
		)
	}
}

PictureCard.propTypes = {
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
	return {
		images: state.images.imageList
	}
}

export default connect(mapStateToProps, {voteImage})(PictureCard);