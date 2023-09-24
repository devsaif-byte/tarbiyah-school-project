import React, { useEffect, useState } from "react";
// Initialization for ES Users
// import "./Navbar.css";
import logo from "/src/images/tarbiyah_logo.jpg";
import { Link, NavLink } from "react-router-dom";
import WhiteButton from "../Buttons/WhiteButton";

const Navbar = () => {
	
	const [show, setShow] = useState("top");
	const [lastScrollY, setLastScrollY] = useState(0);
	const [mobileMenu, setMobileMenu] = useState(false);
	const [isDropdownOpen, setDropdown] = useState(false);

	const controlNavbar = () => {
		if (window.scrollY > 200) {
			if (window.scrollY > lastScrollY && !mobileMenu) {
				setShow("hide");
			} else {
				setShow("show");
			}
		} else {
			setShow("top");
		}
		setLastScrollY(window.scrollY);
	};


	useEffect(() => {
		window.addEventListener("scroll", controlNavbar);
		return () => window.removeEventListener("scroll", controlNavbar);
	}, [lastScrollY]);


	const openSearch = () => {
		setMobileMenu(false);
		setShowSearch(true);
	};

	const openMobileMenu = () => {
		setMobileMenu(true);
		setShowSearch(false);
	};


	const toggleDropdown = () => {
		setDropdown(!isDropdownOpen);
	};
	return (
		<>
			{/* Navbar Start */}
			<nav className="bg-rose-800 ">
				<div className="px-8 mx-auto max-w-7xl">
					<div className="flex items-center justify-between h-16">
						<div className="w-full justify-between flex items-center">
							<NavLink className="flex-shrink-0" to="/">
								<img className="w-16 h-16" src={logo} alt="Workflow" />
							</NavLink>
							<div className="hidden md:block">
								<div className="flex items-baseline ml-10 space-x-4">
									<NavLink
										className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
										to="/"
									>
										Home
									</NavLink>
									<NavLink
										className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
										to="/about"
									>
										About us
									</NavLink>

									{/* <NavLink className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium"></NavLink> */}
									<div className="relative inline-block text-left">
										<div>
											<Link
												to=""
												className="inline-flex w-full justify-center gap-x-1.5 text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
												id="menu-button"
												aria-expanded={false}
												aria-haspopup="true"
												// onClick={toggleDropdown}
												onMouseOver={toggleDropdown}
											>
												Academics
												<svg
													className="-mr-1 h-5 w-5 text-gray-300"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
												>
													<path
														fillRule="evenodd"
														d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
														clipRule="evenodd"
													/>
												</svg>
											</Link>
										</div>
										{/*
												Dropdown menu, show/hide based on menu state.

												Entering: "transition ease-out duration-100"
												From: "transform opacity-0 scale-95"
												To: "transform opacity-100 scale-100"
												Leaving: "transition ease-in duration-75"
												From: "transform opacity-100 scale-100"
												To: "transform opacity-0 scale-95"
										*/}
										{isDropdownOpen && (
											<div
												className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-300 "
												role="menu"
												aria-orientation="vertical"
												aria-labelledby="menu-button"
												tabIndex={-1}
											>
												<div className="py-1" role="none">
													{/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
													<Link
														to="/programs"
														className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200"
														role="menuitem"
														tabIndex={-1}
														id="menu-item-0"
													>
														Programs
													</Link>
													<Link
														to="/parents"
														className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200"
														role="menuitem"
														tabIndex={-1}
														id="menu-item-1"
													>
														Parents
													</Link>
												</div>
											</div>
										)}
									</div>
									<NavLink
										className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
										to="/gallery"
									>
										Gallery
									</NavLink>

									<NavLink
										className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
										to="/contact"
									>
										Contact
									</NavLink>
								</div>
							</div>
						</div>
						<div className="block">
							<div className="flex items-center ml-4 md:ml-6"></div>
						</div>
						<div className="flex -mr-2 md:hidden">
							<button className="text-gray-800  hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
								<svg
									width={20}
									height={20}
									fill="currentColor"
									className="w-8 h-8"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
								</svg>
							</button>
						</div>
					</div>
				</div>
				<div className="hidden" onClick={(e)=> {console.log(e)}}>
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						<NavLink
							className="text-gray-300 hover:text-white  block px-3 py-2 rounded-md text-base font-medium"
							to="/#"
						>
							Home
						</NavLink>
						<NavLink
							className="text-gray-800  block px-3 py-2 rounded-md text-base font-medium"
							to="/#"
						>
							Gallery
						</NavLink>
						<NavLink
							className="text-gray-300 hover:text-white  block px-3 py-2 rounded-md text-base font-medium"
							to="/#"
						>
							Content
						</NavLink>
						<NavLink
							className="text-gray-300 hover:text-white  block px-3 py-2 rounded-md text-base font-medium"
							to="/#"
						>
							Contact
						</NavLink>
					</div>
				</div>
			</nav>

			{/* Navbar End */}
		</>
	);
};

export default Navbar;
