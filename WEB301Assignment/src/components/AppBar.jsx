import React, { Component } from 'react';

//Material UI Components:
import AppBarUi from '@material-ui/core/AppBar';
import AppBarStyles from './css/AppBar.module.css';
import Toolbar from '@material-ui/core/Toolbar';

class AppBar extends Component {
	state = {};
	render() {
		return (
			<div>
				<AppBarUi className={AppBarStyles.appBar}>
					<Toolbar>
						<img src={require('../assets/counterLogo.png')} alt="appBarImg" />
					</Toolbar>
				</AppBarUi>
			</div>
		);
	}
}

export default AppBar;
