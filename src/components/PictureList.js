import React from 'react';
import PictureCard from './PictureCard';

class PictureList extends React.Component {
	render() {
		return (
			<div>
				<PictureCard image='https://i.redd.it/qip4oq3tmccz.jpg' description='Nicole Aniston being sexy' header='Noice'/>
			</div>
		)
	}
}


export default PictureList;