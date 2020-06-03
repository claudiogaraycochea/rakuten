const initialState = {
	movieList: [],
	errorMessage: '',
};

export default function movie(state = initialState, action) {
	switch (action.type) {
		case 'GET_MOVIES':
			return {
				...state,
				movieList: action.movieList,
			};
		case 'GET_MOVIES_ERROR':
			return {
				...state,
				errorMessage: action.errorMessage,
			};
		default:
			return state;
	}
}
