import React from "react";
import age_st from "../../images/age.png";
const Schedule = () => {
	return (
		<div className="container my-24 mx-auto md:px-6">
			<section className="mb-32">
				<h1 className="mb-4 text-3xl font-bold">একাডেমিক শিডিউল</h1>
				<p className="mb-6 flex items-center font-bold uppercase text-danger ">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={2}
						stroke="currentColor"
						className="mr-2 h-5 w-5"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
						/>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
						/>
					</svg>
					হাইলাইট
				</p>
				<p className="mb-6 leading-10">
					প্লে গ্রুপ এবং নার্সারি - সকাল ৯.০০ থেকে ১২.১৫ পর্যন্ত <br />
					কেজি, ১ম শ্রেণি এবং ২য় শ্রেণি - সকাল ৭.০০ থেকে ১.০০ পর্যন্ত <br />
					৩য় শ্রেণি থেকে ৫ম শ্রেণি - সকাল ৯.০০ থেকে ১.৩০ পর্যন্ত <br />
					হিফজুল কুরআন - সকাল ৭.০০ থেকে ৮.৩০ পর্যন্ত এবং মাগরিব থেকে রাত ৯.০০
					পর্যন্ত <br />
					মক্তব - সকাল ৭.০০ থেকে ৮.৩০ পর্যন্ত <br />
					ডে লং স্কুলিং - সকাল ৭.০০ থেকে ৫.০০ পর্যন্ত।
				</p>
				<h1 className="mb-4 text-3xl font-bold">
					ভর্তির ক্ষেত্রে বয়স ও শ্রেণি বিন্যাস
				</h1>
				<img src={age_st} alt="" />
			</section>
		</div>
	);
};

export default Schedule;
