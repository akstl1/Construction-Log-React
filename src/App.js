// import { Router } from 'express';
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './containers/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			materials: []
		};
	}

	// async componentDidMount() {
	// 	try {
	// 		let r = await fetch('/api/materials');
	// 		let materials = await r.json();
	// 		this.setState({ materials });
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }

	render() {
		return (
			// <main className="container my-5">
			// 	<h1 className="text-primary text-center">My Materials</h1>
			// 	{console.log(this.state.materials)}
			// 	<ul>
			// 		{this.state.materials.map((material) => {
			// 			return <li key={material.material_id}>{material.Item}</li>;
			// 		})}
			// 	</ul>
			// </main>
			<BrowserRouter>
				<div>
					<Dashboard />
				</div>
			</BrowserRouter>
			// <Route path="/" exact route={Materials} />
		);
	}
}

// export interface IAppProps {}

// export interface IAppState {
// 	materials: Array<{
// 		material_id: int,
// 		Item: string,
// 		specSection: string,
// 		responsibleSubcontractor: string,
// 		actualReleaseDate: Date,
// 		submittalPrepTime: int,
// 		actualSubmissionDate: Date,
// 		approvalTime: int,
// 		anticipatedApprovalDate: Date,
// 		actualApprovalDate: Date,
// 		leadTime: int,
// 		requiredOnSite: Date,
// 		confirmedDeliveryDate: Date,
// 		confirmedSubWarehouse: boolean,
// 		actualDeliveryDate: Date,
// 		Notes: string
// 	}>;
// }

export default App;

//
// const App = (props: AppProps) => {
// 	const [greeting, setGreeting] = React.useState<string>('');

// 	React.useEffect(() => {
// 		(async () => {
// 			try {
// 				const res = await fetch('/api/hello');
// 				const greeting = await res.json();
// 				setGreeting(greeting);
// 			} catch (error) {
// 				console.log(error);
// 			}
// 		})();
// 	}, []);

// 	return (
// 		<div className="min-vh-100 d-flex justify-content-center align-items-center">
// 			<h1 className="display-1">Hello {greeting}!</h1>
// 		</div>
// 	);
// };

// interface AppProps {}

// export default App;
