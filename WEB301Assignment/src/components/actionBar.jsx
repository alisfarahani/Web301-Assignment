import React, { Component } from 'react';
import { Card, CardContent } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import styles from './css/actionBar.module.css';

class ActionBar extends Component {
	render() {
		return (
			<div>
				<Card>
					<CardContent type="card" className={styles.card}>
						<TextField
							id="outlined-password-input"
							label="Name"
							type="Name"
							margin="normal"
							variant="outlined"
							className={styles.textField}
							onChange={this.props.handleChangeFunc}
							value={this.props.name}
						/>
						<Button
							variant="contained"
							color="primary"
							className={styles.button}
							onClick={this.props.saveButton}
						>
							Save
						</Button>
					</CardContent>
				</Card>
			</div>
		);
	}
}

export default ActionBar;
