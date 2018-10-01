import React from 'react';
import { render } from 'react-dom';


import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import storeWithMiddleware from './store-config';

import RootApp from './components/index';
import '../style/index.scss';

const Utensil = document.querySelector('.root-dom-container');

render(
	<Provider store={ storeWithMiddleware }>
		<Router>
			<RootApp />
		</Router>
	</Provider>, Utensil
);
