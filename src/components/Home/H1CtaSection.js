import React, {Component} from 'react';
import Link from "next/link";

class H1CtaSection extends Component {
	render() {
		return (
			<div className="cta-area pt-100 pb-90" style={{backgroundImage: `url(${'assets/img/bg/bg2.jpg'})`}}>
				<div className="container">
					<div className="row">
						<div className="col-xl-8 col-lg-8 col-md-8">
							<div className="cta-wrapper mb-15">
								<div className="cta-img">
									{/*<img src={require("../../../public/assets/img/shape/3.png")} alt="shape"/>*/}
								</div>
								<div className="cta-text">
									<h1>Gokul Organics</h1>
									<p>
										100% PURE VermiCompost - Simple Grow Worm Castings are "Nature's Perfect Plant Food"
										Nutrient-Rich Soil Supplement - Packed with nutrients, trace minerals, humus and healthy microbes. Your plants will love it!
										Approved for Organic Use! - This worm castings organic fertilizer is the perfect addition to any garden soil.
										Safe for All Types of Plants - Not all garden fertilizers work with every plant. Simple Grow is versatile and the perfect addition to any gardening soil.
										No Chemicals, Fillers, or Additives - In the bag, you'll find nothing but worm castings. This isn't just vermicompost, but is pure, filtered worm casting.
									</p>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-4">
							{/*<div className="cta-button mb-15 text-md-right">
								<Link href="/about" as="/about" >
									<a className="btn">Visit Now</a>
								</Link>
							</div>*/}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default H1CtaSection;
