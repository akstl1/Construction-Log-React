import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Materials from '../materials/materials';
class Home extends Component {
	render() {
		return (
			<div>
				<header>
					<h1>Hello</h1>
				</header>

				<Route path="/materials" exact component={Materials} />
			</div>
		);
	}
}

export default Home;
