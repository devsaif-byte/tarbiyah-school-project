import React from "react";
import Hero from "../Hero/Hero";
import Facilities from "../Facilities/Facilities";
import Services from "../Services/Services";
import Essentials from "../Essentials/Essentials";
import Contact from "../Contact/Contact";
import About from "../../pages/AboutUs/About";
import { CarouselTransition } from "../Hero/Carousel";
const Layout = () => {
	return (
		<section className="container-md mx-auto grid grid-rows-1 gap-0 justify-center">
			<div className="flex grid-cols-1 overflow-hidden text-left">
				<div className="w-full">
					<Hero />
					<About/>
					<Facilities />
					<Essentials />
					<Services/>
					{/* <Teachers></Teachers> */}
					<Contact />
				</div>
			</div>
		</section>
	);
};

export default Layout;
