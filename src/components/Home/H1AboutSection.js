import React, {Component} from 'react';
import Link from "next/link";

class H1AboutSection extends Component {
	render() {
		return (
			<div className="about-us-area pt-115 pb-90" style={{backgroundImage: `url(${'assets/img/bg/organic_farm.jpeg'})`}}>
				<div className="container">
					<div className="row">
						<div className="col-xl-6 col-lg-6">
							<div className="about-us-img mb-30">
							{/*	<img src={require("../../../public/assets/img/about/1.png")} alt="about"/>*/}
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 ">
							<div className="about-us-text mb-30">
								<h1>Welcome To <br/>Gokul Organics</h1>
								<span>Organic Fertilizer</span>
								<p>
									100% PURE VermiCompost - Simple Grow Worm Castings are "Nature's Perfect Plant Food"
									Nutrient-Rich Soil Supplement - Packed with nutrients, trace minerals, humus and healthy microbes. Your plants will love it!
									Approved for Organic Use! - This worm castings organic fertilizer is the perfect addition to any garden soil.
									Safe for All Types of Plants - Not all garden fertilizers work with every plant. Simple Grow is versatile and the perfect addition to any gardening soil.
									No Chemicals, Fillers, or Additives - In the bag, you'll find nothing but worm castings. This isn't just vermicompost, but is pure, filtered worm casting.
								</p>
								{/*<Link href="/about" as="/about" >
									<a className="btn">Learn More</a>
								</Link>*/}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default H1AboutSection;
