import React from 'react';
import classes from './Submittal.module.css';
import SubmittalTie from '../SubmittalTie/SubmittalTie';
const submittal = (props) => {
	// console.log(props);
	const materialList = props.submittalMaterialImpacted;
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
					onChange={(event) => props.change(event, props.submittal_id, 'submittalTitle')}
					name={props.submittalTitle}
					value={props.submittalTitle}
					style={{ width: '150px' }}
				/>
			</td>
			<td>
				<input
					value={props.specSection}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.submittal_id, 'specSection')}
					name={props.specSection}
				/>
			</td>
			<td>
				<input
					value={props.specSectionDescription}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.submittal_id, 'specSectionDescription')}
					name={props.specSectionDescription}
				/>
			</td>

			<td className={classes.calculatedTableField}>
				<input
					value={props.submittalNumber}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.submittal_id, 'submittalNumber')}
					name={props.submittalNumber}
				/>
			</td>
			<td>
				<input
					value={props.submittalDescription}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.submittal_id, 'submittalDescription')}
					name={props.submittalDescription}
				/>
			</td>

			<td>{materialList.map((item) => <SubmittalTie key={item} value={item} />)}</td>
			<td>
				<input
					value={props.submittalResponsibleContractor}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.submittal_id, 'submittalResponsibleContractor')}
					name={props.submittalResponsibleContractor}
				/>
			</td>
			<td className={classes.calculatedTableField}>
				<input
					value={props.submittalManager}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.submittal_id, 'submittalManager')}
					name={props.submittalManager}
				/>
			</td>
			<td>
				<input
					value={props.submittalStatus}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.submittal_id, 'submittalStatus')}
					name={props.submittalStatus}
				/>
			</td>
			<td className={classes.calculatedTableField}>
				<input
					value={props.submittalType}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.submittal_id, 'submittalType')}
					name={props.submittalType}
				/>
			</td>
			<td>
				<input
					value={props.submittalLocation}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.submittal_id, 'submittalLocation')}
					name={props.submittalLocation}
				/>
			</td>
			<td className={classes.calculatedTableField}>
				<input
					type="date"
					value={props.submittalReceivedDate}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.submittal_id, 'submittalReceivedDate')}
					name={props.submittalReceivedDate}
				/>
			</td>
			<td>
				<input
					type="date"
					value={props.submittalIssuedDate}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.submittal_id, 'submittalIssuedDate')}
					name={props.submittalIssuedDate}
				/>
			</td>
			<td className={classes.calculatedTableField}>
				<input
					type="date"
					value={props.submittalSubmitByDate}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.submittal_id, 'submittalSubmitByDate')}
					name={props.submittalSubmitByDate}
				/>
			</td>
			<td className={classes.calculatedTableField}>
				<input
					type="date"
					value={props.submittalRequiredOnSiteDate}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.submittal_id, 'submittalRequiredOnSiteDate')}
					name={props.submittalRequiredOnSiteDate}
				/>
			</td>
			<td>
				<input
					value={props.submittalLeadTime}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.submittal_id, 'submittalLeadTime')}
					name={props.submittalLeadTime}
				/>
			</td>
			<td className={classes.calculatedTableField}>
				<input
					value={props.submittalDesignReviewTime}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.submittal_id, 'submittalDesignReviewTime')}
					name={props.submittalDesignReviewTime}
				/>
			</td>
			<td>
				<input
					value={props.submittalInternalReviewTime}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.submittal_id, 'submittalInternalReviewTime')}
					name={props.submittalInternalReviewTime}
				/>
			</td>
			<td>
				<input
					value={props.submittalNotes}
					style={{ width: '150px' }}
					onChange={(event) => props.change(event, props.submittal_id, 'submittalNotes')}
					name={props.submittalNotes}
				/>
			</td>
		</tr>
	);
};

export default submittal;
