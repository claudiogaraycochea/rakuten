import mockfullData from './../default.json';
import mockMovieData from './../movie.json';

const initialState = {
	queryParams: {},
	fullData: {},
	errorMessage: '',
};

export default function movie(state = initialState, action) {
	switch (action.type) {
		case 'GET_MOVIES':
			return {
				...state,
				queryParams: action.queryParams,
				fullData: mockfullData,
			};
		case 'GET_MOVIES_ERROR':
			return {
				...state,
				errorMessage: action.errorMessage,
			};
		case 'GET_MOVIE':
			return {
				...state,
				movieId: action.id,
				movieData: mockMovieData,
			};
		case 'GET_MOVIE_ERROR':
			return {
				...state,
				errorMessage: action.errorMessage,
			};
		default:
			return state;
	}
}
