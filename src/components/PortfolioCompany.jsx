import { Component } from 'react'
import { PortfolioProject } from './PortfolioProject.jsx'


/* Portfolio Company */
export class PortfolioCompany extends Component {
	render() {
		// Generate Date Line
		let startDate = this.props.companyProjects.startDate;
		let endDate = this.props.companyProjects.endDate;
		let companyDate;
		if(endDate === null) {
			companyDate = `(${startDate} - Present)`;
		} else if (startDate === endDate) {
			companyDate = `(${startDate})`;
		} else {
			companyDate = `(${startDate} - ${endDate})`;
		}		
		let lastProjectIndex = this.props.companyProjects.projects.length - 1;
		let portfolioProjects = this.props.companyProjects.projects.map( (project, projectIndex) => {
			let lastProject = false;
			if(projectIndex === lastProjectIndex) {
				lastProject = true;
			}
			return (<PortfolioProject project={project} lastProject={lastProject}/>);
		});
		let cardClassName = this.props.lastCompany ? "col-sm-10 offset-sm-1 ks-card ks-company-card ks-company-card-last": "col-sm-10 offset-sm-1 ks-card ks-company-card";
		return(
			<div className="row ks-portfolio-company-block">
				<div className="col-sm-10 offset-sm-1 ks-company-title">
					<div className="ks-company-title-name">{this.props.companyProjects.company}</div>
					<div className="ks-company-title-date">{companyDate}</div>
				</div>
				<div className={cardClassName}>
					{portfolioProjects}
				</div>
			</div>
		);
	}
}