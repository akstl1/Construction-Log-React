import React, { Component } from 'react';
import classes from './materials.module.css';
import Material from '../../components/Material/Material';
import Header from '../../components/tableHeader/tableHeader';
import axios from '../../axios';
import MaterialButton from '../../components/Buttons/MaterialButton/MaterialButton';

class Materials extends Component {
	state = {
		materials: [],
		error: false
	};

	componentDidMount() {
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
		// .catch((error) => {
		// 	this.setState({ error: true });
		// })
	}

	createButtonHandler = () => {
		const newMaterial = {
			material_id: '',
			item: '',
			specSection: '',
			responsibleSubcontractor: '',
			submittals: '',
			actualReleaseDate: '',
			submittalPrepTime: 7,
			requestedSubmittal: '',
			actualSubmissionDate: '',
			approvalTime: 14,
			anticipatedApprovalDate: '',
			actualApprovalDate: '',
			leadTime: '',
			requiredOnSite: '',
			confirmedDeliveryDate: '',
			confirmedSubWarehouse: '',
			actualDeliveryDate: '',
			Notes: ''
		};

		const currentMaterials = [ ...this.state.materials, newMaterial ];
		this.setState({ materials: currentMaterials });

		axios.post('/materials.json', newMaterial);
	};

	deleteItemHandler = (id) => {
		const currentMaterials = this.state.materials;
		console.log('hit');
		this.setState({
			materials: currentMaterials.filter((material) => material.material_id !== id)
		});

		axios.delete('/materials/' + id + '.json').then((response) => {
			// console.log(response);
		});
	};

	materialChangeHandler = (event, id, val) => {
		const newValue = event.target.value;

		console.log(id);
		axios.patch('/materials/' + id + '.json', { [val]: newValue }).then((response) => {
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
		const Material_list = this.state.materials.map((material) => {
			return (
				<Material
					key={material.material_id}
					material_id={material.material_id}
					material={material.item}
					specSection={material.specSection}
					subcontractor={material.responsibleSubcontractor}
					submittals={material.submittals}
					actualRelease={material.actualReleaseDate}
					prepTime={material.submittalPrepTime}
					requestedSubmittal={material.requestedSubmittal}
					actualSubmission={material.actualSubmissionDate}
					approvalTime={material.approvalTime}
					anticipatedApproval={material.anticipatedApprovalDate}
					actualApproval={material.actualApprovalDate}
					leadTime={material.leadTime}
					requiredOnSite={material.requiredOnSite}
					confirmedDelivery={material.confirmedDeliveryDate}
					warehouse={material.confirmedSubWarehouse}
					actualDelivery={material.actualDeliveryDate}
					notes={material.Notes}
					delete={this.deleteItemHandler}
					change={this.materialChangeHandler}
				/>
			);
		});

		return (
			<div>
				<h1>Materials</h1>

				<div className={classes.table}>
					<table>
						<thead>
							<Header />
						</thead>
						<tbody>{Material_list}</tbody>
					</table>
				</div>
				<footer>
					<MaterialButton clicked={this.createButtonHandler} />
				</footer>
			</div>
		);
	}
}

export default Materials;
