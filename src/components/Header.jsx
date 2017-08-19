import { Component } from 'react'
import { NavLink } from 'react-router-dom'

/* Shared Header */
export class Header extends Component {
	render() {
		return (
			<header id="ks-header-row" className="row">
				<div id="ks-header-col" className="col-sm-10 offset-sm-1">
					<div id="ks-header-title">Karan Sekhri</div>
					<nav id="ks-header-menu">
						<NavLink exact to="/" className="ks-header-menu-item" activeClassName="active">
							About
						</NavLink>
						<div className="ks-header-menu-spacer">•</div>
						<NavLink to="/portfolio" className="ks-header-menu-item" activeClassName="active">
							Portfolio
						</NavLink>
					</nav>
				</div>
			</header>
		);
	}
}