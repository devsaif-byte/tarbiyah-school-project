import React from "react";
import { motion } from "framer-motion";
import {
	Navbar,
	Collapse,
	Typography,
	Button,
	IconButton,
	List,
	ListItem,
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
} from "@material-tailwind/react";
import {
	ChevronDownIcon,
	Bars3Icon,
	XMarkIcon,
	FlagIcon,
	UsersIcon,
	FolderIcon,
	HomeIcon,
	AcademicCapIcon,
	BellAlertIcon,
	PhotoIcon,
} from "@heroicons/react/24/outline";
import logo from "/src/images/tarbiyah_logo.jpg";
import { Link, NavLink } from "react-router-dom";
const colors = {
	blue: "bg-blue-50 text-blue-500",
	orange: "bg-orange-50 text-orange-500",
	green: "bg-green-50 text-green-500",
	"blue-gray": "bg-blue-gray-50 text-blue-gray-500",
	purple: "bg-purple-50 text-purple-500",
	teal: "bg-teal-50 text-teal-500",
	cyan: "bg-cyan-50 text-cyan-500",
	pink: "bg-pink-50 text-pink-500",
};

const navListMenuItems = [
	{
		color: "blue-gray",
		icon: FolderIcon,
		title: "Admission Guid",
		link: "/admission-procedure",
		description: "Learn all the stuff of admission procedure.",
	},
	{
		color: "blue",
		icon: FlagIcon,
		title: "Programs",
		link: "/programs",
		description: "Know more about our programs and missions.",
	},
	{
		color: "purple",
		icon: PhotoIcon,
		title: "Photo Gallery",
		link: "/gallery",
		description: "See photos of ours.",
	},
];

function NavListMenu() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

	const renderItems = navListMenuItems.map(
		({ icon, title, description, color, link }, key) => (
			<NavLink to={link} key={key}>
				<MenuItem className="flex items-center gap-3 rounded-none hover:bg-teal-300">
					<div className={`rounded-none p-5  ${colors[color]}`}>
						{React.createElement(icon, {
							strokeWidth: 2,
							className: "h-6 w-6 ",
						})}
					</div>
					<div>
						<Typography variant="h6" className="flex items-center text-sm ">
							{title}
						</Typography>
						<Typography variant="small" color="gray" className="font-normal ">
							{description}
						</Typography>
					</div>
				</MenuItem>
			</NavLink>
		)
	);

	return (
		<React.Fragment>
			<Menu
				open={isMenuOpen}
				handler={setIsMenuOpen}
				offset={{ mainAxis: 20 }}
				placement="bottom"
				allowHover={true}
			>
				<MenuHandler>
					<Typography as="div" variant="small" className="font-normal">
						<ListItem
							className="flex items-center gap-2 py-2 pr-4 rounded-none hover:bg-mintGreen hover:text-white"
							selected={isMenuOpen || isMobileMenuOpen}
							onClick={() => setIsMobileMenuOpen((cur) => !cur)}
						>
							<AcademicCapIcon className="h-[18px] w-[18px]" />
							Academics
							<ChevronDownIcon
								strokeWidth={2.5}
								className={`hidden h-3 w-3 transition-transform lg:block ${
									isMenuOpen ? "rotate-180" : ""
								}`}
							/>
							<ChevronDownIcon
								strokeWidth={2.5}
								className={`block h-3 w-3 transition-transform lg:hidden ${
									isMobileMenuOpen ? "rotate-180" : ""
								}`}
							/>
						</ListItem>
					</Typography>
				</MenuHandler>
				<MenuList className="hidden max-w-screen-xl lg:block rounded-none">
					<ul className="grid grid-cols-4 gap-y-2">{renderItems}</ul>
				</MenuList>
			</Menu>
			<div className="block lg:hidden">
				<Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
			</div>
		</React.Fragment>
	);
}

function NavList() {
	return (
		<List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
			<Typography
				as="a"
				href="#"
				variant="medium"
				// color="blue-gray"
				className="font-normal rounded-none "
			>
				<NavLink to="/">
					<ListItem className="flex items-center gap-2 py-2 pr-4 rounded-none hover:bg-mintGreen hover:text-white">
						<HomeIcon className="h-[18px] w-[18px]" />
						Home
					</ListItem>
				</NavLink>
			</Typography>
			<Typography
				as="a"
				href="#"
				variant="medium"
				// color="blue-gray"
				className="font-normal rounded-none "
			>
				<NavLink to="/about">
					<ListItem className="flex items-center gap-2 py-2 pr-4 rounded-none hover:bg-mintGreen hover:text-white">
						<UsersIcon className="h-[18px] w-[18px]" />
						About Us
					</ListItem>
				</NavLink>
			</Typography>
			<Typography
				as="a"
				href="#"
				variant="medium"
				// color="blue-gray"
				className="font-normal"
			>
				<NavLink to="/notice">
					<ListItem className="flex items-center gap-2 py-2 pr-4 rounded-none hover:bg-mintGreen hover:text-white">
						<BellAlertIcon className="h-[18px] w-[18px]" />
						Notice
					</ListItem>
				</NavLink>
			</Typography>
			<NavListMenu />
		</List>
	);
}

export function NavbarWithMegaMenu() {
	const [openNav, setOpenNav] = React.useState(false);

	React.useEffect(() => {
		window.addEventListener(
			"resize",
			() => window.innerWidth >= 960 && setOpenNav(false)
		);
	}, []);

	return (
		<div className="bg-white">
			<Navbar className="mx-auto px-4 p-0 rounded-none shadow-none backdrop-saturate-none backdrop-blur-none bg-opacity-80 border-none">
				<motion.div
					initial={{ y: -100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1 }}
					className="flex items-center justify-between text-blue-gray-900"
				>
					<Typography
						as="a"
						href="#"
						variant="h6"
						className="mr-4 cursor-pointer py-1.5 lg:ml-2"
					>
						<div className="flex items-center">
							<Link to="/">
								<img
									className="h-24 w-24 rounded-full object-fill object-center"
									src={logo}
									alt="logo"
								/>
							</Link>
							<h1 className="text-xl uppercase text-redPrimary">
								Tarbiyah Ideal School
							</h1>
						</div>
					</Typography>
					<div className="hidden lg:block">
						<NavList />
					</div>
					<div className="hidden gap-2 lg:flex">
						<Link to="/contact">
							<Button
								size="lg"
								variant="filled"
								className="rounded-none text-white bg-mintGreen"
							>
								Contact
							</Button>
						</Link>
					</div>
					<IconButton
						variant="text"
						color="blue-gray"
						className="lg:hidden"
						onClick={() => setOpenNav(!openNav)}
					>
						{openNav ? (
							<XMarkIcon className="h-6 w-6" strokeWidth={2} />
						) : (
							<Bars3Icon className="h-6 w-6" strokeWidth={2} />
						)}
					</IconButton>
				</motion.div>
				<Collapse open={openNav}>
					<NavList />
					<div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
						<Button variant="outlined" size="sm" color="blue-gray" fullWidth>
							Sign In
						</Button>
						<Button variant="gradient" size="sm" fullWidth>
							Sign Up
						</Button>
					</div>
				</Collapse>
			</Navbar>
		</div>
	);
}
