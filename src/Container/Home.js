import React from 'react'
import profile from '../images/profile.jpeg';
import {Link} from 'react-router-dom';

const Home = () => {
	return (
		<div className="main-content">
			<section className="home section">
				<div className="container">
					<div className="row">
						<div className="home-info padd-15">
							<h3 className="hello">Hello, my name is <span className="name">Kenechukwu Oguagbaka</span></h3>
							<h3 className="my-profession">I'm a <span className="typing">Web Developer</span></h3>
							<p>I'm a website Designer with extensive experirnce for over 10years. My epertise is to create and design a website</p>
							<Link to="/" className="btn hire-me">Hire Me</Link>
						</div>
						<div className="home-img padd-15">
							<img src={profile} alt="my photo" />
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Home
