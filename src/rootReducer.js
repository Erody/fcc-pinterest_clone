import {combineReducers} from 'redux';
import auth from './reducers/auth';
import images from './reducers/images';

export default combineReducers({
	auth,
	images,
});