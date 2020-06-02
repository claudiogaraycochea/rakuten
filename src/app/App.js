import React, { Suspense } from 'react';
import '../rakutenUI/Normalize.css';
import '../rakutenUI/RakutenUI.css';
import Router from '../routes/Router';

function App() {
	return (
		<Suspense fallback="loading">
			<div className='app'>
				<Router />
			</div>
		</Suspense>
	);
}

export default App;
