import { Component } from 'react'

export class PortfolioProject extends Component {
	generateResponsibilities() {
		let resp = '';
		let len = this.props.project.responsibilities.length;
		for(let i=0; i<len; i++) {
			resp += this.props.project.responsibilities[i];
			if (i!==len-1) {
				resp += ', ';
			}
		}
		return resp;
	}
	render() {
		let lastProject = this.props.lastProject;
		let dividerMobile = lastProject? <div className="col-sm-12 hidden-sm-up ks-project-divider-container"><hr className="ks-project-divider-last"/></div> : <div className="col-sm-12 ks-project-divider-container hidden-sm-up"><hr className="ks-project-divider ks-project-divider-mobile"/></div>;
		let dividerDesktop = lastProject? <div className="col-sm-12 hidden-xs-down ks-project-divider-container"><hr className="ks-project-divider-last"/></div> : <div className="col-sm-12 ks-project-divider-container hidden-xs-down"><hr className="ks-project-divider ks-project-divider-desktop"/></div>;
		let img = <img className="img-fluid ks-project-image" src={this.props.project.imagePath}/>;
		return(
			<div className="ks-project row text-center text-sm-left">
				<div className="col-sm-5 col-md-4 hidden-xs-down ks-project-image text-center">{img}</div>
				<div className="col-sm-7 col-md-8">
					<div className="row">
						<div className="col-sm-12 ks-project-name">{this.props.project.name}</div>
						<div className="col-sm-12 ks-project-responsibilities">{this.generateResponsibilities()}</div>
						<div className="col-sm-4 hidden-sm-up project-image-container">{img}</div>
						<div className="col-sm-12 ks-project-description">{this.props.project.description}</div>
						{dividerMobile}
					</div>
				</div>
				{dividerDesktop}
			</div>
		);
	}
}
