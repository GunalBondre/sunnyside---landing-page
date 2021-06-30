import React from "react";
import styled from "styled-components";
import Images from "../Images/index.js";

const HeroSection = styled.section`
	position: relative;
	height: 100vh;

	img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
	}
	h1 {
		position: relative;
		z-index: 5;
		top: 100px;
	}

	.arrow-icon {
		img {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 100%;
			height: 100%;
			max-width: 50px;
			max-height: 100px;
		}
	}
`;

const Section2 = styled.section`
	width: 100%;
	z-index: 5;
	position: relative;

	.about-us-wrapper {
		display: flex;

		.right-section,
		.left-section {
			width: 50%;
		}

		.left-section,
		.right-section {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

		.title2,
		.para1 {
			max-width: 400px;
			text-align: left;
		}
		.title2 {
			color: ${(props) => props.theme.dark_blue};
			font-weight: 900;
			font-family: Fraunces;
		}

		.learn-more-btn {
			text-align: left;
			a {
				color: ${(props) => props.theme.dark_blue};
				font-weight: 900;
				font-family: Fraunces;
				text-align: left;
				cursor: pointer;
			}
		}
		@media (max-width: 480px) {
			flex-direction: column;
			.right-section,
			.left-section {
				width: 100%;
				height: 50vh;
			}

			.title2,
			.para1 {
				max-width: 400px;
				text-align: center;
			}
			.left2 {
				order: 2;
			}
			.right2 {
				order: 1;
			}
		}
	}

	.services {
		position: relative;
		.content {
			position: absolute;
			bottom: 10px;

			.para1 {
				text-align: center;
			}
		}
	}
`;

const Section3 = styled.section`
	.client-testimonials {
		.title3 {
			letter-spacing: 4px;
			font-weight: 700;
			text-transform: uppercase;
		}
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		height: 100vh;
		.testomonial-wrapper {
			display: grid;
			grid-template-columns: repeat(3, 1fr);

			@media (max-width: 480px) {
				grid-template-columns: repeat(1, 1fr);
			}

			.client-testimonials__content {
				padding: 0 30px;
				img {
					max-width: 100px;
					border-radius: 50%;
				}
				.paragraph {
					padding: 30px 0;
				}
				.testomonial-heading {
					span {
						padding: 20px 0;
						font-size: 12px;
					}
				}
			}
		}
	}
`;

const Section4 = styled.section`
	width: 100%;
	.section-4-wrapper {
		display: grid;
		grid-template-columns: repeat(4, 1fr);

		@media (max-width: 767px) {
			grid-template-columns: repeat(1, 1fr);
		}
	}
`;

const Footer = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.footer-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		height: 40vh;
		width: 20%;

		.logo {
			font-weight: 900;
			letter-spacing: 1px;
			font-size: 30px;
		}
		.menu-items {
			display: flex;
			justify-content: space-evenly;
			a {
				color: ${(props) => props.theme.very_dark_desaturated_blue};
			}
		}

		.social-icons {
			display: flex;
			justify-content: space-evenly;
			img {
				max-width: 20px;
			}
		}
	}
`;
const Home = () => {
	return (
		<div>
			<HeroSection>
				<h1 className="title1">We Are Creatives</h1>
				<img src={Images.image_header} alt="banner image" />
				<div className="arrow-icon">
					<img src={Images.icon_arrow_down} alt="arrow-icon" />
				</div>
			</HeroSection>

			<Section2>
				<div className="about-us-wrapper ">
					<div className="left-section left1">
						<h2 className="title2">Transform your brand</h2>
						<p className="para1">
							We are full service creative agency specialised in helping brands
							grow fast. engage your clients through compelling visuals that do
							most of marketing for you
						</p>
						<div className="learn-more-btn">
							<a href="" className="learn-btn">
								LEARN MORE
							</a>
						</div>
					</div>
					<div className="right-section right1">
						<img src={Images.image_transform} alt="" />
					</div>
				</div>
			</Section2>

			<Section2>
				<div className="about-us-wrapper">
					<div className="left-section left2">
						<img src={Images.image_stand_out} alt="" />
					</div>
					<div className="right-section right2">
						<h2 className="title2">Stand out to the right audiance</h2>
						<p className="para1">
							Using collaborative formula for designers, researchers,
							photographers, videographers and copyrighters we will build and
							extend your brand in digital world
						</p>
						<div className="learn-more-btn">
							<a href="" className="learn-btn">
								LEARN MORE
							</a>
						</div>
					</div>
				</div>
			</Section2>

			<Section2>
				<div className="about-us-wrapper services">
					<div className="left-section">
						<img
							src={Images.image_graphic_design}
							alt="image_graphic_design"
							className="img-photo"
						/>
						<div className="content">
							<h3 className="title3">Graphic Design</h3>
							<p className="para1">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
								laboriosam praesentium ullam tempore facere itaque dicta ducimus
								in deleniti et.
							</p>
						</div>
					</div>
					<div className="right-section">
						<img
							src={Images.image_photography}
							alt="image_graphic_design"
							className="img-photo1"
						/>
						<div className="content">
							<h3 className="title3">Photography</h3>
							<p className="para1">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
								laboriosam praesentium ullam tempore facere itaque dicta ducimus
								in deleniti et.
							</p>
						</div>
					</div>
				</div>
			</Section2>

			<Section3>
				<div className="client-testimonials">
					<h3 className="title3">Client Testomonials</h3>
					<div className="testomonial-wrapper">
						<div className="client-testimonials__content">
							<div className="image">
								<img src={Images.image_emily} alt="emily image" />
							</div>
							<div className="paragraph">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Blanditiis, aut.
							</div>
							<div className="testomonial-heading">
								<h4 className="title4">Emily jones</h4>
								<span>Marketing Director</span>
							</div>
						</div>
						<div className="client-testimonials__content">
							<div className="image">
								<img src={Images.image_jennie} alt="jennie image" />
							</div>
							<div className="paragraph">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
								ipsa!
							</div>
							<div className="testomonial-heading">
								<h4 className="title4">jennie jones</h4>{" "}
								<span>Chief Operating Officer</span>
							</div>
						</div>
						<div className="client-testimonials__content">
							<div className="image">
								<img src={Images.image_thomas} alt="thomas image" />
							</div>
							<div className="paragraph">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
								ipsam.
							</div>
							<div className="testomonial-heading">
								<h4 className="title4">thomas jones</h4>
								<span>Business Owner</span>
							</div>
						</div>
					</div>
				</div>
			</Section3>

			<Section4>
				<div className="section-4-wrapper">
					<img src={Images.image_2} alt="GRID IMAGES" />
					<img src={Images.image_3} alt="GRID IMAGES" />
					<img src={Images.image_1} alt="GRID IMAGES" />
					<img src={Images.image_4} alt="GRID IMAGES" />
				</div>
			</Section4>

			<Footer>
				<div className="footer-wrapper">
					<div className="logo">Sunnyside</div>
					<div className="menu-wrapper">
						<ul className="menu-items">
							<li>
								<a href="">About</a>
							</li>
							<li>
								<a href="">Services</a>
							</li>
							<li>
								<a href="">Projects</a>
							</li>
						</ul>
					</div>
					<div className="social-icons">
						<img src={Images.image_fb} alt="fb" />
						<img src={Images.image_insta} alt="insta" />
						<img src={Images.image_pinterest} alt="pinterest" />
						<img src={Images.image_twitter} alt="twitter" />
					</div>
				</div>
			</Footer>
		</div>
	);
};

export default Home;
