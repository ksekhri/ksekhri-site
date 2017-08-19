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
	setPage() {
		if (this.props.location.pathname === "/portfolio") {
			return (<PortfolioBody/>);
		} else {
			return (<AboutBody/>);
		}
	}
	render() {
		return (
			<div id="ks-app" className="container-fluid">
				<Header selectedPage={this.state.selectedPage} PageSelection={this.PageSelection} setPage={this.setPage.bind(this)}/>
				{this.setPage()}
				<Footer />
			</div>
		);
	}
}