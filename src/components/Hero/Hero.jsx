import React, { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import { data } from "../../db.json";
import { CarouselCustomNavigation } from "./Carousel";
const { title, subtitle } = data[0].heroContent;
import { motion } from "framer-motion";
const Hero = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return (
		<>
			{/* Hero Area Start */}
			<section className="h-[800px] background-radial-gradient text-center lg:text-left">
				<div className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] h-full w-full">
					{windowWidth > 768 && <CarouselCustomNavigation />}
					<div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.45)] bg-fixed">
						<div className="flex h-full items-center justify-center">
							<motion.div
								initial={{ y: 200, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 1 }}
								className="max-w-full px-6 py-6 text-center text-neutral-200 md:py-0 md:px-12 z-50 "
							>
								<h1 className="mb-12 text-6xl font-bold leading-tight tracking-tight md:text-8xl xl:text-9xl text-white z-50">
									{title}
								</h1>
								<p className="text-lg mb-12 text-white z-50">{subtitle}</p>

								<Button
									className="text-white rounded-none bg-mintGreen  hover:bg-orange-500 z-50"
									size="lg"
									children="Learn More"
								/>
							</motion.div>
						</div>
					</div>
				</div>
			</section>
			{/* Hero Area End */}
		</>
	);
};

export default Hero;
