import {
	Card,
	CardHeader,
	CardBody,
	Typography,
} from "@material-tailwind/react";

export function Profile({ image, name, title, description }) {
	return (
		<Card className="w-100 shadow-none border rounded-none">
			<CardHeader floated={false} className="h-80">
				<img
					src={image}
					alt="profile-picture"
					className="h-96 w-full object-cover object-center"
				/>
			</CardHeader>
			<CardBody className="text-start">
				<Typography
					variant="h4"
					color="blue-gray"
					className="mb-2 text-mintGreen"
				>
					{name}
				</Typography>
				<Typography color="blue-gray" className="font-medium mb-8" textGradient>
					{title}
				</Typography>
				<Typography className="font-small">{description}</Typography>
			</CardBody>
		</Card>
	);
}
