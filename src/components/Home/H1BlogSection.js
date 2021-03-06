import React, {Component} from 'react';
import Link from "next/link";

class H1BlogSection extends Component {
	render() {
		return (
			<div className="blog-area pt-110 pb-90" style={{backgroundImage: `url(${'assets/img/bg/blog-bg.png'})`}}>
				{/*<div className="container">
					<div className="row">
						<div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
							<div className="section-title text-center section-circle mb-70">
								<div className="section-img">
									<img src={require("../../../public/assets/img/shape/1.png")} alt="shape"/>
								</div>
								<h1>Zomata Blog</h1>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmotempor incididunt
									ut
									labore et dolore magna aliqua enim minim veniam
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-4 col-lg-4 col-md-12">
							<div className="blog-wrapper mb-30">
								<div className="blog-img">
									<Link href="/monthly-web-development-was-update-just-time-design-variable-fallbacks-zomata." as="/monthly-web-development-was-update-just-time-design-variable-fallbacks-zomata." >
										<a>
											<img src={require("../../../public/assets/img/blog/blog1.jpg")} alt="blog"/>
										</a>
									</Link>
								</div>
								<div className="blog-text">
									<h4>
										<Link href="/monthly-web-development-was-update-just-time-design-variable-fallbacks-zomata." as="/monthly-web-development-was-update-just-time-design-variable-fallbacks-zomata." >
											<a>
												Monthly Web Development Was Update Just Time Design Variable Fallbacks Zomata.
											</a>
										</Link>
									</h4>
									<div className="blog-meta">
										<span><i className="dripicons-user"></i>Kelvin Perales</span>
										<span><i className="dripicons-calendar"></i>30 Dec 2018</span>
										<span><i className="dripicons-conversation"></i>(02)</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-12">
							<div className="blog-wrapper mb-30">
								<div className="blog-img">
									<Link href="/how-to-build-a-virtual-reality-is-see-model-with-a-real-time-cross-device-preview-world." as="/how-to-build-a-virtual-reality-is-see-model-with-a-real-time-cross-device-preview-world." >
										<a>
											<img src={require("../../../public/assets/img/blog/blog2.jpg")} alt="blog"/>
										</a>
									</Link>
								</div>
								<div className="blog-text">
									<h4>
										<Link href="/how-to-build-a-virtual-reality-is-see-model-with-a-real-time-cross-device-preview-world." as="/how-to-build-a-virtual-reality-is-see-model-with-a-real-time-cross-device-preview-world." >
											<a>
												How To Build A Virtual Reality Is See Model With A Real-Time Cross Device
												Preview world.
											</a>
										</Link>
									</h4>
									<div className="blog-meta">
										<span><i className="dripicons-user"></i>Kelvin Perales</span>
										<span><i className="dripicons-calendar"></i>30 Dec 2018</span>
										<span><i className="dripicons-conversation"></i>(02)</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-12">
							<div className="blog-wrapper mb-30">
								<div className="blog-img">
									<Link href="/practical-suggestions-to-improve-usability-of-landing-pages-with-animation-from-slides." as="/practical-suggestions-to-improve-usability-of-landing-pages-with-animation-from-slides." >
										<a>
											<img src={require("../../../public/assets/img/blog/blog3.jpg")} alt="blog"/>
										</a>
									</Link>
								</div>
								<div className="blog-text">
									<h4>
										<Link href="/practical-suggestions-to-improve-usability-of-landing-pages-with-animation-from-slides." as="/practical-suggestions-to-improve-usability-of-landing-pages-with-animation-from-slides." >
											<a>
												Practical Suggestions To Improve Usability Of Landing Pages With Animation From Slides.
											</a>
										</Link>
									</h4>
									<div className="blog-meta">
										<span><i className="dripicons-user"></i>Kelvin Perales</span>
										<span><i className="dripicons-calendar"></i>30 Dec 2018</span>
										<span><i className="dripicons-conversation"></i>(02)</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>*/}
			</div>
		);
	}
}

export default H1BlogSection;
