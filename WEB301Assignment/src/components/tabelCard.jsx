import React, { Component } from 'react';
import styles from './css/tableCard.module.css';
//UI Components:
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class TabelCard extends Component {
	state = {};

	render() {
		return (
			<div className={styles.tableCard}>
				<Card>
					<CardContent className={styles.tableCard}>
						{this.props.showResultsField ? (
							<Table>
								<TableHead className={styles.head}>
									<TableRow>
										<TableCell>Dessert (100g serving)</TableCell>
										<TableCell align="right">Calories</TableCell>
									</TableRow>
								</TableHead>

								<TableBody>
									{this.props.listArray.map((item) => (
										<TableRow key={item.id}>
											<TableCell> {item.name}</TableCell>
											<TableCell align="right"> {item.count}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						) : (
							<h3 className={styles.message}>No Data Available</h3>
						)}
					</CardContent>
				</Card>
			</div>
		);
	}
}

export default TabelCard;
