import React from "react";
import { Profile } from "./Profile";
import motiul from "../../images/motiul_islam.jpeg";
import yakub from "../../images/yakub_azhari.jpg";
import fajle from "../../images/fajle_rabbi.jpg";
import Title from "../Title/Title";

const Staffs = () => {
	return (
		<section className="container py-12 ">
			<Title text="Our Advisor's" />
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
				<Profile
					image={motiul}
					name="শায়েখ ড. মোহাম্মদ মতিউল ইসলাম"
					title="সহকারী অধ্যাপক,বাংলাদেশ ইসলামি বিশ্ববিদ্যালয়।"
					description="বি.এ (অনার্স), এম.এ 
							ইমাম মুহাম্মাদ ইবনে সৌদ ইসলামি বিশ্ববিদ্যালয়, সৌদি আরব,

							পিএইচডি, 
							ইসলামি বিশ্ববিদ্যালয়, কুষ্টিয়া।"
				/>
				<Profile
					image={yakub}
					name="শাইখ সাদিক মুহাম্মদ ইয়াকুব আযহারী"
					title="সহকারী অধ্যাপক, বাংলাদেশ ইসলামি বিশ্ববিদ্যালয়, ঢাকা।"
					description="বি.এ (অনার্স),
							ইসলামি শরীয়াহ বিভাগ,
							আল-আযহার বিশ্ববিদ্যালয়, কায়রো, মিশর।

							এম.এ, 
							দাওয়াহ ও ইসলামিক স্টাডিজ বিভাগ,
							দারুল ইহসান বিশ্ববিদ্যালয়, ঢাকা।

							এম.ফিল,
							আল-কুরআন ও ইসলামিক স্টাডিজ বিভাগ,
							ইসলামি বিশ্ববিদ্যালয়, কুষ্টিয়া।

							PGD in International Humanitarian Law,
							Nalsar University of Law, Hyderabad , India"
				/>
				<Profile
					image={fajle}
					name="জনাব, এম. এম. ফজলে রাব্বি "
					title="সহকারী অধ্যাপক,
							কম্পিউটার সায়েন্স এন্ড ইঞ্জিনিয়ারিং বিভাগ,
							বাংলাদেশ ইউনিভার্সিটি অফ বিজনেস এন্ড টেকনোলজি।
					"
					description="সদস্য, একাডেমিক কমিটি,
							কুল্লিয়াতুল কুরআনিল কারীম ওয়াদ- দিরাসাতিল ইসলামিয়্যাহ, উত্তরা

							বি.এস.সি (অনার্স),
							ইউনিভার্সিটি অফ উইন্ডসর, কানাডা।
							এম.এস.সি (কম্পিউটার সায়েন্স),
							ইউনিভার্সিটি অফ বেডফোর্ডশায়ার, ইংল্যান্ড।"
				/>
			</div>
		</section>
	);
};

export default Staffs;
