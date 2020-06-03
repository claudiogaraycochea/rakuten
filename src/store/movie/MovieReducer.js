import mockfullData from './../default.json';

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
		default:
			return state;
	}
}
