import React from "react";
import Hero from "../Hero/Hero";
import Facilities from "../Facilities/Facilities";
import Essentials from "../Essentials/Essentials";
import Contact from "../Contact/Contact";
import { ProfileCard } from "../Staffs/Profile";
const Layout = () => {
	return (
		<section className="container-md mx-auto grid grid-rows-1 gap-0 justify-center">
			<div className="flex grid-cols-1 overflow-hidden text-left">
				<div className="w-full">
					<Hero />
					<Facilities />
					<Essentials />
					<ProfileCard/>
					<Contact />
				</div>
			</div>
		</section>
	);
};

export default Layout;
