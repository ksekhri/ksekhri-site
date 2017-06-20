import { Component } from 'react'

/* Shared Header */
export class Header extends Component {
	handleTabClick(e) {
		this.props.setPage(e.target.textContent);
	}
	render() {
		// Generate classNames for tabs
		let aboutActive = (this.props.selectedPage === this.props.PageSelection.ABOUT) ? 'active' : '';
		let portfolioActive = (this.props.selectedPage === this.props.PageSelection.PORTFOLIO) ? 'active' : '';
		let aboutClass = `ks-header-menu-item ${aboutActive}`;
		let portfolioClass = `ks-header-menu-item ${portfolioActive}`
		return (
			<div id="ks-header-row" className="row">
				<div id="ks-header-col" className="col-sm-10 offset-sm-1">
					<div id="ks-header-title">Karan Sekhri</div>
					<div id="ks-header-menu">
						<div className={aboutClass} onClick={this.handleTabClick.bind(this)}>About</div>
						<div className="ks-header-menu-spacer">•</div>
						<div className={portfolioClass} onClick={this.handleTabClick.bind(this)}>Portfolio</div>
					</div>
				</div>
			</div>
		);
	}
}