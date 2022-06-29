import React from 'react';
import './Contact.css';

const Contact = () => {
	return (
		<div className="main-content">
			<section className="contact section" id="contact">
				<div className="container">
					<div className="row">
						<div className="section-title padd-15">
							<h2>Contact Me</h2>
						</div>
					</div>
					<h3 className="contact-title">Have You Any Questions ?</h3>
					<h4 className="contact-sub-title">I'm at your service</h4>
					<div className="row">
						<div className="contact-info-item padd-15">
							<div className="icon"><i className="fa-brands fa-linkedin fa"></i></div>
							<h4><a href="https://www.linkedin.com/in/kene-ogu/" target="_blank" rel="noreferrer">LinkendIn</a></h4>
						</div>
						<div className="contact-info-item padd-15">
							<div className="icon"><i className="fa-brands fa-github fa"></i></div>
							<h4><a href="https://www.github.com/keneogu/" target="_blank" rel="noreferrer">Github</a></h4>
						</div>
						<div className="contact-info-item padd-15">
							<div className="icon"><i className="fa fa-envelope"></i></div>
							<h4><a href="mailto:ogukene@gmail.com" target="_blank" rel="noreferrer">Email</a></h4>
						</div>
						<div className="contact-info-item padd-15">
							<div className="icon"><i className="fa-brands fa-twitter fa"></i></div>
							<h4><a href="https://www.twitter.com/keneogu/" target="_blank" rel="noreferrer">Twitter</a></h4>
						</div>
					</div>
					<h3 className="contact-title">Send me an Email</h3>
					<h4 className="contact-sub-title">I'm very responsive to messages</h4>
				</div>

				<div className="row">
					<div className="contact-form padd-15">
						<div className="row">
							<div className="form-item col-6 padd-15">
								<div className="form-group">
									<input type="text" className="form-control" placeholder="name" />
								</div>
							</div>
							<div className="form-item col-6 padd-15">
								<div className="form-group">
									<input type="text" className="form-control" placeholder="Email" />
								</div>
							</div>
						</div>

						<div className="row">
							<div className="form-item col-12 padd-15">
								<div className="form-group">
									<input type="text" className="form-control" placeholder="Subject" />
								</div>
							</div>
						</div>
						<div className="row">
							<div className="form-item col-12 padd-15">
								<div className="form-group">
									<textarea name="" className="form-control" id="" placeholder="Mesaage"></textarea>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="form-item col-12 padd-15">
								<div className="form-group">
									<button type="submit" className="btn">Send Message</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Contact
