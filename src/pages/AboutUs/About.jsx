import React from "react";
import { Fragment } from "react";
import Title from "../../components/Title/Title";
import img1 from "../../images/pexels-akela-photography.jpg";
import img2 from "../../images/quran.jpg";
const About = () => {
	return (
		<>
			{/* Container for demo purpose */}
			<div className="container flex justify-center items-center md:px-6 py-12">
				{/* Section: Design Block */}
				<section className="mb-32">
					<Title text="About Us" />
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
					<p className="mb-6">
						মহান আল্লাহ রাব্বুল আলামিনের নিকট কৃতজ্ঞ চিত্তে মস্তক অবনত করছি,
						যিনি আমাদেরকে সুন্দরতম অবয়বে সৃষ্টি করেছেন এবং সৃষ্টির সেরা হিসাবে
						মর্যাদা দিয়ে এ সুন্দর পৃথিবীতে প্রেরণ করেছেন। দুরুদ ও সালাম হযরত
						মুহাম্মদ সাল্লাল্লাহু আলাইহি ওয়াসাল্লামের প্রতি, যিনি আমাদের জন্য
						রহমত এবং উসওয়াতুন হাসানাহ। ‘তারবিয়াহ আইডিয়াল স্কুল’ এর পক্ষ থেকে
						আপনাদেরকে জানাচ্ছি আন্তরিক প্রীতি ও শুভেচ্ছা। আপনারা জেনে আনন্দিত
						হবেন যে, আপনার সন্তানের যথাযথ বিকাশ ও শিক্ষা প্রদানের নিমিত্তে
						প্রতিষ্ঠিত হয়েছে ভিন্ন ধারার শিক্ষা প্রতিষ্ঠান ‘তারবিয়াহ আইডিয়াল
						স্কুল’। আসসালামু আলাইকুম ওয়ারাহমাতুল্লাহি ওয়াবারাকাতুহু সুপ্রিয়
						অভিভাবকবৃন্দ, মহান আল্লাহ রাব্বুল আলামিনের নিকট কৃতজ্ঞ চিত্তে মস্তক
						অবনত করছি, যিনি আমাদেরকে সুন্দরতম অবয়বে সৃষ্টি করেছেন এবং সৃষ্টির
						সেরা হিসাবে মর্যাদা দিয়ে এ সুন্দর পৃথিবীতে প্রেরণ করেছেন। দুরুদ ও
						সালাম হযরত মুহাম্মদ সাল্লাল্লাহু আলাইহি ওয়াসাল্লামের প্রতি, যিনি
						আমাদের জন্য রহমত এবং উসওয়াতুন হাসানাহ। ‘তারবিয়াহ আইডিয়াল স্কুল’ এর
						পক্ষ থেকে আপনাদেরকে জানাচ্ছি আন্তরিক প্রীতি ও শুভেচ্ছা।
					</p>
					<img src={img1} className="mb-6 w-full" alt="" />

					<p>
						আপনারা জেনে আনন্দিত হবেন যে, আপনার সন্তানের যথাযথ বিকাশ ও শিক্ষা
						প্রদানের নিমিত্তে প্রতিষ্ঠিত হয়েছে ভিন্ন ধারার শিক্ষা প্রতিষ্ঠান
						‘তারবিয়াহ আইডিয়াল স্কুল’। আমরা অবগত আছি যে, শিক্ষাব্যবস্থার প্রভাবে
						মানুষের চিন্তা- চেতনা, আদর্শিক মূল্যবোধ এবং সৃজনশীল কর্মতৎপরতা
						বিকশিত হয়। জাতীয়ভাবে সামগ্রিক উন্নয়নের জন্য নৈতিকমান সম্পন্ন
						মানবসম্পদ গড়ে তুলতে শিক্ষাব্যবস্থার ব্যাপক প্রভাব রয়েছে। আমরা
						বিশ্বাস করি, ধর্মীয় তথা নৈতিক ও যুগোপযুগী আধুনিক শিক্ষার সমন্বয়ে
						আদর্শ শিক্ষাব্যবস্থা গড়ে তোলা সম্ভব। মূলত আল্লাহর প্রতি বিশ্বাস এবং
						তার অনুগত হওয়াই নৈতিকতার ভিত্তিস্তম্ভ। আর নৈতিকতার প্রধান উৎস হল
						মানবতার মুক্তি সনদ আল কুরআন এবং রাসূল সা. এর সহিহ সুন্নাহ।
						শিক্ষাব্যবস্থার প্রতিটি স্তরে যদি আল্লাহ’র অনুগত বান্দা হিসাবে নিজের
						সামগ্রিক জীবনকে পরিচালনার তাকিদ পাওয়া যায় তবেই নৈতিকমানে নিজেকে
						উন্নীত করা সম্ভব হবে। সুতরাং আমাদের শিক্ষাপদ্ধতিতে নৈতিক এবং পার্থিব
						শিক্ষার কার্যকরী সংযোগ থাকতে হবে। ইসলাম ও আধুনিক (জাতীয় কারিকুলাম)
						শিক্ষার সমন্বয়ে আদর্শবান ও নৈতিকমানে উন্নীত আগামী প্রজন্ম গড়ার
						প্রত্যয়ে ২০২৩ ইং সনে রাজধানী ঢাকা’র দক্ষিণ বনশ্রীতে প্রতিষ্ঠিত হয়েছে
						“তারবিয়াহ আইডিয়াল স্কুল”। আমাদের সন্তানদের তরবিয়ত গঠনে মুসলিম
						ঐতিহ্যবাহী ‘মক্তব’ শিক্ষার আধুনিকায়ন এবং মূলধারার শিক্ষাব্যবস্থায় এর
						সন্নিবেশ ঘটিয়েছে ‘তারবিয়াহ আইডিয়াল স্কুল’। আমাদের মক্তব কার্যক্রমে
						থাকছে: কায়দা, আমপারা, ৪০ হাদিস, নাজেরা, মাসআলা- মাসায়েল, মাসনুন
						দোয়া, তাজবীদ, আকিদা বিষয়ক প্রাথমিক পাঠ, ২৬-৩০তম পারা মুখস্তকরণ
						ইত্যাদি। আধুনিক যুগের চাহিদা পূরণ এবং বিজ্ঞান ও প্রযুক্তি নির্ভর
						পৃথিবীকে নেতৃত্বদানের উপযোগী আগামী প্রজন্ম গঠন ও পরিচর্চাই আমাদের
						অভিপ্রায় । এছাড়াও ‘তারবিয়াহ’ সামাজিক- সাংস্কৃতিক উপায়- উপাদানসমূহকে
						শিক্ষাপদ্ধতির আওতাভুক্ত করে আদর্শ শিক্ষা পরিবেশ গড়ে তুলতে
						অঙ্গীকারাবদ্ধ।
					</p>
					{/*  */}
					<div className="container my-24 mx-auto ">
						{/* Section: Design Block */}
						<div className="mb-32">
							<div className="block rounded-lg ">
								<div className="flex flex-wrap items-center">
									<div className="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
										<img
											src={img2}
											alt="There is an image"
											className="w-full lg:rounded-tr-none"
										/>
									</div>
									<div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
										<div className="px-6 py-12 md:px-12">
											<h2 className="mb-4 text-2xl font-bold">
												তারবিয়াহ আইডিয়াল স্কুল এর বৈশিষ্ট্যসমূহঃ
											</h2>
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
											<p className="mb-6 text-neutral-500 ">
												- বাংলাদেশ সরকারের ‘জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক
												বোর্ড’ প্রণীত কারিকুলামে পরিচালিত। - অভিজ্ঞ ও দক্ষ
												একঝাঁক মেধাবী শিক্ষক-শিক্ষিকামন্ডলী দ্বারা পরিচালিত। -
												মুসলিম মানস গঠনে ঐতিহ্যবাহী মক্তব শিক্ষার আধুনিকায়ন ও
												সন্নিবেশকরণ। - সাধারণ শিক্ষার পাশাপাশি হিফজুল কুরআনের
												সুবর্ণ সুযোগ। - সার্বক্ষণিক নিরাপত্তা ব্যবস্থা। -
												জেনারেটরের মাধ্যমে নিরবচ্ছিন্ন বিদ্যুৎ সরবরাহ। - বাংলা,
												ইংরেজি ও আরবি ভাষা শেখার বিশেষ ব্যবস্থা ও সমান
												গুরুত্বারোপ। - Blooms Taxonomy পদ্ধতিতে পাঠদান। -
												মাতৃত্ব ও প্যারেন্টিং বিষয়ক সহায়ক সেমিনার কার্যক্রম
												পরিচালনা। - নৈতিক ও মানবিক শিক্ষার বিকাশে পৃথক কার্যক্রম
												পরিচালনা। - এক্টিভিটি ভিত্তিক শিক্ষা প্রদান। -
												অভিভাবকগণের জন্য উন্মুক্ত পাঠাগার ও ওয়েটিং স্পেসের
												ব্যবস্থা। - প্রি-স্কুল শিক্ষার্থীদের খেলাধুলার জন্য
												স্বতন্ত্র প্লে জোন সুবিধা বিদ্যমান। - বাধ্যতামূলক মক্তব
												শিক্ষার আওতায় সহিহ কুরআন তেলাওয়াত, হাদিস, ফিকহ, মাসনুন
												দোয়া, আকিদা বিষয়ক প্রাথমিক পাঠ, ২৬-৩০তম পারা মুখস্তকরণ
												ইত্যাদি পাঠদান করা হবে। ইনশাআল্লাহ - প্লে গ্রুপ এবং
												নার্সারি শ্রেণির শিক্ষার্থীদের বইয়ের বোঝা বহন করতে হবে
												না। তাদের লেখাপড়া সম্পূর্ণভাবে শ্রেণিকক্ষ ভিত্তিক
												পরিচালিত হবে।
											</p>
											<p class="text-neutral-500 ">
												<p className="mb-6 flex items-center font-bold uppercase text-danger ">
													লক্ষ্য ও উদ্দেশ্য
												</p>
												‘মানবতার বিকাশ এবং জনমুখী উন্নয়নে ও প্রগতিতে
												নেতৃত্বদানের উপযোগী মননশীল, যুক্তিবাদী, নৈতিকতাসম্পন্ন,
												নিজের এবং অন্যান্য ধর্মের প্রতি শ্রদ্ধাশীল,
												কুসংস্কারমুক্ত, পরমতসহিষ্ণু, অসাম্প্রদায়িক, দেশপ্রেম এবং
												কর্মকুশল নাগরিক গড়ে তোলা।’
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Section: Design Block */}
			</div>
		</>
	);
};

export default About;
