import React from "react";
import YouTube from "react-youtube";
import Title from "../Title/Title";
const YoutubePlayer = () => {
	// YOUTUBE VIDEO FUNCTION
	const opts = {
		width: "100%",
		borderRadius: "2rem",
		playerVars: { autoplay: 1 },
	};
	const videoReady = (event) => {
		event.target.pauseVideo();
	};

	return (
		<div className="py-24 mx-auto md:px-6 bg-gray-100">
			<Title text="Youtube Gallery" />

			<section className="container text-center px-3 md:px-0">
				<div>
					<div
						style={{
							maxWidth: "800px",
							margin: "auto",
							marginTop: "12px",
							minHeight: "30vh",
							borderRadius: "12px",
							overflow: "hidden",
						}}
					>
						<YouTube videoId="qF0OuqyiY5U" opts={opts} onReady={videoReady} onEnd="" />
					</div>
				</div>
			</section>
			<div />
		</div>
	);
};

export default YoutubePlayer;
