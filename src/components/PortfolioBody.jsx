import { Component } from 'react'
import { PortfolioCompany } from './PortfolioCompany.jsx'

/* Portfolio Page Body */
export class PortfolioBody extends Component {
	constructor() {
		super();
		this.state = {
			projects: []
		};
	}
	fetchProjects(){
		// Create XHR request
		var request = new XMLHttpRequest();

		// Create request to XHR object
		// 3 parameters to open: 1) Method: GET/POST 2) Location of data file 3) Boolean asynch? - Default true
		request.open('GET','../json/project-list.json');

		// Send request to server
		request.send();

		// Check request status and ready state
		// Browser API maintains readyState property indicating how far request has processed
		// 0 Request not initialized
		// 1 Server connection established
		// 2 Request received
		// 3 Processing Request
		// 4 Request finished & response ready
		request.onreadystatechange = () => {
			if(request.status===200 && request.readyState === 4) {
				this.setState({projects: JSON.parse(request.responseText)});
			}
		};
		// OR request.onreadystatechange = functionName;
	}
	componentWillMount() {
		this.fetchProjects();
	}
	render() {
		let lastCompanyIndex = this.state.projects.length - 1;
		let companyProjects = this.state.projects.map( (company, companyIndex) => {
			let lastCompany = false;
			if(companyIndex === lastCompanyIndex) {
				lastCompany = true;
			}
			return (<PortfolioCompany companyProjects={company} lastCompany={lastCompany}/>);
		});
		return (
			<div>
				{companyProjects}
			</div>
		);
	}
}