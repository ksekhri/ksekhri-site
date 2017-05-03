class Header extends React.Component {
	render() {
		// Generate classNames for tabs
		let aboutActive, portfolioActive;
		if(this.props.isHomepage) { // Set Active tab
			aboutActive='active';
			portfolioActive='';
		} else {
			aboutActive='';
			portfolioActive='active';
		}
		let aboutClass = `ks-header-menu-item ${aboutActive}`;
		let portfolioClass = `ks-header-menu-item ${portfolioActive}`
		return (
			<div id="ks-header-row" className="row">
				<div id="ks-header-col" className="col-sm-10 offset-sm-1">
					<div id="ks-header-title">Karan Sekhri</div>
					<div id="ks-header-menu">
						<div className={aboutClass} onClick={this.props.setAbout}>About</div>
						<div className="ks-header-menu-spacer">•</div>
						<div className={portfolioClass} onClick={this.props.setPortfolio}>Portfolio</div>
					</div>
				</div>
			</div>
		);
	}
}
class Footer extends React.Component {
	render() {
		return (
			<div id="ks-footer-row" className="row">
				<div className="col-sm-10 offset-sm-1">
					<div className="row text-center">
						<div className="col-sm-12">
							<div>© 2017 Karan Sekhri</div>
						</div>
						<div className="col-sm-12 hidden-xs-down">This website is organic, non-GMO, and hand coded. <a href="https://github.com/ksekhri/ksekhri-site">Check it out on GitHub.</a></div>
						<div className="col-sm-12 hidden-sm-up">This website is organic, non-GMO, and hand coded.</div>
						<div className="col-sm-12 hidden-sm-up"><a href="https://github.com/ksekhri/ksekhri-site">Check it out on GitHub.</a></div>
					</div>
				</div>
			</div>
		);
	}
}
class AboutBody extends React.Component {
	render() {
		return(
			<div id="ks-body-row" className="row text-center">
				<div id="ks-hero" className="col-sm-10 offset-sm-1 ks-card">
					<div className="row align-items-center">
						<div className="col-xl-3 col-lg-4 col-md-5 col-sm-6">
							<img id="ks-hero-image" src="images/karan-sekhri.jpg" className="img-fluid rounded-circle" alt="Karan Sekhri's Profile" />
						</div>
						<div className="col-xl-9 col-lg-8 col-md-7 col-sm-6">
							<div className="row align-items-center">
								<div className="col-sm-12 ks-hero-title">I'm a</div>
								<div className="col-sm-12 ks-hero-body">UC Irvine CS Cum Laude with experience in frontend engineering, software engineering, and UX design who loves making technology intuitive, accessible, and beautiful.</div>
								<div className="col-sm-12 ks-hero-title">Located in</div>
								<div className="col-sm-12 ks-hero-body">Sunnyvale, CA</div>
								<div className="col-sm-12 ks-hero-title">Looking for</div>
								<div className="col-sm-12 ks-hero-body">A small, passionate, principled team where I'm given the opportunity, support, and resources to build on consumer products that make a difference in the world.</div>
								<div className="col-sm-12">
									<a href="https://www.linkedin.com/in/ksekhri/" className="btn" role="button" id="ks-hero-cta" title="Karan Sekhri LinkedIn">See My LinkedIn</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
class KSApp extends React.Component {
	constructor() {
		super();
		this.state = {
			isHomepage: true
		}
	}
	setAbout() {
		this.setState({
			isHomepage: true
		});
	}
	setPortfolio() {
		this.setState({
			isHomepage: false
		});
	}
	render() {
		let body;
		if (this.state.isHomepage) {
			body = <AboutBody/>;
		} else {
			body = 'Portfolio';
		}
		return (
			<div id="ks-app" className="container-fluid">
				<Header isHomepage={this.state.isHomepage} setAbout={this.setAbout.bind(this)} setPortfolio={this.setPortfolio.bind(this)}/>
				{body}
				<Footer />
			</div>
		);
	}
}
ReactDOM.render(
	<KSApp />, document.getElementById('ks-app-wrapper')
);