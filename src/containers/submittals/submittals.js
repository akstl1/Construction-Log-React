import React, { Component } from 'react';
import classes from './submittals.module.css';
import Material from '../../components/Material/Material';
import Header from '../../components/tableHeader/tableHeader';
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
				submittals[key].material_id = key;
				submittals[key].key = key;
				submittalList.push(submittals[key]);
			}

			this.setState({ submittals: submittalList });
		});
	}

	createButtonHandler = () => {
		const newSubmittal = {
			material_id: '',
			item: '',
			specSection: '',
			responsibleSubcontractor: '',
			submittals: [ 1, 2 ],
			anticipatedReleaseDate: '',
			actualReleaseDate: '',
			buyoutVariance: '',
			submittalPrepTime: 7,
			requiredSubmissionDate: '',
			requestedSubmittal: '',
			ancitipcatedSubmissionDate: '',
			actualSubmissionDate: '',
			submittalVariance: '',
			approvalTime: 14,
			requiredApprovalDate: '',
			anticipatedApprovalDate: '',
			actualApprovalDate: '',
			approvalVariance: '',
			leadTime: '',
			requiredOnSite: '',
			anticipatedDeliveryDate: '',
			confirmedDeliveryDate: '',
			confirmedSubWarehouse: '',
			actualDeliveryDate: '',
			deliveryVariance: '',
			Notes: ''
		};

		const currentSubmittals = [ ...this.state.submittals, newSubmittal ];
		this.setState({ submittals: currentSubmittals });

		axios.post('/submittals.json', newSubmittal);
	};

	deleteItemHandler = (id) => {
		const currentSubmittals = this.state.submittals;
		console.log('hit');
		this.setState({
			submittals: currentSubmittals.filter((submittal) => submittal.material_id !== id)
		});

		axios
			.delete('/submittals/' + id + '.json')
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				err.json();
				console.log(err);
			});
	};

	materialChangeHandler = (event, id, val) => {
		const newValue = event.target.value;

		axios.patch('/submittals/' + id + '.json', { [val]: newValue }).then((response) => {
			axios.get('/submittals.json').then((response) => {
				const submittals = response.data;
				const submittalList = [];
				for (var key in submittals) {
					submittals[key].material_id = key;
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
				<Material
					key={submittal.material_id}
					material_id={submittal.material_id}
					item={submittal.item}
					specSection={submittal.specSection}
					responsibleSubcontractor={submittal.responsibleSubcontractor}
					submittals={submittal.submittals}
					anticipatedReleaseDate={submittal.anticipatedReleaseDate}
					actualReleaseDate={submittal.actualReleaseDate}
					buyoutVariance={submittal.buyoutVariance}
					submittalPrepTime={submittal.submittalPrepTime}
					requiredSubmissionDate={submittal.requiredSubmissionDate}
					requestedSubmittal={submittal.requestedSubmittal}
					ancitipcatedSubmissionDate={submittal.ancitipcatedSubmissionDate}
					actualSubmissionDate={submittal.actualSubmissionDate}
					submittalVariance={submittal.submittalVariance}
					approvalTime={submittal.approvalTime}
					requiredApprovalDate={submittal.requiredApprovalDate}
					anticipatedApprovalDate={submittal.anticipatedApprovalDate}
					actualApprovalDate={submittal.actualApprovalDate}
					approvalVariance={submittal.approvalVariance}
					leadTime={submittal.leadTime}
					requiredOnSite={submittal.requiredOnSite}
					anticipatedDeliveryDate={submittal.anticipatedDeliveryDate}
					confirmedDeliveryDate={submittal.confirmedDeliveryDate}
					confirmedSubWarehouse={submittal.confirmedSubWarehouse}
					actualDeliveryDate={submittal.actualDeliveryDate}
					deliveryVariance={submittal.deliveryVariance}
					notes={submittal.Notes}
					delete={this.deleteItemHandler}
					change={this.materialChangeHandler}
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
