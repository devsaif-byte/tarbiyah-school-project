import React from "react";
import { img26, img76 } from "../../images/gallery";
import admission from "../../images/advice.jpg";
import others from "../../images/abc.jpg";
import { Link } from "react-router-dom";
import Title from "../Title/Title";
import { motion } from "framer-motion";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Image,
	Button,
} from "@nextui-org/react";

const cardData = [
	{
		image: img76,
		title: "একাডেমিক শিডিউল",
		description:
			"একাডেমিক শিডিউল এবং ভর্তির ক্ষেত্রে শ্রেণীবিন্যাস বিস্তারিত দেখতে ক্লিক করুন।",
		route: "/academic-schedule",
	},
	{
		image: admission,
		title: "ভর্তি প্রক্রিয়া",
		description: "ভর্তি প্রক্রিয়ার বিস্তারিত দেখতে ক্লিক করুন।",
		route: "/admission-procedure",
	},
	{
		image: img26,
		title: "অন্যান্য",
		description: "অন্যান্য বিস্তারিত দেখতে ক্লিক করুন।",
		route: "",
	},
];

const Essentials = () => {
	return (
		<>
			{/* Container for demo purpose */}
			<div className="py-24 mx-auto md:px-6 bg-gray-100">
				{/* Section: Design Block */}
				<section className="container text-center px-3 md:px-0">
					<Title text="Essential" />
					<div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
						{cardData.map((data) => (
							<Card
								Card
								isFooterBlurred
								className="w-full h-[300px]"
								shadow="none"
								radius="none"
							>
								<CardHeader className="absolute z-10 top-1 flex-col items-start">
									<motion.h4
										className="text-white/90 font-medium text-xl"
										initial={{ x: -100 }}
										animate={{ x: 0 }}
										transition={{ duration: 1 }}
									>
										{data.title}
									</motion.h4>
								</CardHeader>
								<Image
									radius="none"
									removeWrapper
									alt="Relaxing app background"
									className="z-0 w-full h-full object-cover"
									src={data.image}
								/>
								<CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
									<motion.div
										initial={{ y: 100 }}
										animate={{ y: 0 }}
										transition={{ duration: 1 }}
										className="flex flex-grow items-center gap-2 justify-between"
									>
										<div className="flex flex-col">
											<p className="text-tiny text-white/60 text-left">
												{data.description}
											</p>
										</div>
										<Link to={data.route}>
											<Button
												size="md"
												radius="none"
												className="bg-orangePrimary hover:bg-mintGreen text-white"
											>
												More
											</Button>
										</Link>
									</motion.div>
								</CardFooter>
							</Card>
						))}
					</div>
				</section>
				{/* Section: Design Block */}
			</div>
			{/* Container for demo purpose */}
		</>
	);
};

export default Essentials;
