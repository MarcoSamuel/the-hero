import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // módulo baixado reacti-router-dom
// BrowserRouter precisa para todo roteamento funcionar
import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncidents from './pages/NewIncident';
export default function Routes(){
	return(
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Logon} />
				<Route path="/register" component={ Register } />
				<Route path="/profile" component={ Profile } />
				<Route path="/incidents/new" component={ NewIncidents } />
			</Switch>
		</BrowserRouter>
	);
}