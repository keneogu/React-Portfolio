import React from 'react';
import crypto from '../../images/crypto.png';
import direct from '../../images/direct-hotel.png';
import telegram from '../../images/telegram.png';
import tictactoe from '../../images/tictactoe.png';
import twitter from '../../images/twitter-redesign.png';
import './Portfolio.css';

const Portfolio = () => {
	return (
		<div className="main-content">
			<section className="portfolio section" id="portfolio">
				<div className="container">
					<div className="row">
						<div className="section-title padd-15">
							<h2>Portfolio</h2>
						</div>
					</div>
					<div className="row">
						<div className="portfolio-heading">
							<h2>My Last Projects :</h2>
						</div>
					</div>
					<div className="row">
						<div className="portfolio-item padd-15">
							<div className="portfolio-item-inner shadow-dark">
								<div className="portfolio-img">
									<img src={crypto} alt="" />
								</div>
								<p>This app is made with React and Redux, and its purpose is to fetch data for various cryptocurrencies from
										an external api and you can also filter data to get a specific coin.</p>
							</div>
						</div>
						<div className="portfolio-item padd-15">
							<div className="portfolio-item-inner shadow-dark">
								<div className="portfolio-img">
									<img src={direct} alt="" />
								</div>
								<p>This is a directory of hotels home page and a sample search results page. The website is build using the modern css.</p>
							</div>
						</div>
						<div className="portfolio-item padd-15">
							<div className="portfolio-item-inner shadow-dark">
								<div className="portfolio-img">
									<img src={telegram} alt="" />
								</div>
								<p>A telegram bot that displays information about west African countries Nigeria, Senegal, Togo, and Benin.</p>
							</div>
						</div>
						<div className="portfolio-item padd-15">
							<div className="portfolio-item-inner shadow-dark">
								<div className="portfolio-img">
									<img src={tictactoe} alt="" />
								</div>
								<p>The game involves two players each assigned a symbol X OR O. If any of the players has all his symbols aligned either horizontally,vertically ,diagnoally or antidiagnolly first then he/she becomes the winner. Otherwise, if the board is full and none of them has won then the game is a draw and thus game over..</p>
							</div>
						</div>
						<div className="portfolio-item padd-15">
							<div className="portfolio-item-inner shadow-dark">
								<div className="portfolio-img">
									<img src={twitter} alt="" />
								</div>
								<p>A ruby on rails social media app where users can sign up, follow one another, and post tweets.</p>
							</div>
						</div>
						<div className="portfolio-item padd-15">
							<div className="portfolio-item-inner shadow-dark">
								<div className="portfolio-img">
									<img src={crypto} alt="" />
								</div>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem inventore saepe obcaecati.</p>
							</div>
						</div>
					</div> 
				</div>
			</section>
		</div>
	)
}

export default Portfolio
