import { useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import Masonry from "react-responsive-masonry";
import img1 from "../../images/gallery1.jpeg";
import img2 from "../../images/gallery2.jpeg";
import img3 from "../../images/gallery3.jpeg";
import img4 from "../../images/gallery4.jpeg";
import img5 from "../../images/gallery5.jpeg";
import img6 from "../../images/gallery6.jpeg";
import img7 from "../../images/gallery7.jpeg";
import img8 from "../../images/gallery8.jpeg";
import img9 from "../../images/gallery9.jpeg";
import img10 from "../../images/gallery10.jpeg";
import img11 from "../../images/gallery11.jpeg";
import img12 from "../../images/gallery12.jpeg";
import img13 from "../../images/gallery13.jpeg";
import img14 from "../../images/gallery14.jpeg";
import img15 from "../../images/gallery15.jpeg";
import img16 from "../../images/gallery16.jpeg";
import img17 from "../../images/gallery17.jpeg";
import img18 from "../../images/gallery18.jpeg";
import img19 from "../../images/gallery19.jpeg";

// const url = "https://picsum.photos/v2/list?page=2&limit=30";
const src = [
	img1,
	img2,
	img3,
	img4,
	img5,
	img6,
	img7,
	img8,
	img9,
	img10,
	img11,
	img12,
	img13,
	img14,
	img15,
	img16,
	img17,
	img18,
	img19,
];
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
