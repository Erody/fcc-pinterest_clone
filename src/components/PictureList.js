import React from 'react';
import PictureCard from './PictureCard';
import { Card, Grid } from 'semantic-ui-react'
import Masonry from 'react-masonry-component';
import { connect } from 'react-redux';
import { getImages } from '../actions/images';

class PictureList extends React.Component {

	componentWillMount = () => {
		if(this.props.imageFilter) {
			this.props.getImages(this.props.imageFilter);
		} else {
			this.props.getImages({});
		}
	};

	render() {

		const images = this.props.images ?
			this.props.images.map(image => {
				return (
					<PictureCard key={image._id} id={image._id} image={image.url} header={image.header} description={image.description} likes={image.likes} dislikes={image.dislikes} owner={image.owner}/>
				);
			}) : '';

		return (
			<div>
				<Masonry options={{isFitWidth: true, stagger: 30, gutter: 10}} className="masonry">
					{images}
				</Masonry>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		images: state.images.imageList
	}
}

export default connect(mapStateToProps, {getImages})(PictureList);