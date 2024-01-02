/**
 * v0 by Vercel.
 * @see https://v0.dev/t/AmTDyRKpFlx
 */
import { CardBody, Card } from "@material-tailwind/react";

export default function Component() {
	return (
		<section className="container py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 group bg-white border gap-4 p-4">
			<Card className="w-full">
				<CardBody className="flex flex-col items-center p-6">
					<img
						alt="Lucian Eurel"
						className="mb-4 rounded-full"
						height="80"
						src="/placeholder.svg"
						style={{
							aspectRatio: "80/80",
							objectFit: "cover",
						}}
						width="80"
					/>
					<h5 className="text-lg font-semibold">Lucian Eurel</h5>
					<p className="text-sm text-gray-500">CEO Discord</p>
					<p className="mt-4 text-center text-sm text-gray-700">
						"Your products, all the kits that I have downloaded from your site
						and worked with are sooo cool! I love the color mixtures, cards...
						everything. Keep up the great work!"
					</p>
					<div className="mt-4 flex">
						<StarIcon className="text-yellow-500" />
						<StarIcon className="text-yellow-500" />
						<StarIcon className="text-yellow-500" />
						<StarIcon className="text-yellow-500" />
						<StarIcon className="text-yellow-500" />
					</div>
				</CardBody>
			</Card>
			<Card className="w-full">
				<CardBody className="flex flex-col items-center p-6">
					<img
						alt="Linde Michel"
						className="mb-4 rounded-full"
						height="80"
						src="/placeholder.svg"
						style={{
							aspectRatio: "80/80",
							objectFit: "cover",
						}}
						width="80"
					/>
					<h5 className="text-lg font-semibold">Linde Michel</h5>
					<p className="text-sm text-gray-500">CFO Slack</p>
					<p className="mt-4 text-center text-sm text-gray-700">
						"Don't be scared of the truth because we need to restart the human
						foundation in truth. That's why I love you like Kanye loves Kanye I
						love Rick Owens' bed design but the back is not so attractive."
					</p>
					<div className="mt-4 flex">
						<StarIcon className="text-yellow-500" />
						<StarIcon className="text-yellow-500" />
						<StarIcon className="text-yellow-500" />
						<StarIcon className="text-yellow-500" />
						<StarIcon className="text-yellow-500" />
					</div>
				</CardBody>
			</Card>
			<Card className="w-full">
				<CardBody className="flex flex-col items-center p-6">
					<img
						alt="Misha Stam"
						className="mb-4 rounded-full"
						height="80"
						src="/placeholder.svg"
						style={{
							aspectRatio: "80/80",
							objectFit: "cover",
						}}
						width="80"
					/>
					<h5 className="text-lg font-semibold">Misha Stam</h5>
					<p className="text-sm text-gray-500">COO Dribbble</p>
					<p className="mt-4 text-center text-sm text-gray-700">
						"Your products, all the kits that I have downloaded from your site
						and worked with are sooo cool! I love the color mixtures, cards...
						everything. Keep up the great work!"
					</p>
					<div className="mt-4 flex">
						<StarIcon className="text-yellow-500" />
						<StarIcon className="text-yellow-500" />
						<StarIcon className="text-yellow-500" />
						<StarIcon className="text-yellow-500" />
						<StarIcon className="text-yellow-500" />
					</div>
				</CardBody>
			</Card>
		</section>
	);
}

function StarIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
		</svg>
	);
}
