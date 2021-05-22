import React, {Component} from 'react';

class H1ChooseUsSection extends Component {
	render() {
		return (
			<div className="choose-us-area pt-100 pb-70 pos-relative">
				<div className="shape spahe2 bounce-animate">
					<img src={require("../../../public/assets/img/shape/why-shape.png")} alt=""/>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-xl-7 col-lg-12">
							<div className="choose-img mb-30">
								<img src={require("../../../public/assets/img/choose/01.jpg")} alt=""/>
							</div>
						</div>
						<div className="col-xl-5 col-lg-12">
							<div className="choose-wrapper mb-30">
								<div className="choose-section">
									<h1>Why Choose Us</h1>
									<p>
										Since they are the ultimate slow-release fertilizers, it’s very difficult to over fertilize (and harm) your plants.
									</p>
								</div>
								<div className="choose-content mb-40">
									<div className="choose-us-img">
										<img src={require("../../../public/assets/img/icon/1.png")} alt=""/>
									</div>
									<div className="choose-text">
										<h4>Natural Process</h4>
										<p>
											There’s little to no risk of toxic buildups of chemicals and salts that can be deadly to plants.
										</p>
									</div>
								</div>
								<div className="choose-content mb-40">
									<div className="choose-us-img">
										<img src={require("../../../public/assets/img/icon/2.png")} alt=""/>
									</div>
									<div className="choose-text">
										<h4>100% Organic Products</h4>
										<p>
											Organic fertilizers are renewable, biodegradable, sustainable, and environmentally friendly.
										</p>
									</div>
								</div>
								<div className="choose-content">
									<div className="choose-us-img">
										<img src={require("../../../public/assets/img/icon/3.png")} alt=""/>
									</div>
									<div className="choose-text">
										<h4>Homegrown Goodness</h4>
										<p>
											Releasing nutrients, as organic fertilizers break down, they improve the structure of the soil and increase its ability to hold water and nutrients. Over time, organic fertilizers will make your soil–and plants–healthy and strong.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default H1ChooseUsSection;
