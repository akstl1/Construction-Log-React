import React, { Component } from 'react';
import classes from './materials.module.css';
import Material from '../../components/Material/Material';
import Header from '../../components/materialHeader/materialHeader';
import axios from '../../axios';
import MaterialButton from '../../components/Buttons/MaterialButton/MaterialButton';

class Materials extends Component {
	state = {
		materials: [],
		error: false
	};

	componentDidMount() {
		console.log('mount');
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
	}

	createButtonHandler = () => {
		const newMaterial = {
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

	materialChangeHandler = (event, id, val) => {
		const newValue = event.target.value;

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
					delete={this.deleteItemHandler}
					change={this.materialChangeHandler}
				/>
			);
		});

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
