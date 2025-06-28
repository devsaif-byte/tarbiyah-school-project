import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

export function Profile({ image, name, title, description }) {
	return (
		<Card
			className="py-4 bg-gray-100 border hover:shadow-md transition-shadow duration-300"
			shadow="none"
			radius="none"
		>
			<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
				<Image
					radius="full"
					src={image}
					alt="profile-picture"
					className="h-96 w-full object-cover object-center grayscale hover:grayscale-0"
				/>
			</CardHeader>

			<CardBody className="overflow-visible py-2 flex flex-col gap-3">
				<h4 className="font-bold text-large">{name}</h4>
				<p className="text-tiny uppercase font-bold">{title}</p>
				<small className="text-default-500">{description}</small>
			</CardBody>
		</Card>
	);
}
