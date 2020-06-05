import { connect } from 'react-redux';

import { getMovie } from '../../../store/movie/MovieActions';

import MovieDetail from './MovieDetail';

const mapStateToProps = (state) => {
	return {
		// device: state.default.system.device,
		movieData: state.default.movie.movieData,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setHeaderTitle: (headerTitle) => {
			dispatch(setHeaderTitle(headerTitle));
		},
		getMovie: (movie_id) => {
			dispatch(getMovie(movie_id));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);