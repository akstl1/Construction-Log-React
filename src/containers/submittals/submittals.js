import React, { Component } from 'react';
import classes from './submittals.module.css';
import Submittal from '../../components/Submittal/Submittal';
import Header from '../../components/submittalHeader/submittalHeader';
import axios from '../../axios';
import MaterialButton from '../../components/Buttons/MaterialButton/MaterialButton';

// Submittals container is the general page the submittal log will be displayed

class Submittals extends Component {
	state = {
		submittals: [] /*List of subnmittals in the log*/,
		// error: false,
		submittal_id: 0 /*ID generator to prevent mass deletion bug, as noted in materials.js comments */
	};

	// lifecycle hook to assign IDs to all materials based on firebase ID when page refreshes
	componentDidMount() {
		// console.log('mount');
		// get current submittal list, loop over it and set ID equal to the corresponding key value in firebase
		axios.get('/submittals.json').then((response) => {
			const submittals = response.data;
			const submittalList = [];
			for (var key in submittals) {
				submittals[key].submittal_id = key;
				submittals[key].key = key;
				submittalList.push(submittals[key]);
			}
			// update value of materials state so all new IDs are included
			this.setState({ submittals: submittalList });
		});
	}

	// button used to create a new row in the submittal log, with all the standard columns. Most rows are blank by default.
	createButtonHandler = () => {
		const newSubmittal = {
			submittalTitle: '',
			submittal_id: this.state.submittal_id,
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

		// update submittal state to include above submittal value
		const currentSubmittals = [ ...this.state.submittals, newSubmittal ];
		this.setState({ submittals: currentSubmittals });

		// increment submittal_id state so new rows have a new state and don't lead to bug mentioned in comments above when state is created.
		axios.post('/submittals.json', newSubmittal);
		let new_sub_id = this.state.submittal_id + 1;
		this.setState({ submittal_id: new_sub_id });
	};

	// button to handle deletion of row from log
	deleteItemHandler = (id) => {
		// get current material state, and reset it to NOT include row with the identified ID

		const currentSubmittals = this.state.submittals;
		// console.log('hit');
		this.setState({
			submittals: currentSubmittals.filter((submittal) => submittal.submittal_id !== id)
		});

		// Delete call to Db to delete the row with ID in question
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

	// event handler to manage updates to table values
	submittalChangeHandler = (event, id, val) => {
		// save the event to a variable
		const newValue = event.target.value;

		// patch Db so the value in question for the material, denoted by ID, and attribute, denoted by val, is updated
		// Then reset state so change is implemented on the page
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
		// map all materials in the materials state to the Material component, which generates rows for each material with the given props

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

		// render page with: header (to be replaced with navbar in the future), Title and title text, list of materials, footer, and create item button

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
