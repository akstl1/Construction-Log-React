import React from 'react';
import classes from './submittalHeader.module.css';
// import './tableHeader.module.css';

const submittalHeader = () => {
	return (
		<tr>
			<th />
			<th />
			<th>Title</th>
			<th>Spec Section</th>
			<th>Spec Section Description</th>
			<th>Submittal Number</th>
			<th>Description</th>
			<th>Materials Impacted</th>
			<th className={classes.calculatedTableField}>Responsible Subcontractor</th>
			<th>Submittal Manager</th>
			<th className={classes.calculatedTableField}>Submittal Status</th>
			<th>Submittal Type</th>
			<th className={classes.calculatedTableField}>Location</th>
			<th>Received Date</th>
			<th className={classes.calculatedTableField}>Issue Date</th>
			<th>Submit By Date</th>
			<th className={classes.calculatedTableField}>Required On Site Date</th>
			<th>Lead Time</th>
			<th className={classes.calculatedTableField}>Design Team Review Time</th>
			<th className={classes.calculatedTableField}>Internal Review Time</th>
			<th> Notes</th>
			{/* <th>Actual Submittal Approval Date</th>
			<th className={classes.calculatedTableField}>Approval Variance</th>
			<th>Lead Time</th>
			<th className={classes.RequiredOnSite}>Required On Site Date</th>
			<th className={classes.calculatedTableField}>Anticipated Delivery Date</th>
			<th>Confirmed Delivery Date</th>
			<th>Confirmed Sub Warehouse (Y/N)</th>
			<th>Actual Delivery Date</th>
			<th className={classes.calculatedTableField}> Delivery Variance (Days)</th> */}
		</tr>
	);
};

export default submittalHeader;
