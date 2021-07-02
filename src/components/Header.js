import React from "react";
import styled from "styled-components";
import Images from "../Images/index.js";

const Nav = styled.nav`
	padding: 34px;
	z-index: 10;
	position: fixed;
	width: 100%;
	.logo {
		font-size: 35px;
	}
	.nav-wrapper {
		display: flex;
		justify-content: space-between;
		color: ${(props) => props.theme.white};

		.menu-list {
			display: flex;
			li {
				a {
					color: ${(props) => props.theme.white};
					margin-left: 25px;
					font-weight: 600;
					@media (max-width: 480px) {
						margin-left: 0;
					}
				}
			}

			.contact-btn {
				padding: 10px 20px;
				background-color: ${(props) => props.theme.white};
				color: ${(props) => props.theme.dark_blue};
				border-radius: 20px;
				font-weight: 900;
				@media (max-width: 767px) {
					background-color: ${(props) => props.theme.yellow};
					color: ${(props) => props.theme.white};
				}
				&:hover {
					background-color: ${(props) => props.theme.light_sky_blue};
					color: ${(props) => props.theme.white};
				}
			}
			@media (max-width: 767px) {
				flex-direction: column;
				justify-content: space-evenly;
				height: 40vh;
				background-color: #fff;
				position: absolute;
				opacity: 0;
				top: 100px;
				left: 10%;
				width: 80%;
				transition: all 0.5s ease-in-out;
				z-index: 100;

				&::after {
					content: "";
					position: absolute;
					border-style: solid;
					border-width: 23px 25px 0px 0;
					display: block;
					right: 0px;
					border-color: transparent white;
					width: 0;
					z-index: 1;
					top: -23px;
				}

				li a {
					color: ${(props) => props.theme.dark_blue};
				}
			}
		}
		.menu-list.active {
			opacity: 1;
			z-index: 999;
			position: absolute;
		}

		.hamburger {
			max-width: 35px;
			height: 25px;
			opacity: 0;
			position: absolute;
			right: 20px;
			z-index: 999;
			@media (max-width: 767px) {
				opacity: 1;
				z-index: 999;
			}
		}

		.menu {
			position: fixed;
			z-index: 999;
			width: 30px;
			height: 30px;
			right: 25px;
			display: none;
			.menu-line {
				width: 100%;
				height: 2px;
				background-color: white;
				margin: 3px 0;
			}
			@media (max-width: 767px) {
				display: block;
			}
		}
		.menu.active {
			transform: rotate(45deg);
		}
		.active .menu-line-1 {
			transform: rotate(270deg) translateX(-0.4rem);
		}
		.active .menu-line-2 {
			transform: rotate(360deg);
		}
	}
	/* @media (max-width: 767px) {
		.menu-wrapper {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100vh;
			position: absolute;
			top: 100px;
			left: 0px;
		}
	} */
`;

const Header = () => {
	const handleClick = (e) => {
		e.preventDefault();
		const hamburger = document.querySelector(".hamburger");
		const menu = document.querySelector(".menu");
		const tragetItem = document.querySelectorAll(".target");
		const menuList = document.querySelector(".menu-list");

		hamburger.addEventListener("click", function () {
			menuList.classList.toggle("active");
		});
		// menu.addEventListener("click", function () {
		// 	tragetItem.forEach((el) => {
		// 		el.classList.toggle("active");
		// 	});
		// });
	};

	return (
		<div>
			<Nav>
				<div className="nav-wrapper">
					<div className="logo">
						<h2>Sunnyside</h2>
					</div>
					<img
						src={Images.image_hamburger}
						alt=""
						className="hamburger"
						onClick={handleClick}
					/>
					{/* <div class="menu target" onClick={handleClick}>
						<div class="menu-line menu-line-1"></div>
						<div class="menu-line menu-line-2"></div>
					</div> */}
					<div className="menu-wrapper">
						<ul className="menu-list target">
							<li>
								<a href="">About</a>
							</li>
							<li>
								<a href="">Services</a>
							</li>
							<li>
								<a href="">Projects</a>
							</li>
							<li>
								<a href="" className="contact-btn">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</Nav>
		</div>
	);
};

export default Header;
