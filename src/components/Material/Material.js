import React from 'react';
import classes from './Material.module.css';
const material = (props) => {
	// console.log(props);
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
					onChange={(event) => props.change(event, props.material_id, 'item')}
					name={props.material}
					value={props.material}
					style={{ width: '150px' }}
				/>
			</td>
			<td>
				<input
					value={props.specSection}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.material_id, 'specSection')}
					name={props.specSection}
				/>
			</td>
			<td>
				<input
					value={props.subcontractor}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.material_id, 'responsibleSubContractor')}
					name={props.subcontractor}
				/>
			</td>
			<td>
				<input value={props.submittals} />
			</td>
			<td className={classes.calculatedTableField}>
				<input type="date" />
			</td>
			<td>
				<input
					type="date"
					value={props.actualRelease}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.material_id, 'actualReleaseDate')}
					name={props.actualRelease}
				/>
			</td>
			<td className={classes.calculatedTableField}>
				<input value="7" />
			</td>
			<td>
				<input
					value={props.prepTime}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.material_id, 'submittalPrepTime')}
					name={props.prepTime}
				/>
			</td>
			<td className={classes.calculatedTableField}>
				<input value="7" />
			</td>
			<td className={classes.calculatedTableField}>
				<input value="7" />
			</td>
			<td>
				<input
					type="date"
					value={props.requestedSubmittal}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.material_id, 'requestedSubmittal')}
					name={props.requestedSubmittal}
				/>
			</td>
			<td>
				<input
					type="date"
					value={props.actualSubmission}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.material_id, 'actualSubmissionDate')}
					name={props.actualSubmission}
				/>
			</td>
			<td className={classes.calculatedTableField}>
				<input value="7" />
			</td>
			<td>
				<input
					value={props.approvalTime}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.material_id, 'approvalTime')}
					name={props.approvalTime}
				/>
			</td>
			<td className={classes.calculatedTableField}>
				<input value="7" />
			</td>
			<td>
				<input
					value={props.anticipatedApproval}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.material_id, 'anticipatedApprovalDate')}
					name={props.anticipatedApproval}
				/>
			</td>
			<td>
				<input
					type="date"
					value={props.actualApproval}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.material_id, 'actualApprovalDate')}
					name={props.actualApproval}
				/>
			</td>
			<td className={classes.calculatedTableField}>
				<input value="7" />
			</td>
			<td>
				<input
					value={props.leadTime}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.material_id, 'leadTime')}
					name={props.leadTime}
				/>
			</td>
			<td>
				<input
					type="date"
					value={props.requiredOnSite}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.material_id, 'requiredOnSite')}
					name={props.requiredOnSite}
				/>
			</td>
			<td className={classes.calculatedTableField}>
				<input value="7" />
			</td>
			<td>
				<input
					type="date"
					value={props.confirmedDelivery}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.material_id, 'confirmedDeliveryDate')}
					name={props.confirmedDelivery}
				/>
			</td>
			<td>
				<input
					value={props.warehouse}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.material_id, 'confirmedSubWarehouse')}
					name={props.warehouse}
				/>
			</td>
			<td>
				<input
					type="date"
					value={props.actualDelivery}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.material_id, 'actualDeliveryDate')}
					name={props.actualDelivery}
				/>
			</td>
			<td className={classes.calculatedTableField}>
				<input value="7" />
			</td>
			<td>
				<input
					value={props.notes}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.material_id, 'Notes')}
					name={props.notes}
				/>
			</td>
		</tr>
	);
};

export default material;
