import React from 'react';
import {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './Home';
import NewPost from './NewPost';
import Posts from './Posts';
// import FullPost from './FullPost';

const Routes = () => {
	return (
		<Fragment>
			<Switch>
				<Route path = '/' component = {Home} exact />
				<Route path = "/new" component = {NewPost} exact />
				<Route path = "/posts" component = {Posts} exact />
			</Switch>	
		</Fragment>
	)
};

export default Routes;