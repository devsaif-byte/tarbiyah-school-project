import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
const Welcome = () => {
	return (
		<div className="container flex flex-col items-center justify-center p-8">
			<Typography variant="h1" children="Welcome" />
			<Typography
				className="my-12"
				variant="p"
				children="
We are a learning community dedicated to inspiring success and nurturing well-being. Finnish education excellence is at the heart of all we do, because we believe that everyone deserves the best possible future."
			/>
			<Link to="/">
				<Button
					className="rounded-none bg-mintGreen"
					variant="fill"
					children="Go back to main page"
				/>
			</Link>
		</div>
	);
};

export default Welcome;
