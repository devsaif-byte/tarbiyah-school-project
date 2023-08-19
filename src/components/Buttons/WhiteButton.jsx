import React from 'react'
import { Link } from 'react-router-dom';

const WhiteButton = (props) => {
  return (
		<Link
			to={props.to}
			className="px-5 py-3  font-medium text-slate-700 shadow-xl bg-white duration-150  hover:bg-yellow-400"
		>
			<button>{props.text}</button>
		</Link>
	);
}

export default WhiteButton