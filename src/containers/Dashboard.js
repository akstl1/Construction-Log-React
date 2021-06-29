import React, { Component } from 'react';
// import axios from '../../axios';
import Home from './home/home';
import Materials from './materials/materials';
import Submittals from './submittals/submittals';
import { Route, Link } from 'react-router-dom';

// Basic homepage with h1 and routes to other pages.
// To be built out in future once submittal and material functionality is implemented
class Dashboard extends Component {
	render() {
		return (
			<div>
				<header>
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/materials">Materials</Link>
							</li>
							<li>
								<Link to="/submittals">Submittals</Link>
							</li>
						</ul>
					</nav>
				</header>

				<Route path="/" exact component={Home} />
				<Route path="/materials" exact component={Materials} />
				<Route path="/submittals" exact component={Submittals} />
			</div>
		);
	}
}

export default Dashboard;
