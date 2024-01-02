import React from "react";
import Hero from "../Hero/Hero";
import Facilities from "../Facilities/Facilities";
import Essentials from "../Essentials/Essentials";
import Contact from "../Contact/Contact";
import Staffs from "../Staffs/Staffs";
// import Testimonial from "../Testimonial/Testimonial";
const Layout = () => {
	return (
		<section className="container-md mx-auto grid grid-rows-1 gap-0 justify-center">
			<div className="flex grid-cols-1 overflow-hidden text-left">
				<div className="w-full">
					<Hero />
					<Facilities />
					<Essentials />
					<Staffs />
					{/* <Testimonial /> */}
					<Contact />
				</div>
			</div>
		</section>
	);
};

export default Layout;
