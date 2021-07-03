import React, { Component } from 'react';
import classes from './materials.module.css';
import Material from '../../components/Material/Material';
import Header from '../../components/materialHeader/materialHeader';
import axios from '../../axios';
import MaterialButton from '../../components/Buttons/MaterialButton/MaterialButton';

// Materials cntainer is the general page the materials log will be displayed

class Materials extends Component {
	state = {
		materials: [] /* List of current materials in the system */,
		// error: false,

		/* temp material ID state field. Prevents bug that occurred: when many new items were created, they didn't have ID from Db yet and would all be deleted if one was deleted */

		mat_id: 0,

		submittalText: '',
		submittals: []
	};

	// lifecycle hook to assign IDs to all materials based on firebase ID when page refreshes
	componentDidMount() {
		// console.log('mount');
		axios.get('/materials.json').then((response) => {
			// get current material list, loop over it and set ID equal to the corresponding key value in firebase
			const materials = response.data;
			const materialList = [];
			for (var key in materials) {
				materials[key].material_id = key;
				materials[key].key = key;
				materialList.push(materials[key]);
			}
			// update value of materials state so all new IDs are included
			this.setState({ materials: materialList });
		});

		axios.get('/submittals.json').then((response) => {
			// get current material list, loop over it and set ID equal to the corresponding key value in firebase
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

	// button used to create a new row in the material log, with all the standard columns. Most rows are blank by default.
	createButtonHandler = () => {
		const newMaterial = {
			material_id: this.state.mat_id,
			item: '',
			specSection: '',
			responsibleSubcontractor: '',
			submittals: [ { submittal_id: 1, submittalTitle: 'Test' } ],
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
			Notes: '',
			formText: ''
		};

		// update materials state to include above material value
		const currentMaterials = [ ...this.state.materials, newMaterial ];
		this.setState({ materials: currentMaterials });
		axios.post('/materials.json', newMaterial);

		// increment mat_id state so new rows have a new state and don't lead to bug mentioned in comments above when state is created.
		let new_mat_id = this.state.mat_id + 1;
		this.setState({ mat_id: new_mat_id });
	};

	// button to be built out in future, to tie in submittals to the material log
	addMaterialButtonHandler = (event, id, val) => {};

	// button to handle deletion of row from log
	deleteItemHandler = (id) => {
		// get current material state, and reset it to NOT include row with the identified ID
		const currentMaterials = this.state.materials;
		// console.log('hit');
		this.setState({
			materials: currentMaterials.filter((material) => material.material_id !== id)
		});

		// Delete call to Db to delete the row with ID in question
		axios
			.delete('/materials/' + id + '.json')
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				err.json();
				console.log(err);
			});
	};

	// event handler to manage updates to table values
	materialChangeHandler = (event, id, attribute) => {
		// save the event to a variable
		const newValue = event.target.value;

		// patch Db so the value in question for the material, denoted by ID, and attribute, denoted by val, is updated
		// Then reset state so change is implemented on the page
		axios.patch('/materials/' + id + '.json', { [attribute]: newValue }).then((response) => {
			axios.get('/materials.json').then((response) => {
				const materials = response.data;
				const materialList = [];
				for (var key in materials) {
					materials[key].material_id = key;
					materials[key].key = key;
					materialList.push(materials[key]);
				}

				this.setState({ materials: materialList });
			});
		});
	};

	submittalFormSubmitHandler = (id, submittals, va) => {
		// console.log('submitting form');

		const newValue = this.state.submittals.filter((submittal) => submittal.submittalTitle === va)[0];

		// console.log('newValue', newValue);

		const newSubmittalsList = [ ...submittals, newValue ];
		// console.log('newSubmittalsList', newSubmittalsList);
		axios.patch('/materials/' + id + '.json', { submittals: newSubmittalsList }).then((response) => {
			axios.get('/materials.json').then((response) => {
				const materials = response.data;
				const materialList = [];
				for (var key in materials) {
					materials[key].material_id = key;
					materials[key].key = key;
					materialList.push(materials[key]);
				}

				this.setState({ materials: materialList });
			});
		});
	};

	render() {
		// map all materials in the materials state to the Material component, which generates rows for each material with the given props
		const Material_list = this.state.materials.map((material) => {
			return (
				<Material
					key={material.material_id}
					material_id={material.material_id}
					item={material.item}
					specSection={material.specSection}
					responsibleSubcontractor={material.responsibleSubcontractor}
					submittals={material.submittals}
					anticipatedReleaseDate={material.anticipatedReleaseDate}
					actualReleaseDate={material.actualReleaseDate}
					buyoutVariance={material.buyoutVariance}
					submittalPrepTime={material.submittalPrepTime}
					requiredSubmissionDate={material.requiredSubmissionDate}
					requestedSubmittal={material.requestedSubmittal}
					ancitipcatedSubmissionDate={material.ancitipcatedSubmissionDate}
					actualSubmissionDate={material.actualSubmissionDate}
					submittalVariance={material.submittalVariance}
					approvalTime={material.approvalTime}
					requiredApprovalDate={material.requiredApprovalDate}
					anticipatedApprovalDate={material.anticipatedApprovalDate}
					actualApprovalDate={material.actualApprovalDate}
					approvalVariance={material.approvalVariance}
					leadTime={material.leadTime}
					requiredOnSite={material.requiredOnSite}
					anticipatedDeliveryDate={material.anticipatedDeliveryDate}
					confirmedDeliveryDate={material.confirmedDeliveryDate}
					confirmedSubWarehouse={material.confirmedSubWarehouse}
					actualDeliveryDate={material.actualDeliveryDate}
					deliveryVariance={material.deliveryVariance}
					notes={material.Notes}
					submittalTextState={this.state.submittalText}
					submittalFormText={material.formText}
					delete={this.deleteItemHandler}
					change={this.materialChangeHandler}
					formSubmit={this.submittalFormSubmitHandler}
					addSubmittal={this.submittalDropdownHandler}
					submittalList={this.state.submittals}
				/>
			);
		});

		// render page with: header (to be replaced with navbar in the future), Title and title text, list of materials, footer, and create item button
		return (
			<div>
				<div className={classes.header}>
					<h1>Materials</h1>
					<h3>Note: Database write permissions are turned off</h3>
				</div>
				<div className={classes.table}>
					<table>
						<thead>
							<Header />
						</thead>
						<tbody>{Material_list}</tbody>
					</table>
				</div>
				<footer className={classes.footer}>
					<MaterialButton clicked={this.createButtonHandler} />
				</footer>
			</div>
		);
	}
}

export default Materials;
