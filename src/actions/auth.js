import axios from 'axios';

import {SIGNUP_SUCCESS, SET_CURRENT_USER} from '../typeExports';

export function setCurrentUser(user) {
	return {
		type: SET_CURRENT_USER,
		user
	}
}

export function login(data) {
	return dispatch => {
		return axios.post('/api/auth/local/login', data)
			.then(({data}) => {
				dispatch(setCurrentUser(data));
			})
	}
}

export function signup(data) {
	return dispatch => {
		return axios.post('/api/auth/local/signup', data)
			.then(() => {})
	}
}