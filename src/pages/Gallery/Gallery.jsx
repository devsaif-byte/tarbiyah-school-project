import { useEffect, useState } from "react";

import Title from "../../components/Title/Title";
import Masonry from "react-responsive-masonry";
import { images } from "../../images/gallery"; // Import the array of images
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const Gallery = ({ photoLimit, onSeeMore }) => {
	const [columns, setColumns] = useState(3);
	const limitedImages = photoLimit ? images.slice(-photoLimit) : images;
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 350) {
				setColumns(1);
			} else if (window.innerWidth <= 750) {
				setColumns(2);
			} else {
				setColumns(3);
			}
		};

		handleResize(); // Set initial column count
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize); // Cleanup
	}, []);

	return (
		<section className="container py-12">
			<Title text="Image Gallery" />
			<Masonry columnsCount={columns} gutter="10px">
				{limitedImages.map((image, i) => (
					<img
						key={i}
						src={image}
						alt={`Gallery Image ${i + 1}`}
						style={{ width: "100%", display: "block" }}
					/>
				))}
			</Masonry>
			{photoLimit && (
				<div className="text-center mt-4">
					<Link to="/gallery">
						<Button
							onSeeMore
							className="text-white rounded-none bg-mintGreen  hover:bg-orange-500 z-50"
							size="lg"
							radius="none"
						>
							See More
						</Button>
					</Link>
				</div>
			)}
		</section>
	);
};

export default Gallery;
