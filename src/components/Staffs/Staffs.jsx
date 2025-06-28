import React from "react";
import { Profile } from "./Profile";
import motiul from "../../images/motiul_islam.png";
import yakub from "../../images/yakub_azhari.png";
import mahbub from "../../images/mahbub.png";
import principal from "../../images/principal.jpeg";
import ab_main from "../../images/ab_main.png";
import khadiza from "../../images/khadiza.png";
import farzana from "../../images/farzana.jpeg";
import Title from "../Title/Title";
import Subtitle from "../Subtitile/Subtitle";
import { Divider } from "@nextui-org/react";

const advisors = [
	{
		image: motiul,
		name: "শায়েখ ড. মোহাম্মদ মতিউল ইসলাম",
		title: "সহকারী অধ্যাপক,বাংলাদেশ ইসলামি বিশ্ববিদ্যালয়।",
		description: `বি.এ (অনার্স), এম.এ 
    ইমাম মুহাম্মাদ ইবনে সৌদ ইসলামি বিশ্ববিদ্যালয়, সৌদি আরব,

    পিএইচডি, 
    ইসলামি বিশ্ববিদ্যালয়, কুষ্টিয়া।`,
	},
	{
		image: yakub,
		name: "শাইখ সাদিক মুহাম্মদ ইয়াকুব আযহারী",
		title: "সহকারী অধ্যাপক, বাংলাদেশ ইসলামি বিশ্ববিদ্যালয়, ঢাকা।",
		description: `বি.এ (অনার্স),
    ইসলামি শরীয়াহ বিভাগ,
    আল-আযহার বিশ্ববিদ্যালয়, কায়রো, মিশর।

    এম.এ, 
    দাওয়াহ ও ইসলামিক স্টাডিজ বিভাগ,
    দারুল ইহসান বিশ্ববিদ্যালয়, ঢাকা।

    এম.ফিল,
    আল-কুরআন ও ইসলামিক স্টাডিজ বিভাগ,
    ইসলামি বিশ্ববিদ্যালয়, কুষ্টিয়া।

    PGD in International Humanitarian Law,
    Nalsar University of Law, Hyderabad , India`,
	},
	{
		image: mahbub,
		name: "ড. মোহাম্মদ মাহবুবুল আলম ",
		title:
			"সহকারী অধ্যাপক,ইসলামিক স্টাডিজ বিভাগ, বাংলাদেশ ইসলামি বিশ্ববিদ্যালয়, ঢাকা।",
		description: `এম.ফিল, পিএইচডি ইসলামি বিশ্ববিদ্যালয়, কুষ্টিয়া।`,
	},
];
const team = [
	{
		image: principal,
		name: "M. Sowrav Ahmed ",
		title: `Principal & Entrepreneur. 
		Tarbiyah Ideal School`,
		description: `M.Phil. Researcher,
						Department of Islamic Studies, 
						University of Dhaka.

						Research Fellow, 
						Bangladesh Islamic Law Research Centre.

						PGD in HRM,
						Bangladesh Institute of Management Studies.

						MA, BA (Hons)
						Department of Islamic Studies, 
						Bangladesh Islami University. 

						Diploma in Computer Engineering,
						Feni Polytechnic Institute.

						Writer: সন্তানের প্রতি বাবার নাসিহাহ (২০১৯)`,
	},
	{
		image: ab_main,
		name: "S.M Abdul Mayeen",
		title: `Executive: Accounts & HR`,
		description: `BBA, MBA. University of Dhaka`,
	},
	{
		image: "",
		name: "Tahera-Tul-Kobra",
		title: `Coordinator`,
		description: `MS, in Psychology,
						Eden Mohila College.
						B.A (Pass), 
						Khilgaon Model College, Dhaka.`,
	},
	{
		image: "",
		name: "Sadia Sultana",
		title: `Assistant Coordinator`,
		description: `MA, BA (Hons)
						Department of Islamic Studies, 
						Bangladesh Islami University.
						
						Kamil, Fazil, Tamirul millat kamil Madrasah.`,
	},
	{
		image: khadiza,
		name: "Khadiza Akter",
		title: `Assistant Coordinator`,
		description: `MBA, BBA (Management), Barguna Government College.`,
	},
	{
		image: farzana,
		name: "Farzana Akter Prity",
		title: `Teacher`,
		description: `BBA, MBA (Management). Lakshmipur Govt. College.`,
	},
];

const Staffs = React.memo(() => {
	return (
		<section className="container py-12">
			<Title text="Our Dedicated Professionals" />
			<Subtitle text="Advisory Panel" />
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
				{advisors.map((advisor, index) => (
					<Profile
						key={index}
						image={advisor.image}
						name={advisor.name}
						title={advisor.title}
						description={renderDescription(advisor.description)}
					/>
				))}
			</div>
			<Divider className="my-8" />
			<Subtitle text="Our School Leadership & Staff" />
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
				{team.map((team, index) => (
					<Profile
						key={index}
						image={team.image}
						name={team.name}
						title={renderDescription(team.title)}
						description={renderDescription(team.description)}
					/>
				))}
			</div>
		</section>
	);
});

// Reusable function to render a description
const renderDescription = (description) => {
	// Split the text by full stops and trim spaces, then add back full stops
	const descriptionParts = description
		.split(/(?<=\.)\s+/)
		.map((part) => part.trim())
		.filter((part) => part !== "");

	return descriptionParts.map((part, index) => (
		<p key={index} style={{ marginBottom: "10px" }}>
			{part}
		</p>
	));
};

export default Staffs;
