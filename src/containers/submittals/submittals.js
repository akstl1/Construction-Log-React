import React, { Component } from 'react';
import classes from './submittals.module.css';
import Submittal from '../../components/Submittal/Submittal';
import Header from '../../components/submittalHeader/submittalHeader';
import axios from '../../axios';
import MaterialButton from '../../components/Buttons/MaterialButton/MaterialButton';

class Submittals extends Component {
	state = {
		submittals: [],
		error: false
	};

	componentDidMount() {
		console.log('mount');
		axios.get('/submittals.json').then((response) => {
			const submittals = response.data;
			const submittalList = [];
			for (var key in submittals) {
				submittals[key].submittal_id = key;
				submittals[key].key = key;
				submittalList.push(submittals[key]);
			}

			this.setState({ submittals: submittalList });
		});
	}

	createButtonHandler = () => {
		const newSubmittal = {
			submittalTitle: '',
			submittal_id: '',
			specSection: 1,
			specSectionDescription: '',
			submittalNumber: '',
			submittalDescription: '',
			submittalMaterialImpacted: [ 'material1', 'material2' ],
			submittalResponsibleContractor: '',
			submittalManager: '',
			submittalStatus: '',
			submittalType: '',
			submittalLocation: '',
			submittalReceivedDate: '',
			submittalIssuedDate: '',
			submittalSubmitByDate: '',
			submittalRequiredOnSiteDate: '',
			submittalLeadTime: '',
			submittalDesignReviewTime: 14,
			submittalInternalReviewTime: 7,
			submittalNotes: ''
		};

		const currentSubmittals = [ ...this.state.submittals, newSubmittal ];
		this.setState({ submittals: currentSubmittals });

		axios.post('/submittals.json', newSubmittal);
	};

	deleteItemHandler = (id) => {
		const currentSubmittals = this.state.submittals;
		console.log('hit');
		this.setState({
			submittals: currentSubmittals.filter((submittal) => submittal.submittal_id !== id)
		});

		axios
			.delete('/submittals/' + id + '.json')
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				// err.json();
				console.log(err);
			});
	};

	submittalChangeHandler = (event, id, val) => {
		const newValue = event.target.value;

		axios.patch('/submittals/' + id + '.json', { [val]: newValue }).then((response) => {
			axios.get('/submittals.json').then((response) => {
				const submittals = response.data;
				const submittalList = [];
				for (var key in submittals) {
					submittals[key].submittal_id = key;
					submittals[key].key = key;
					submittalList.push(submittals[key]);
				}

				this.setState({ submittals: submittalList });
			});
		});
	};

	render() {
		const Submittal_list = this.state.submittals.map((submittal) => {
			return (
				<Submittal
					key={submittal.submittal_id}
					submittal_id={submittal.submittal_id}
					submittalTitle={submittal.submittalTitle}
					specSection={submittal.specSection}
					specSectionDescription={submittal.specSectionDescription}
					submittalNumber={submittal.submittalNumber}
					submittalDescription={submittal.submittalDescription}
					submittalMaterialImpacted={submittal.submittalMaterialImpacted}
					submittalResponsibleContractor={submittal.submittalResponsibleContractor}
					submittalManager={submittal.submittalManager}
					submittalStatus={submittal.submittalStatus}
					submittalType={submittal.submittalType}
					submittalLocation={submittal.submittalLocation}
					submittalReceivedDate={submittal.submittalReceivedDate}
					submittalIssuedDate={submittal.submittalIssuedDate}
					submittalSubmitByDate={submittal.submittalSubmitByDate}
					submittalRequiredOnSiteDate={submittal.submittalRequiredOnSiteDate}
					submittalLeadTime={submittal.submittalLeadTime}
					submittalDesignReviewTime={submittal.submittalDesignReviewTime}
					submittalInternalReviewTime={submittal.submittalInternalReviewTime}
					submittalNotes={submittal.submittalNotes}
					requiredOnSite={submittal.requiredOnSite}
					delete={this.deleteItemHandler}
					change={this.submittalChangeHandler}
				/>
			);
		});

		return (
			<div>
				<div className={classes.header}>
					<h1>Submittals</h1>
					<h3>Note: Database write permissions are turned off</h3>
				</div>
				<div className={classes.table}>
					<table>
						<thead>
							<Header />
						</thead>
						<tbody>{Submittal_list}</tbody>
					</table>
				</div>
				<footer className={classes.footer}>
					<MaterialButton clicked={this.createButtonHandler} />
				</footer>
			</div>
		);
	}
}

export default Submittals;
