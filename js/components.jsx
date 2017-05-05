/* Shared Header */
class Header extends React.Component {
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
/* Shared Footer */
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
/* About Page Body */
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
/* Portfolio Page Body */
class PortfolioBody extends React.Component {
	constructor() {
		super();
		this.state = {
			projects: null
		};
	}
	fetchProjects(){
		// Create XHR request
		var request = new XMLHttpRequest();

		// Create request to XHR object
		// 3 parameters to open: 1) Method: GET/POST 2) Location of data file 3) Boolean asynch? - Default true
		request.open('GET','../json/projects.json');

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
		}
		// OR request.onreadystatechange = functionName;
	}
	componentWillMount() {
		this.fetchProjects();
	}
	render() {
		return (
			<PortfolioCompanyBlock />
		);
	}
}
/* Portfolio Company Block */
class PortfolioCompanyBlock extends React.Component {
	render() {
		return(
			<div className="row ks-portfolio-company-block">
				<div className="col-sm-10 offset-sm-1 ks-company-title">TCS/Cisco (2015-Present)</div>
				<div className="col-sm-10 offset-sm-1 ks-card ks-company-card">
					<div className="project row">
						<div className="col-sm-4 hidden-xs-down ks-project-image">test</div>
						<div className="col-sm-8">
							<div className="row">
								<div className="col-sm-12 ks-project-title">ABMU Phlebotomist Companion</div>
								<div className="col-sm-12 ks-project-responsibilities">UX Design, Management</div>
								<div className="col-sm-4 ks-hidden-sm-up project-image">test</div>
								<div className="col-sm-12 ks-project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet arcu sed lectus luctus sodales. Aenean in turpis non ex tempus tristique. Aenean maximus lectus est, iaculis commodo dui gravida pulvinar. Nam rutrum fringilla justo. Pellentesque eget lacinia justo, placerat efficitur ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus dignissim sed enim pretium efficitur. Suspendisse fringilla quam purus, in dignissim elit ultricies ut. Pellentesque imperdiet eros maximus eros consequat, ut vehicula risus volutpat. Proin sagittis massa dignissim hendrerit condimentum.</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
/* Root KSAppBox Component */
class KSAppBox extends React.Component {
	constructor() {
		super();
		this.PageSelection = {
			ABOUT: 0,
			PORTFOLIO: 1
		}
		this.state = {
			selectedPage: this.PageSelection.ABOUT
		}
	}
	setPage(tabTitle) {
		let newPage;
		if(tabTitle === 'About') {
			newPage = this.PageSelection.ABOUT
		} else if (tabTitle === 'Portfolio') {
			newPage = this.PageSelection.PORTFOLIO
		}
		this.setState({
			selectedPage: newPage
		});
	}
	render() {
		let body;
		if (this.state.selectedPage == this.PageSelection.ABOUT) {
			body = <AboutBody/>;
		} else if (this.state.selectedPage == this.PageSelection.PORTFOLIO) {
			body = <PortfolioBody/>;
		}
		return (
			<div id="ks-app" className="container-fluid">
				<Header selectedPage={this.state.selectedPage} PageSelection={this.PageSelection} setPage={this.setPage.bind(this)}/>
				{body}
				<Footer />
			</div>
		);
	}
}
/* Render Method */
ReactDOM.render(
	<KSAppBox />, document.getElementById('ks-app-wrapper')
);