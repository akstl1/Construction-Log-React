import React from 'react';
import classes from './materialHeader.module.css';
// import './tableHeader.module.css';

// list of headers for the material log
const header = () => {
	return (
		<tr>
			<th />
			<th />
			<th>Item</th>
			<th>Spec Section</th>
			<th>Responsible Subcontractor</th>
			<th>submittals</th>
			<th className={classes.calculatedTableField}>Anticipated Release Date</th>
			<th>Actual Release Date</th>
			<th className={classes.calculatedTableField}>Buyout Variance (Days)</th>
			<th>Submittal Prep Time</th>
			<th className={classes.calculatedTableField}>Required Submission to Architect</th>
			<th>Requested Submittal</th>
			<th className={classes.calculatedTableField}>Anticipated Submission Date</th>
			<th>Actual Submission Date</th>
			<th className={classes.calculatedTableField}>Submittal Variance (Days)</th>
			<th>Approval Time (Days)</th>
			<th className={classes.calculatedTableField}>Required Submittal Approval Date</th>
			<th className={classes.calculatedTableField}>Anticipated Submittal Approval Date</th>
			<th>Actual Submittal Approval Date</th>
			<th className={classes.calculatedTableField}>Approval Variance</th>
			<th>Lead Time</th>
			<th className={classes.RequiredOnSite}>Required On Site Date</th>
			<th className={classes.calculatedTableField}>Anticipated Delivery Date</th>
			<th>Confirmed Delivery Date</th>
			<th>Confirmed Sub Warehouse (Y/N)</th>
			<th>Actual Delivery Date</th>
			<th className={classes.calculatedTableField}> Delivery Variance (Days)</th>
			<th> Notes</th>
		</tr>
	);
};

export default header;
