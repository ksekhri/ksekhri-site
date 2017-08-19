import { Component } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { App } from './components/App.jsx'

export class Routes extends Component {
	render() {
		return(
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={App} />
					<Route exact path="/portfolio" component={App} />
					<Route component={App} />
				</Switch>
			</BrowserRouter>
		);
	}
}