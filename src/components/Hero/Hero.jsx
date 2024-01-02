import React from "react";
import { data } from "../../db.json";
import { CarouselCustomNavigation } from "./Carousel";
import { Button } from "@material-tailwind/react";
const Hero = () => {
	const { title, subtitle } = data[0].heroContent;

	return (
		<>
			{/* Hero Area Start */}
			<section className="h-[800px] background-radial-gradient text-center lg:text-left">
				<div className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] h-full w-full">
					<div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.45)] bg-fixed z-10">
						<div className="flex h-full items-center justify-center">
							<div className="max-w-full px-6 py-6 text-center text-neutral-200 md:py-0 md:px-12 z-10">
								<h1 className="mb-12 text-6xl font-bold leading-tight tracking-tight md:text-8xl xl:text-9xl text-white">
									{title}
								</h1>
								<p className="text-lg mb-12 text-white">{subtitle}</p>

								<Button
									className="text-white rounded-none outline outline-white hover:bg-mintGreen"
									variant="outlined"
									size="lg"
									children="Learn More"
								/>
							</div>
						</div>
					</div>
					<CarouselCustomNavigation />
				</div>
			</section>
			{/* Hero Area End */}
		</>
	);
};

export default Hero;
