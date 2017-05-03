class Header extends React.Component {
	constructor() {
		super();
		this.TabSelection = {
			ABOUT: 0,
			PORTFOLIO: 1
		}
		this.state = {
			activeTab: this.TabSelection.ABOUT
		}
	}
	changeTabPortfolio() {
		this.setState ({
			activeTab: this.TabSelection.PORTFOLIO
		});
	}
	changeTabAbout() {
		this.setState ({
			activeTab: this.TabSelection.ABOUT
		});
	}
	render() {
		// Generate classNames for tabs
		// Is About tab "active"?
		let aboutActive = (this.state.activeTab === this.TabSelection.ABOUT) ? 'active' : '';
		let aboutClass = `ks-header-menu-item ${aboutActive}`;
		let portfolioActive = (this.state.activeTab === this.TabSelection.PORTFOLIO) ? 'active' : '';
		let portfolioClass = `ks-header-menu-item ${portfolioActive}`
		return (
			<div id="ks-header-row" className="row">
				<div id="ks-header-col" className="col-sm-10 offset-sm-1">
					<div id="ks-header-title">Karan Sekhri</div>
					<div id="ks-header-menu">
						<div className={aboutClass} onClick={this.changeTabAbout.bind(this)}>About</div>
						<div className="ks-header-menu-spacer">•</div>
						<div className={portfolioClass} onClick={this.changeTabPortfolio.bind(this)}>Portfolio</div>
					</div>
				</div>
			</div>
		);
	}
}
ReactDOM.render(
	<Header />, document.getElementById('ks-header')
);