import { Component } from 'react'
import { Header } from './Header.jsx'
import { Footer } from './Footer.jsx'
import { AboutBody } from './AboutBody.jsx'
import { PortfolioBody } from './PortfolioBody.jsx'

/* Root App Component */
export class App extends Component {
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