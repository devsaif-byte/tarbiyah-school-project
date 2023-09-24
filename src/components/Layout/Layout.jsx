import React from "react";
import Hero from "../Hero/Hero";
import WhyWe from "../WhyWe/WhyWe";
import Services from "../Services/Services";
import Essentials from "../Essentials/Essentials";
import Contact from "../Contact/Contact";
import About from "../../pages/AboutUs/About";
import Facilities from "../Facilities/Facilities";

const Layout = () => {
	return (
		<section className="container-md mx-auto grid grid-rows-1 gap-0 justify-center">
			<div className="flex grid-cols-1 overflow-hidden">
				<div className="w-full">
					<Hero />
					<Facilities />
					<Essentials />
					{/* <Services/> */}
					<WhyWe />
					{/* <Teachers></Teachers> */}
					<Contact />
				</div>
			</div>
		</section>
	);
};

export default Layout;
