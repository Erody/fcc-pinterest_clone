import {SET_IMAGES, UPDATE_IMAGE} from '../typeExports';
import axios from 'axios';

export function setImages(images) {
	return {
		type: SET_IMAGES,
		images
	}
}

export function updateImage(image) {
	return {
		type: UPDATE_IMAGE,
		image
	}
}

export function getImages(filter) {
	return dispatch => {
		return axios.post('/api/images', filter)
			.then(({data}) => {
				dispatch(setImages(data));
			})
	}
}

export function addImage({image, user}) {
	return dispatch => {
		return axios.post('/api/images/addImage', {image, user})
			.then(() => {})
	}
}

export function voteImage(image) {
	return dispatch => {
		return axios.post('/api/images/vote', image)
			.then(({data}) => {
				dispatch(updateImage(data))
			})
	}
}