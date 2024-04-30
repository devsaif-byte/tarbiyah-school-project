import React from "react";
import engIcon from "../../images/abc-block.png";
import hifzIcon from "../../images/quran.png";
import banIcon from "../../images/clipboard.png";
import moktobIcon from "../../images/yes.png";
import abasIcon from "../../images/hotel-building.png";
import dlscIcon from "../../images/school-material.png";
import Title from "../Title/Title";
import { Link } from "react-router-dom";
import "./facilities.css";

const data = [
	{
		title: "বাংলা মাধ্যম",
		srcImg: banIcon,
		status: "Running",
	},
	{
		title: "ইংলিশ ভার্সন",
		srcImg: engIcon,
		status: "Running",
	},
	{
		title: "মক্তব",
		srcImg: moktobIcon,
		status: "Running",
	},
	{
		title: "হিফজুল কুরআন",
		srcImg: hifzIcon,
		status: "Running",
	},
	{
		title: "আবাসিক/অনাবাসিক",
		srcImg: abasIcon,
		status: "Running",
	},
	{
		title: "ডে লং স্কুলিং",
		srcImg: dlscIcon,
		status: "Running",
	},
];

const Facilities = () => {
	return (
		<div className="container my-24 mx-auto px-6 md:px-0">
			<section className="px-3 md:px-0 bg-white">
				<Title text="Facilities" />
				<div
					div
					className="grid grid-cols-1 gap-3 md:lg:xl:grid-cols-3 group bg-white"
				>
					{data.map((el) => (
						<div className="p-10 flex hover:shadow-xl duration-300 transition-all ease-in-out flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer btn_border">
							<span className="p-5 rounded-full bg-rose-800 text-white">
								<img
									className="h-32 w-32 rounded-full object-cover object-center"
									src={el.srcImg}
									alt="icon image"
								/>
							</span>
							<p className="text-xl font-medium text-slate-700 mt-3">
								{el.title}
							</p>
							<p className="mt-2 text-sm text-slate-500">{el.status}</p>
						</div>
					))}
				</div>
				<div className="w-full bg-rose-800 py-10 px-20 flex justify-between items-center ">
					<p className=" text-white">
						{" "}
						<span className="md:text-4xl text-orangePrimary font-extrabold">
							Still Confused ?
						</span>{" "}
						<br />{" "}
						<span className="text-lg text-black">Feel free to call us! </span>
					</p>
					<Link to="/contact">
						<button className="px-5 py-3  font-medium text-white hover:bg-teal-500 duration-150  bg-mintGreen">
							Contact{" "}
						</button>
					</Link>
				</div>
			</section>
		</div>
	);
};

export default Facilities;
