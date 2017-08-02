import { SET_IMAGES } from '../typeExports';

export default function (state = [], action = {}) {
	switch(action.type) {
		case SET_IMAGES:
			return {imageList: action.images};
		default: return state;
	}
}