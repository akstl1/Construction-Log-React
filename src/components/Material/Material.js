import React from 'react';
import classes from './Material.module.css';
import SubmittalTie from '../SubmittalTie/SubmittalTie';
// import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Select from 'react-select';

// material component to display a single row in the material table
const material = (props) => {
	// variable to store submittals tied to materials, which can then be mapped to the 'submittals' column. work in progress

	const submittalList = props.submittals;
	let submittalLogValues = props.submittalList;
	let existingIDs = [];
	submittalList.forEach((element) => existingIDs.push(element.submittal_id));

	// submittalList.forEach(element => delete submittalLogValues[element.key])
	let submittalFormList = submittalLogValues.filter((x) => !existingIDs.includes(x.key));

	// console.log('submittallogvalues', submittalLogValues);
	// console.log('existingID', existingIDs);
	// console.log('submittalList', submittalList);
	// console.log('submittalFormList', submittalFormList);

	// variables to help implement warehouse delivery prop dropdown; work in progress
	// const options = [ '', 'Yes', 'No' ];
	// const defaultOption = options[0];

	// basic table row structre. Each td links to one of the passed props, which is displayed therein in an input tag. onChange calls the change handler to update the cell value
	// exceptions to this structure will be submittals and delivery confirmation, as noted above
	return (
		<tr>
			<td>
				<button onClick={() => props.delete(props.material_id)}>Trash</button>
			</td>
			<td>
				<input type="checkbox" name="" value="" />
			</td>
			<td>
				<input
					onChange={(event) => props.change(event, props.material_id, 'item', props.submittals)}
					name={props.item}
					value={props.item}
					style={{ width: '150px' }}
				/>
			</td>
			<td>
				<input
					value={props.specSection}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.material_id, 'specSection', props.submittals)}
					name={props.specSection}
				/>
			</td>
			<td>
				<input
					value={props.responsibleSubcontractor}
					style={{ width: '150px' }}
					onChange={(event) =>
						props.change(event, props.material_id, 'responsibleSubcontractor', props.submittals)}
					name={props.responsibleSubcontractor}
				/>
			</td>
			<td>
				<DropdownButton
					alignRight
					title="Dropdown right"
					id="dropdown-menu-align-right"
					onSelect={(event) => props.formSubmit(props.material_id, props.submittals, event)}
				>
					{submittalFormList.length ? (
						submittalFormList.map((submittal) => (
							<Dropdown.Item key={submittal.submittal_id} eventKey={submittal.submittalTitle}>
								{submittal.submittalTitle}
							</Dropdown.Item>
						))
					) : (
						<p>Default</p>
					)}
				</DropdownButton>
				{submittalList.map((submittal) => (
					<SubmittalTie key={submittal.submittal_id} value={submittal.submittalTitle} />
				))}
			</td>
			<td className={classes.calculatedTableField}>
				<input
					type="date"
					value={props.anticipatedReleaseDate}
					style={{ width: '150px' }}
					onChange={(event) =>
						props.change(event, props.material_id, 'anticipatedReleaseDate', props.submittals)}
					name={props.anticipatedReleaseDate}
				/>
			</td>
			<td>
				<input
					type="date"
					value={props.actualReleaseDate}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.material_id, 'actualReleaseDate', props.submittals)}
					name={props.actualReleaseDate}
				/>
			</td>
			<td className={classes.calculatedTableField}>
				<input
					value={props.buyoutVariance}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.material_id, 'buyoutVariance', props.submittals)}
					name={props.buyoutVariance}
				/>
			</td>
			<td>
				<input
					value={props.submittalPrepTime}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.material_id, 'submittalPrepTime', props.submittals)}
					name={props.submittalPrepTime}
				/>
			</td>
			<td className={classes.calculatedTableField}>
				<input
					type="date"
					value={props.requiredSubmissionDate}
					style={{ width: '150px' }}
					onChange={(event) =>
						props.change(event, props.material_id, 'requiredSubmissionDate', props.submittals)}
					name={props.requiredSubmissionDate}
				/>
			</td>
			<td>
				<input
					type="date"
					value={props.requestedSubmittal}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.material_id, 'requestedSubmittal', props.submittals)}
					name={props.requestedSubmittal}
				/>
			</td>
			<td className={classes.calculatedTableField}>
				<input
					type="date"
					value={props.ancitipcatedSubmissionDate}
					style={{ width: '150px' }}
					onChange={(event) =>
						props.change(event, props.material_id, 'ancitipcatedSubmissionDate', props.submittals)}
					name={props.ancitipcatedSubmissionDate}
				/>
			</td>
			<td>
				<input
					type="date"
					value={props.actualSubmissionDate}
					style={{ width: '150px' }}
					onChange={(event) =>
						props.change(event, props.material_id, 'actualSubmissionDate', props.submittals)}
					name={props.actualSubmissionDate}
				/>
			</td>
			<td className={classes.calculatedTableField}>
				<input
					value={props.submittalVariance}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.material_id, 'submittalVariance', props.submittals)}
					name={props.submittalVariance}
				/>
			</td>
			<td>
				<input
					value={props.approvalTime}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.material_id, 'approvalTime', props.submittals)}
					name={props.approvalTime}
				/>
			</td>
			<td className={classes.calculatedTableField}>
				<input
					type="date"
					value={props.requiredApprovalDate}
					style={{ width: '150px' }}
					onChange={(event) =>
						props.change(event, props.material_id, 'requiredApprovalDate', props.submittals)}
					name={props.requiredApprovalDate}
				/>
			</td>
			<td className={classes.calculatedTableField}>
				<input
					value={props.anticipatedApprovalDate}
					style={{ width: '150px' }}
					onChange={(event) =>
						props.change(event, props.material_id, 'anticipatedApprovalDate', props.submittals)}
					name={props.anticipatedApprovalDate}
				/>
			</td>
			<td>
				<input
					type="date"
					value={props.actualApprovalDate}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.material_id, 'actualApprovalDate', props.submittals)}
					name={props.actualApprovalDate}
				/>
			</td>
			<td className={classes.calculatedTableField}>
				<input
					value={props.approvalVariance}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.material_id, 'approvalVariance', props.submittals)}
					name={props.approvalVariance}
				/>
			</td>
			<td>
				<input
					value={props.leadTime}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.material_id, 'leadTime', props.submittals)}
					name={props.leadTime}
				/>
			</td>
			<td className={classes.RequiredOnSite}>
				<input
					type="date"
					value={props.requiredOnSite}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.material_id, 'requiredOnSite', props.submittals)}
					name={props.requiredOnSite}
				/>
			</td>
			<td className={classes.calculatedTableField}>
				<input
					value={props.anticipatedDeliveryDate}
					style={{ width: '150px' }}
					onChange={(event) =>
						props.change(event, props.material_id, 'anticipatedDeliveryDate', props.submittals)}
					name={props.anticipatedDeliveryDate}
				/>
			</td>
			<td>
				<input
					type="date"
					value={props.confirmedDeliveryDate}
					style={{ width: '150px' }}
					onChange={(event) =>
						props.change(event, props.material_id, 'confirmedDeliveryDate', props.submittals)}
					name={props.confirmedDeliveryDate}
				/>
			</td>
			<td>
				<input
					value={props.confirmedSubWarehouse}
					style={{ width: '150px' }}
					onChange={(event) =>
						props.change(event, props.material_id, 'confirmedSubWarehouse', props.submittals)}
					name={props.confirmedSubWarehouse}
				/>
			</td>
			<td>
				<input
					type="date"
					value={props.actualDeliveryDate}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.material_id, 'actualDeliveryDate', props.submittals)}
					name={props.actualDeliveryDate}
				/>
			</td>
			<td className={classes.calculatedTableField}>
				<input
					value={props.deliveryVariance}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.material_id, 'deliveryVariance', props.submittals)}
					name={props.deliveryVariance}
				/>
			</td>
			<td>
				<input
					value={props.notes}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.material_id, 'Notes', props.submittals)}
					name={props.notes}
				/>
			</td>
		</tr>
	);
};

export default material;
