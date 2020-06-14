import { API_URL } from '../constants';
import { request } from '../../libs/apiCall/ApiCall';

export const getMovies = function getMovies(queryParams) {
	return {
		type: 'GET_MOVIES',
		queryParams,
	};
};

export const getMovie = function getMovie(movie_id) {
	return {
		type: 'GET_MOVIE',
		movie_id,
	};
};

export const getMoviesList = () => {
	const link = '/lists/estrenos-imprescindibles-en-taquilla?classification_id=5&device_identifier=web&locale=es&market_code=es';
	const params = {};
	return (dispatch) => {
		axios.GET(`${API_URL}${link}`, params)
			.then((response) => {
				dispatch({
					type: 'GET_MOVIES_LIST',
					moviesList: response.data,
				});
			})
			.catch((error) => {
				dispatch({
					type: 'GET_MOVIES_LIST_ERROR',
					errorMessage: error,
				});
			});
	};
};
