import { Component } from 'react'

/* Shared Footer */
export class Footer extends Component {
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