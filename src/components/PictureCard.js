import React from 'react'
import { Card, Button} from 'semantic-ui-react'
import PropTypes from 'prop-types';

const extra = (
    <div className='ui two buttons'>
        <Button basic color='green'>Like</Button>
        <Button basic color='red'>Dislike</Button>
    </div>
);

const PictureCard = ({image, header,  description}) => {
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