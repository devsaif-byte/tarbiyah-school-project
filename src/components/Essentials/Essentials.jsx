import React from "react";
import { Button } from "@material-tailwind/react";
import baby from "../../images/baby.jpg";
import admission from "../../images/advice.jpg";
import others from "../../images/abc.jpg";
import { Link } from "react-router-dom";
import Title from "../Title/Title";
const Essentials = () => {
	return (
		<>
			{/* Container for demo purpose */}
			<div className="py-24 mx-auto md:px-6 bg-gray-100">
				{/* Section: Design Block */}
				<section className="container text-center">
					<Title text="Essential" />
					<div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
						<div className="mb-6 lg:mb-0">
							<div
								className="relative mb-6 overflow-hidden  bg-cover bg-no-repeat  "
								data-te-ripple-init=""
								data-te-ripple-color="light"
							>
								<img src={baby} className="w-full" alt="Louvre" />
							</div>
							<h5 className="mb-3 text-lg font-bold">একাডেমিক শিডিউল</h5>

							<p className="text-neutral-500 mb-6 text-justify">
								একাডেমিক শিডিউল এবং ভর্তির ক্ষেত্রে শ্রেণীবিন্যাস বিস্তারিত
								দেখতে ক্লিক করুন।
							</p>
							<Link to="/academic-schedule">
								<Button
									className="rounded-none bg-mintGreen"
									size="md"
									children="Learn More"
								/>
							</Link>
						</div>
						<div className="mb-6 lg:mb-0">
							<div
								className="relative mb-6 overflow-hidden bg-cover bg-no-repeat  "
								data-te-ripple-init=""
								data-te-ripple-color="light"
							>
								<img src={admission} className="w-full" alt="Louvre" />
							</div>
							<h5 className="mb-3 text-lg font-bold">ভর্তি প্রক্রিয়া</h5>

							<p className="text-neutral-500  mb-6 text-justify">
								ভর্তি প্রক্রিয়ার বিস্তারিত দেখতে ক্লিক করুন।
							</p>
							<Link to="/admission-procedure">
								<Button
									className="rounded-none bg-mintGreen"
									size="md"
									children="Learn More"
								/>
							</Link>
						</div>
						<div className="mb-0">
							<div>
								<div
									className="relative mb-6 overflow-hidden bg-cover bg-no-repeat  "
									data-te-ripple-init=""
									data-te-ripple-color="light"
								>
									<img src={others} className="w-full" alt="Louvre" />
								</div>
								<h5 className="mb-3 text-lg font-bold">অন্যান্য</h5>

								<p className="text-neutral-500  mb-6 text-justify">
									অন্যান্য বিস্তারিত দেখতে ক্লিক করুন।
								</p>
								<Button
									className="rounded-none bg-mintGreen"
									size="md"
									children="Learn More"
								/>
							</div>
						</div>
					</div>
				</section>
				{/* Section: Design Block */}
			</div>
			{/* Container for demo purpose */}
		</>
	);
};

export default Essentials;
