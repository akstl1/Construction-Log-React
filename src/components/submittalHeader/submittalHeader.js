import React from 'react';
import classes from './submittalHeader.module.css';
// import './tableHeader.module.css';

// list of headers for the submittal table
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
		</tr>
	);
};

export default submittalHeader;
