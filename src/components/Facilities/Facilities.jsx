import React from "react";
import engIcon from "../../images/abc-block.png";
import hifzIcon from "../../images/quran.png";
import banIcon from "../../images/clipboard.png";
import moktobIcon from "../../images/yes.png";
import abobIcon from "../../images/hotel-building.png";
import dlscIcon from "../../images/school-material.png";
import Title from "../Title/Title";
import { Link } from "react-router-dom";
const Facilities = () => {
	return (
		<section className="px-3 md:lg:xl:px-40 py-20 bg-white">
			<Title text="Facilities" />
			<div className="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white border ">
				<div className="p-10 flex hover:bg-mintGreen hover:text-white transition-all ease-in-out flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
					<span className="p-5 rounded-full bg-rose-800 text-white">
						<img
							className="h-32 w-32 rounded-full object-cover object-center"
							src={banIcon}
							alt="icon image"
						/>
					</span>
					<p className="text-xl font-medium text-slate-700 mt-3">
						বাংলা মাধ্যম
					</p>
					{/* <p className="mt-2 text-sm text-slate-500"></p> */}
				</div>
				<div className="p-10 flex hover:bg-mintGreen hover:text-white transition-all ease-in-out flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
					<span className="p-5 rounded-full bg-rose-800 text-white">
						<img
							className="h-32 w-32 rounded-full object-cover object-center"
							src={engIcon}
							alt="icon image"
						/>
					</span>
					<p className="text-xl font-medium text-slate-700 mt-3">
						ইংলিশ ভার্সন
					</p>
					{/* <p className="mt-2 text-sm text-slate-500"></p> */}
				</div>
				<div className="p-10 flex hover:bg-mintGreen hover:text-white transition-all ease-in-out flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
					<span className="p-5 rounded-full bg-rose-800 text-white">
						<img
							className="h-32 w-32 rounded-full object-cover object-center"
							src={moktobIcon}
							alt="icon image"
						/>
					</span>
					<p className="text-xl font-medium text-slate-700 mt-3">মক্তব</p>
					{/* <p className="mt-2 text-sm text-slate-500"></p> */}
				</div>
				<div className="p-10 flex hover:bg-mintGreen hover:text-white transition-all ease-in-out flex-col items-center text-center group   md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
					<span className="p-5 rounded-full bg-rose-800 text-white">
						<img
							className="h-32 w-32 rounded-full object-cover object-center"
							src={hifzIcon}
							alt="icon image"
						/>
					</span>
					<p className="text-xl font-medium text-slate-700 mt-3">
						হিফজুল কুরআন
					</p>
					{/* <p className="mt-2 text-sm text-slate-500"></p> */}
				</div>
				<div className="p-10 flex hover:bg-mintGreen hover:text-white transition-all ease-in-out flex-col items-center text-center group    md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
					<span className="p-5 rounded-full bg-rose-800 text-white">
						<img
							className="h-32 w-32 rounded-full object-cover object-center"
							src={abobIcon}
							alt="icon image"
						/>
					</span>
					<p className="text-xl font-medium text-slate-700 mt-3">
						আবাসিক/অনাবাসিক
					</p>
					{/* <p className="mt-2 text-sm text-slate-500"></p> */}
				</div>
				<div className="p-10 flex hover:bg-mintGreen hover:text-white transition-all ease-in-out flex-col items-center text-center group     hover:bg-slate-50 cursor-pointer">
					<span className="p-5 rounded-full bg-rose-800 text-white">
						<img
							className="h-32 w-32 rounded-full object-cover object-center"
							src={dlscIcon}
							alt="icon image"
						/>
					</span>
					<p className="text-xl font-medium text-slate-700 mt-3">
						ডে লং স্কুলিং
					</p>
					{/* <p className="mt-2 text-sm text-slate-500"></p> */}
				</div>
			</div>
			<div className="w-full bg-rose-800 py-10 px-20 flex justify-between items-center ">
				<p className=" text-white">
					{" "}
					<span className="md:text-4xl font-medium text-orangePrimary">
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
	);
};

export default Facilities;
