import React from 'react';
import classes from './Submittal.module.css';
import SubmittalTie from '../SubmittalTie/SubmittalTie';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Select from 'react-select';
// submittal component to display a single row in the submittal table

const submittal = (props) => {
	// console.log(props);

	// variable to store submittals tied to materials, which can then be mapped to the 'submittals' column. work in progress
	const materialList = props.submittalMaterialImpacted;
	let materialLogValues = props.materialList;
	let existingIDs = [];
	materialList.forEach((element) => existingIDs.push(element.material_id));

	// submittalList.forEach(element => delete submittalLogValues[element.key])
	let submittalFormList = materialLogValues.filter((x) => !existingIDs.includes(x.key));
	// console.log('materialList', materialList);
	// console.log('materialLogValues', materialLogValues);
	// console.log('existingIDs', existingIDs);
	// console.log('submittalFormList', submittalFormList);
	// basic table row structre. Each td links to one of the passed props, which is displayed therein in an input tag. onChange calls the change handler to update the cell value
	return (
		<tr>
			<td>
				<button onClick={() => props.delete(props.submittal_id)}>Trash</button>
			</td>
			<td>
				<input type="checkbox" name="" value="" />
			</td>
			<td>
				<input
					onChange={(event) =>
						props.change(event, props.submittal_id, 'submittalTitle', props.submittalMaterialImpacted)}
					name={props.submittalTitle}
					value={props.submittalTitle}
					style={{ width: '150px' }}
				/>
			</td>
			<td>
				<input
					value={props.specSection}
					style={{ width: '150px' }}
					onChange={(event) =>
						props.change(event, props.submittal_id, 'specSection', props.submittalMaterialImpacted)}
					name={props.specSection}
				/>
			</td>
			<td>
				<input
					value={props.specSectionDescription}
					style={{ width: '150px' }}
					onChange={(event) =>
						props.change(
							event,
							props.submittal_id,
							'specSectionDescription',
							props.submittalMaterialImpacted
						)}
					name={props.specSectionDescription}
				/>
			</td>

			<td className={classes.calculatedTableField}>
				<input
					value={props.submittalNumber}
					style={{ width: '150px' }}
					onChange={(event) =>
						props.change(event, props.submittal_id, 'submittalNumber', props.submittalMaterialImpacted)}
					name={props.submittalNumber}
				/>
			</td>
			<td>
				<input
					value={props.submittalDescription}
					style={{ width: '150px' }}
					onChange={(event) =>
						props.change(
							event,
							props.submittal_id,
							'submittalDescription',
							props.submittalMaterialImpacted
						)}
					name={props.submittalDescription}
				/>
			</td>

			<td>
				<DropdownButton
					alignRight
					title="Dropdown right"
					id="dropdown-menu-align-right"
					onSelect={(event) =>
						props.submitMaterialForm(props.submittal_id, props.submittalMaterialImpacted, event)}
				>
					{submittalFormList.length ? (
						submittalFormList.map((material) => (
							<Dropdown.Item key={material.material_id} eventKey={material.item}>
								{material.item}
							</Dropdown.Item>
						))
					) : (
						<p>Default</p>
					)}
				</DropdownButton>
				{materialList.map((material) => <SubmittalTie key={material.material_id} value={material.item} />)}
			</td>
			<td>
				<input
					value={props.submittalResponsibleContractor}
					style={{ width: '150px' }}
					onChange={(event) =>
						props.change(
							event,
							props.key,
							'submittalResponsibleContractor',
							props.submittalMaterialImpacted
						)}
					name={props.submittalResponsibleContractor}
				/>
			</td>
			<td className={classes.calculatedTableField}>
				<input
					value={props.submittalManager}
					style={{ width: '150px' }}
					onChange={(event) =>
						props.change(event, props.submittal_id, 'submittalManager', props.submittalMaterialImpacted)}
					name={props.submittalManager}
				/>
			</td>
			<td>
				<input
					value={props.submittalStatus}
					style={{ width: '150px' }}
					onChange={(event) =>
						props.change(event, props.submittal_id, 'submittalStatus', props.submittalMaterialImpacted)}
					name={props.submittalStatus}
				/>
			</td>
			<td className={classes.calculatedTableField}>
				<input
					value={props.submittalType}
					style={{ width: '150px' }}
					onChange={(event) =>
						props.change(event, props.submittal_id, 'submittalType', props.submittalMaterialImpacted)}
					name={props.submittalType}
				/>
			</td>
			<td>
				<input
					value={props.submittalLocation}
					style={{ width: '150px' }}
					onChange={(event) =>
						props.change(event, props.submittal_id, 'submittalLocation', props.submittalMaterialImpacted)}
					name={props.submittalLocation}
				/>
			</td>
			<td className={classes.calculatedTableField}>
				<input
					type="date"
					value={props.submittalReceivedDate}
					style={{ width: '150px' }}
					onChange={(event) =>
						props.change(
							event,
							props.submittal_id,
							'submittalReceivedDate',
							props.submittalMaterialImpacted
						)}
					name={props.submittalReceivedDate}
				/>
			</td>
			<td>
				<input
					type="date"
					value={props.submittalIssuedDate}
					style={{ width: '150px' }}
					onChange={(event) =>
						props.change(event, props.submittal_id, 'submittalIssuedDate', props.submittalMaterialImpacted)}
					name={props.submittalIssuedDate}
				/>
			</td>
			<td className={classes.calculatedTableField}>
				<input
					type="date"
					value={props.submittalSubmitByDate}
					style={{ width: '150px' }}
					onChange={(event) =>
						props.change(
							event,
							props.submittal_id,
							'submittalSubmitByDate',
							props.submittalMaterialImpacted
						)}
					name={props.submittalSubmitByDate}
				/>
			</td>
			<td className={classes.calculatedTableField}>
				<input
					type="date"
					value={props.submittalRequiredOnSiteDate}
					style={{ width: '150px' }}
					onChange={(event) =>
						props.change(
							event,
							props.submittal_id,
							'submittalRequiredOnSiteDate',
							props.submittalMaterialImpacted
						)}
					name={props.submittalRequiredOnSiteDate}
				/>
			</td>
			<td>
				<input
					value={props.submittalLeadTime}
					style={{ width: '150px' }}
					onChange={(event) =>
						props.change(event, props.submittal_id, 'submittalLeadTime', props.submittalMaterialImpacted)}
					name={props.submittalLeadTime}
				/>
			</td>
			<td className={classes.calculatedTableField}>
				<input
					value={props.submittalDesignReviewTime}
					style={{ width: '150px' }}
					onChange={(event) =>
						props.change(
							event,
							props.submittal_id,
							'submittalDesignReviewTime',
							props.submittalMaterialImpacted
						)}
					name={props.submittalDesignReviewTime}
				/>
			</td>
			<td>
				<input
					value={props.submittalInternalReviewTime}
					style={{ width: '150px' }}
					onChange={(event) =>
						props.change(
							event,
							props.submittal_id,
							'submittalInternalReviewTime',
							props.submittalMaterialImpacted
						)}
					name={props.submittalInternalReviewTime}
				/>
			</td>
			<td>
				<input
					value={props.submittalNotes}
					style={{ width: '150px' }}
					onChange={(event) =>
						props.change(event, props.ksubmittal_idey, 'submittalNotes', props.submittalMaterialImpacted)}
					name={props.submittalNotes}
				/>
			</td>
		</tr>
	);
};

export default submittal;
