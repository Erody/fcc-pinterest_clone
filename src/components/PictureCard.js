import React from 'react'
import { Card, Button, Icon} from 'semantic-ui-react'
import PropTypes from 'prop-types';



const PictureCard = ({image, header,  description, likes, dislikes}) => {

	const extra = (
        <div className='ui two buttons'>
            <Button basic color='green'><Icon name="thumbs up"/>{likes}</Button>
            <Button basic color='red'><Icon name="thumbs down"/>{dislikes}</Button>
        </div>
	);

    return(
        <Card
            image={image}
            header={header}
            description={description}
            extra={extra}
        />
    )
};

PictureCard.propTypes = {
    image: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default PictureCard;