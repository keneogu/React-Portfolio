import React from 'react'
import './About.css';
import {Link} from 'react-router-dom';

const About = () => {
	return (
		<div className="main-content">
			<section className="about section" id="about">
				<div className="container">
					<div className="row">
						<div className="section-title padd-15">
							<h2>About Me </h2>
						</div>
					</div>
					<div className="row">
						<div className="about-content padd-15">
							<div className="row">
								<div className="about-text padd-15">
									<h3>I'm <span>Kenechukwu Oguagbaka</span> and a <span>Web Developer</span></h3>
									<p>Hi, My name is Kenechukwu Oguagbaka, and I’m a full-stack engineer who strives 
										to build performant web applications with a focus on user interaction and 
										accessibility with Ruby, Ruby on Rails, React, and JavaScript.</p>
										<br/>
									<p>I started my development journey by teaching myself how to code on freeCodeCamp, 
										Codecademy, Udemy, and YouTube courses by Brad Traversy before opting
										for the more structured learning offered by Microverse. I gained hands-on 
										experience coding under the direction of a team, collaborating on software projects, 
										and testing systems and applications. One of my responsibilities was developing 
										creative solutions across a variety of software platforms. Some of my accomplishments
										include helping to create mobile-ready expense tracking software for clients.</p>
								</div>
							</div>
							<div className="row">
								<div className="personal-info padd-15">
									<div className="row">
										<div className="info-item padd-15">
											<p>Birthday : <span>02 Feb 1992</span></p>
										</div>
										<div className="info-item padd-15">
											<p>Age : <span>30</span></p>
										</div>
										<div className="info-item padd-15">
											<p>Website : <span>www.domain.com</span></p>
										</div>
										<div className="info-item padd-15">
											<p>Email : <span>ogukene@gmail.com</span></p>
										</div>
										<div className="info-item padd-15">
											<p>Degree : <span>CS</span></p>
										</div>
										<div className="info-item padd-15">
											<p>Phone : <span>+2347065413398</span></p>
										</div>
										<div className="info-item padd-15">
											<p>City : <span>Enugu</span></p>
										</div>
										<div className="info-item padd-15">
											<p>Freelance : <span>Avaliable</span></p>
										</div>
									</div>
									<div className="row">
										<div className="buttons padd-15">
											<Link to="/home" className="btn">Download CV</Link>
											<Link to="/about" className="btn hire-me">Hire Me</Link>
										</div>
									</div>
								</div>
								<div className="skills padd-15">
									<div className="row">
										<div className="skill-item padd-15">
											<h5>JS</h5>
											<div className="progress">
												<div className="progress-in p-g-i-1"></div>
												<div className="skill-percent">86%</div>
											</div>
										</div>
										<div className="skill-item padd-15">
											<h5>React</h5>
											<div className="progress">
												<div className="progress-in" style={{width: "80%"}}></div>
												<div className="skill-percent">80%</div>
											</div>
										</div>
										<div className="skill-item padd-15">
											<h5>Ruby on Rails</h5>
											<div className="progress">
												<div className="progress-in p-g-i-2"></div>
												<div className="skill-percent">66%</div>
											</div>
										</div>
										<div className="skill-item padd-15">
											<h5>Ruby</h5>
											<div className="progress">
												<div className="progress-in p-g-i-3"></div>
												<div className="skill-percent">96%</div>
											</div>
										</div>
										<div className="skill-item padd-15">
											<h5>BOOTSTRAP</h5>
											<div className="progress">
												<div className="progress-in p-g-i-4"></div>
												<div className="skill-percent">76%</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="education padd-15">
									<h3 className="title">Education</h3>
									<div className="row">
										<div className="timeline-box padd-15">
											<div className="timeline shadow-dark">
												<div className="timeline-item">
													<div className="circle-dot"></div>
													<h3 className="timeline-date">
														<i className="fa fa-calendar"></i> 2012 - 2016
													</h3>
													<h4 className="timeline-title">Bachelor in Computer Science</h4>
													<p className="timeline-text">Spent 4+ years learning and mastering the importance of computing, data structure, modeling data, and solving algorithms</p>
												</div>
												<div className="timeline-item">
													<div className="circle-dot"></div>
													<h3 className="timeline-date">
														<i className="fa fa-calendar"></i> Nov 2020 - Sep 2021
													</h3>
													<h4 className="timeline-title">Remote Full Stack Web Development Program, Full Time</h4>
													<p className="timeline-text">Spent 1300+ hours mastering algorithms, data structures, and full-stack development while simultaneously developing projects with Ruby, Rails, JavaScript, React, and Redux</p>
													<br />
													<p className="timeline-text">Developed skills in remote pair-programming using GitHub, industry-standard git-flow, and daily standups to communicate and collaborate with international remote developers</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="experience padd-15">
									<h3 className="title">Experience</h3>
									<div className="row">
										<div className="timeline-box padd-15">
											<div className="timeline shadow-dark">
												<div className="timeline-item">
													<div className="circle-dot"></div>
													<h3 className="timeline-date">
														<i className="fa fa-calendar"></i> March 2021 – Present
													</h3>
													<h4 className="timeline-title">Technical Support Engineer</h4>
													<p className="timeline-text">Mentor junior web developers, providing technical support through code reviews</p>
													<br/>
													<p className="timeline-text">Propose improvements to code organization to improve code quality and overall performance</p>
													<br/>
													<p className="timeline-text">Provide advice and tips on how to maintain motivation to maintain longevity in the program</p>
												</div>
												<div className="timeline-item">
													<div className="circle-dot"></div>
													<h3 className="timeline-date">
														<i className="fa fa-calendar"></i> 2013 - 2015
													</h3>
													<h4 className="timeline-title">NASRDA</h4>
													<p className="timeline-text">Spent 3+ months on industrial training(IT) at the National Space Research and Development Agency (NASRDA) where I collaborated with their software Engineers to build their frontend page website</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default About
