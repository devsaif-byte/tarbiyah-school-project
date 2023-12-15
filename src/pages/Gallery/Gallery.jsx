import { useEffect, useState } from "react";
import Masonry from "react-responsive-masonry";
import img1 from "../../images/gallery1.jpeg";
import img2 from "../../images/gallery2.jpeg";
import img3 from "../../images/gallery3.jpeg";
import Title from "../../components/Title/Title";

// const url = "https://picsum.photos/v2/list?page=2&limit=30";
const src = [img1, img2, img3];
const Gallery = () => {
	// const [col, setCol] = useState(3);
	// const [images, setImages] = useState([]);

	// useEffect(() => {
	// 	async function getImg() {
	// 		try {
	// 			const response = await fetch(url);
	// 			if (!response.ok) throw new Error("HTTP error " + response.status);
	// 			const data = await response.json();
	// 			setImages(data);
	// 			console.log(data);
	// 		} catch (err) {
	// 			console.log(err);
	// 		}
	// 	}
	// 	getImg();
	// }, []);

	// const handleResize = () => {
	// 	if (window.innerWidth <= 350) {
	// 		setCol(1);
	// 	}
	// 	if (window.innerWidth <= 750) {
	// 		setCol(2);
	// 	} else {
	// 		setCol(3);
	// 	}
	// 	useEffect(() => {
	// 		handleResize();
	// 		window.addEventListener("resize", handleResize);

	// 		// Cleanup event
	// 		return () => window.removeEventListener("resize", handleResize);
	// 	}, []);
	// };

	return (
		// <ResponsiveWrapper>
		<section className="container py-12">
			<Title text="Image Gallery" />
			<Masonry columnsCount={3} gutter="10px">
				{src.map(
					(image, i) => (
						console.log(image.download_url),
						(
							<img
								key={i}
								src={image}
								style={{ width: "100%", display: "block" }}
							/>
						)
					)
				)}
			</Masonry>
		</section>
		// </ResponsiveWrapper>
	);
};
export default Gallery;
