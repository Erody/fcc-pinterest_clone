import { SET_IMAGES, UPDATE_IMAGE } from '../typeExports';

export default function (state = [], action = {}) {
	switch(action.type) {
		case SET_IMAGES:
			return {imageList: action.images};
		case UPDATE_IMAGE:
			const index = state.imageList.findIndex(x => x.id === action.image._id);
			const newState = state;
			newState.imageList[index] = action.image.image;
			return newState;
		default: return state;
	}
}