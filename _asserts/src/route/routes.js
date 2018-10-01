import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Assemblage from '../containers/Assemblage';

const RootRoute = () => (
	<Switch>
		<Route exact path='/' component={Assemblage} />
	</Switch>
);

export default RootRoute;
