import React from "react";
import { Link } from "react-router-dom";

const RedButton = (props) => {
	return (
		<Link
			to={props.to}
			className=" px-10 py-3 duration-300 bg-rose-800 hover:bg-rose-700 text-white"
		>
			<button>{props.text}</button>
		</Link>
	);
};

export default RedButton;
