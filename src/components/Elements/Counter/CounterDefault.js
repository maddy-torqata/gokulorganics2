import React, {useState} from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const CounterDefault = () => {

	const [isViewCount, setIsViewCount] = useState(false);

	const onVisibilityChange = isVisible => {
		if (isVisible) {
			setIsViewCount(!isViewCount);
		}
	}

	const counters = [
		{
			countNum: 7,
			countTitle: 'Years Experience'
		},
		{
			countNum: 100,
			countTitle: 'Quality'
		},
		{
			countNum: 2,
			countTitle: 'Certifications'
		},
		{
			countNum: 10,
			countTitle: 'Managing Partners'
		}
	];

	return (
		<div className="counter-area pt-110 pb-85" style={{backgroundImage: `url(${'assets/img/bg/bg3.jpg'})`}}>
			<div className="container">
				{counters &&
				<div className="row">
					<div className="col-xl-12">
						<div className="counter-title text-center mb-60">
							<h1>We Are Experts In Field <br/> Organic Movement.</h1>
						</div>
					</div>
					{counters.map((counter, num) => (
						<div key={num} className="col-xl-3 col-lg-3 col-md-6">
							<div className="counter-wrapper mb-30">
								<div className="counter-text">
									<h1>
										<VisibilitySensor onChange={onVisibilityChange} offset={{top: 10}}
										                  delayedCall>
											<CountUp end={!isViewCount ? counter.countNum : 0}/>
										</VisibilitySensor>
										+
									</h1>
									<span>{counter.countTitle}</span>
								</div>
							</div>
						</div>
					))}
				</div>
				}
			</div>
		</div>
	)
}
export default CounterDefault;
