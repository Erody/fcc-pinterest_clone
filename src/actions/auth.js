import axios from 'axios';

export function login(data) {
	return dispatch => {
		return axios.post('/api/auth/local/login', data)
			.then(() => {})
	}
}

export function signup(data) {
	return dispatch => {
		return axios.post('/api/auth/local/signup', data)
			.then(() => {})
	}
}