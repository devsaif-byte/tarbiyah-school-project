import React from "react";
import "./Hero.css";
import { heroContent } from "../../data";
import bgImage from "../../images/carosel-2.webp";
import { Link } from "react-router-dom";
import RedButton from "../Buttons/RedButton";
import WhiteButton from "../Buttons/WhiteButton";
const Hero = () => {
	const { title, subtitle } = heroContent;
	return (
		<>
			{/* Hero Area Start */}
			<section className="h-[800px] background-radial-gradient mb-32 text-center lg:text-left">
				<div className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('https://shorturl.at/kyBOR')] h-full w-full">
					<div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
						<div className="flex h-full items-center justify-center">
							<div className="max-w-full px-6 py-6 text-center text-neutral-200 md:py-0 md:px-12">
								<h1 className="mb-12 text-6xl font-bold leading-tight tracking-tight md:text-8xl xl:text-9xl">
									{title}
								</h1>
								<p className="text-lg mb-12">{subtitle}</p>
								<WhiteButton text="Learn More" />
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Hero Area End */}
		</>
	);
};

export default Hero;
