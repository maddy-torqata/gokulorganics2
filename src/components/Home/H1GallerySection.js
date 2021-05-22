import React, {Component} from 'react';

class H1GallerySection extends Component {
	render() {
		return (
			<div className="gallery-area pb-80">
				<div className="container">
					<div className="row">
						<div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
							<div className="section-title text-center section-circle mb-70">
								<div className="section-img">
								{/*	<img src={require("../../../public/assets/img/product/01.png")} alt=""/>*/}
								</div>
								<h1>Gokul Organics Brand Gallery</h1>
								<p>
									Here is the gallery of our list of products:
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="container-fluid">
					<div className="row">
						<div className="col-xl-3 col-lg-3 col-md-6">
							<div className="gallery-wrapper mb-30">
								<div className="gallery-img">
									<a href="#"><img src={require("../../../public/assets/img/product/product1.png")}
									                 alt=""/></a>
									<div className="gallery-icon">
										<a className="popup-image"
										   href={require("../../../public/assets/img/product/product1.png")}>
											<i className="ti-plus"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							<div className="gallery-wrapper mb-30">
								<div className="gallery-img">
									<a href="#"><img src={require("../../../public/assets/img/product/product2.png")}
									                 alt=""/></a>
									<div className="gallery-icon">
										<a className="popup-image"
										   href={require("../../../public/assets/img/product/product2.png")}>
											<i className="ti-plus"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							<div className="gallery-wrapper mb-30">
								<div className="gallery-img">
									<a href="#"><img src={require("../../../public/assets/img/product/product3.png")}
									                 alt=""/></a>
									<div className="gallery-icon">
										<a className="popup-image"
										   href={require("../../../public/assets/img/product/product3.png")}>
											<i className="ti-plus"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							<div className="gallery-wrapper mb-30">
								<div className="gallery-img">
									<a href="#"><img src={require("../../../public/assets/img/product/product4.png")}
									                 alt=""/></a>
									<div className="gallery-icon">
										<a className="popup-image"
										   href={require("../../../public/assets/img/product/product4.png")}>
											<i className="ti-plus"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							<div className="gallery-wrapper mb-30">
								<div className="gallery-img">
									<a href="#"><img src={require("../../../public/assets/img/product/product5.png")}
									                 alt=""/></a>
									<div className="gallery-icon">
										<a className="popup-image"
										   href={require("../../../public/assets/img/product/product5.png")}>
											<i className="ti-plus"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							<div className="gallery-wrapper mb-30">
								<div className="gallery-img">
									<a href="#"><img src={require("../../../public/assets/img/product/product6.png")}
									                 alt=""/></a>
									<div className="gallery-icon">
										<a className="popup-image"
										   href={require("../../../public/assets/img/product/product6.png")}>
											<i className="ti-plus"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							<div className="gallery-wrapper mb-30">
								<div className="gallery-img">
									<a href="#"><img src={require("../../../public/assets/img/product/product7.png")}
									                 alt=""/></a>
									<div className="gallery-icon">
										<a className="popup-image"
										   href={require("../../../public/assets/img/product/product7.png")}>
											<i className="ti-plus"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6">
							<div className="gallery-wrapper mb-30">
								<div className="gallery-img">
									<a href="#"><img src={require("../../../public/assets/img/product/product8.png")}
									                 alt=""/></a>
									<div className="gallery-icon">
										<a className="popup-image"
										   href={require("../../../public/assets/img/product/product8.png")}>
											<i className="ti-plus"></i>
										</a>
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

export default H1GallerySection;
