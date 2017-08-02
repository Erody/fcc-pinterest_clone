import {SET_IMAGES} from '../typeExports';
import axios from 'axios';

export function setImages(images) {
	return {
		type: SET_IMAGES,
		images
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