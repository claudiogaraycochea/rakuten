import { connect } from 'react-redux';
import { getMovies } from '../../store/movie/MovieActions';
import Home from './Home';

const mapStateToProps = (state) => {
	return {
		fullData: state.default.movie.fullData,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getMovies: () => {
			dispatch(getMovies());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
