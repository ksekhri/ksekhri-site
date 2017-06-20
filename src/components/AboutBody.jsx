import { Component } from 'react'

/* About Page Body */
export class AboutBody extends Component {
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
								<div className="col-sm-12 ks-hero-body">A small, passionate, principled team where I'm given the opportunity, support, and resources to build consumer products that make a difference in the world.</div>
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
