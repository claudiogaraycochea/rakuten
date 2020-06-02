import React, { Suspense } from 'react';
import '../rakutenUI/RakutenUI.css';
import Router from '../routes/Router';

function App() {
	return (
		<Suspense fallback="loading">
			<div className='App'>
				<Router />
			</div>
		</Suspense>
	);
}

export default App;
