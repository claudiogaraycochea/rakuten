import { connect } from 'react-redux';

import { getMovies } from '../../store/movie/MovieActions';

import Home from './Home';

const mapStateToProps = (state) => {
	return {
		// device: state.default.system.device,
		fullData: state.default.movie.fullData,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setHeaderTitle: (headerTitle) => {
			dispatch(setHeaderTitle(headerTitle));
		},
		getMovies: () => {
			dispatch(getMovies());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
