import React, { Component } from 'react';
import styles from './css/counterbar.module.css';

//UI Components:
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
//MaterialUIButton:

import IconButton from '@material-ui/core/IconButton';
import ArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import '@material/react-icon-button/dist/icon-button.css';

class CounterBar extends Component {
	render() {
		return (
			<div>
				<Card>
					<CardContent className={styles.counter}>
						<h1 className={styles.h1}>{this.props.count}</h1>
						<IconButton className={styles.arrowUpBtn} onClick={this.props.onIncrement}>
							<ArrowUpIcon fontSize="inherit" />
						</IconButton>
						<IconButton
							className={styles.arrowDownBtn}
							onClick={this.props.onDecrement}
							disabled={this.props.count === 0 ? true : false}
						>
							<ArrowDownIcon fontSize="inherit" />
						</IconButton>
					</CardContent>
				</Card>
			</div>
		);
	}
}

export default CounterBar;
