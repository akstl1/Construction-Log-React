import React from 'react';

// Basic button. Take in createButtonHandler as a prop, and onClick implement this function to create a new row
const materialButton = (props) => {
	return (
		<div>
			<button onClick={props.clicked}>Create +</button>
		</div>
	);
};
export default materialButton;
