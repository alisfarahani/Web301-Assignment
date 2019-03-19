import React, { Component, Fragment } from 'react';
import AppBarComponent from './components/AppBar';
import styles from './App.module.css';
import CounterBar from './components/counterBar';
import TabelCard from './components/tabelCard';
import ActionBar from './components/actionBar';

//UI Components:
import Grid from '@material-ui/core/Grid';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			name: ' ',
			showResult: false,
			list: []
		};
		this.Increment = this.Increment.bind(this);
		this.Decrement = this.Decrement.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.save = this.save.bind(this);
	}
	Increment() {
		this.setState({ count: this.state.count + 1 });
	}
	Decrement() {
		this.setState({ count: this.state.count - 1 });
	}

	//actionBar
	handleChange(event) {
		this.setState({
			name: event.target.value
		});
	}
	save() {
		

		var newArray = this.state.list.slice();
		var item = {};
		item['id'] = this.state.list.length;
		item['count'] = this.state.count;
		item['name'] = this.state.name;
		newArray.push(item);
		this.setState({ list: newArray });
		// console.log('newAttay Length: ' + newArray.length);
		// console.log('showResult' + this.state.showResult);
		this.setState({
			count: 0,
			name: '',
			showResult: true
		});
	}

	render() {
		return (
			<Fragment>
				<AppBarComponent />
				<Grid className={styles.counterBarLayout} container spacing={16}>
					<CounterBar count={this.state.count} onIncrement={this.Increment} onDecrement={this.Decrement} />
				</Grid>
				<Grid className={styles.actionBarLayout} container spacing={16}>
					<ActionBar
						showsCounter={this.state.count}
						handleChangeFunc={this.handleChange}
						saveButton={this.save}
						name={this.state.name}
					/>
				</Grid>
				<Grid className={styles.tableCardLayout} container spacing={16}>
					<TabelCard listArray={this.state.list} showResultsField={this.state.showResult} />
				</Grid>
			</Fragment>
		);
	}
}

export default App;
