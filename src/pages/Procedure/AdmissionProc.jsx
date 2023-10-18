import React from "react";
import feeSt from '../../images/fee-st.png'
const AdmissionProc = () => {
	return (
		<>
			{/* Container for demo purpose */}
			<div className="container my-24 text-left md:px-6 px-6">
				{/* Section: Design Block */}
				<section className="mb-32">
					<h1 className="mb-4 text-3xl font-bold">ভর্তি প্রক্রিয়া</h1>
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
					<ul className="mb-6 list-inside list-disc">
						<li>২০০ টাকার বিনিময়ে ভর্তি ফরম সংগ্রহ করতে হবে।</li>
						<li>
							ভর্তি ফরমের সাথে ৩ কপি পাসপোর্ট সাইজ এবং অভিভাবকদের ২ কপি পাসপোর্ট
							সাইজের ছবি জমা দিতে হবে।
						</li>
						<li>অভিভাবকদের জাতীয় পরিচয়পত্রের ফটোকপি।</li>
						<li>
							প্রতিষ্ঠান কর্তৃক প্রদত্ত নির্ধারিত ভর্তি ফরমে ভর্তির জন্য মনোনীত
							ছাত্রের অভিভাবক ছাত্রের সকল তথ্য প্রদান করবেন। কোন তথ্য ভুল বা
							গোপন করতে পারবেন না।
						</li>
						<li>
							ছাত্রের মূল অভিভাবক ছাড়াও অনুর্ধ্ব দুইজন অভিভাবক প্রতিনিধি ছাত্রের
							দেখা-শুনার জন্য তাদের ঠিকানা ভর্তি ফরমে উল্লেখ করবেন।
						</li>
						<li>
							প্রতিষ্ঠানের নির্ধারিত ফি জমা দেওয়ার মাধ্যমে ভর্তি প্রক্রিয়া
							সম্পন্ন করবেন।
						</li>
						<li>
							ভর্তি প্রক্রিয়া সম্পন্ন করার পূর্বেই অভিভাবকগণ স্কুল কর্তৃপক্ষের
							সাথে সাক্ষাতকার প্রদান করবেন।
						</li>
					</ul>
					<h1 className="mb-4 text-3xl font-bold">Fee Structure</h1>
					<img src={feeSt} alt="" />
				</section>
			</div>
		</>
	);
};

export default AdmissionProc;
