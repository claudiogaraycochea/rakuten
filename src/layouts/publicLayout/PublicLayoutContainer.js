import { connect } from 'react-redux';

// import { setDevice } from '../../store/system/SystemActions';
import { getMovies } from '../../store/movie/MovieActions';

import PublicLayout from './PublicLayout';

const mapStateToProps = function mapState(state) {
	return {
		// device: state.default.system.device,
		fullData: state.default.movie.fullData,
	};
};

const mapDispatchToProps = function mapDispatch(dispatch) {
	return {
		/*setDevice(device) {
			dispatch(setDevice(device));
		},*/
		getMovies: (queryParams) => {
			dispatch(getMovies(queryParams));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PublicLayout);
