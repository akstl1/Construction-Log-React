import React, { Component } from 'react';
// import axios from '../../axios';
import Home from './home/home';
import Materials from './materials/materials';
import { Route, Link } from 'react-router-dom';
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
						</ul>
					</nav>
				</header>

				<Route path="/" exact component={Home} />
				<Route path="/materials" exact component={Materials} />
			</div>
		);
	}
}

export default Dashboard;
