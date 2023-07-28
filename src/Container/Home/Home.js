import React from 'react'
import profile from '../../images/profile.jpeg';
import './Home.css';
import {Link} from 'react-router-dom';

const Home = () => {
	return (
		<div className="main-content">
			<section className="home section">
				<div className="container">
					<div className="row">
						<div className="home-info padd-15">
							<h3 className="hello">Hello, my name is <span className="name">Kenechukwu Oguagbaka</span></h3>
							<h3 className="my-profession">I'm a <span className="typing">Software Engineer</span></h3>
							<p>I’m a full-stack engineer who strives to build performant web applications 
								with a focus on user interaction and accessibility with Ruby, Ruby on Rails, Node, Express,
								React, and JavaScript.</p>
							<Link to="/" className="btn hire-me">Hire Me</Link>
						</div>
						<div className="home-img padd-15">
							<img src={profile} alt="my profile pics" />
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Home
