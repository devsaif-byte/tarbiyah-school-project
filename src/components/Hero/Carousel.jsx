import { Carousel } from "@material-tailwind/react";
import caroImg1 from "../../images/img-caro1.jpg";
import caroImg2 from "../../images/img-caro2.jpg";
import caroImg3 from "../../images/img-caro3.jpg";
import caroImg4 from "../../images/img-caro4.jpg";
import caroImg5 from "../../images/img-caro5.jpg";

const carouselImages = [caroImg1, caroImg2, caroImg3, caroImg4, caroImg5];

export function CarouselCustomNavigation() {
	return (
		<Carousel
			className="rounded-none z-40"
			loop="true"
			autoplay="true"
			autoplayDelay={5000}
			navigation={({ setActiveIndex, activeIndex, length }) => (
				<div className="absolute bottom-4 left-2/4 flex -translate-x-2/4 gap-2 z-40">
					{new Array(length).fill("").map((_, i) => (
						<span
							key={i}
							className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
								activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
							}`}
							onClick={() => setActiveIndex(i)}
						/>
					))}
				</div>
			)}
		>
			{carouselImages.map((img) => (
				<img src={img} alt="image 1" className="h-full w-full object-cover" />
			))}
		</Carousel>
	);
}
