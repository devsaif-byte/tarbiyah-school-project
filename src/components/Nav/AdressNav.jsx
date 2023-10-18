import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function NavList() {
  return (
    <ul className="my-2 py-2 flex flex-row gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Link to="https://www.facebook.com/TarbiyahIdealSchool" target="blank">
        <IconButton
          variant="gradiant"
          className="rounded-full bg-[#1DA1F2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(255, 255, 255, 1)" }}
            className="flex items-center transition-colors"
          >
            <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
          </svg>
        </IconButton>
      </Link>
      <Link to="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZWxpzpDqNgzxBZRZLqQzttxcvZRJhJGchQwcDxJMqzjtNWGwWWpJskXpBbzHXWdTZgLJV" target="blank">
        <IconButton
          variant="gradiant"
          className="rounded-full bg-red-600 hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10"
        >
        
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(255, 255, 255, 1)" }}
            
            className="flex items-center hover:text-slate-200 transition-colors"
          >
            <path d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"></path>
          </svg>
        </IconButton>
      </Link>
      <Link to="https://www.youtube.com/@TarbiyahIdealSchool" target="blank">
        <IconButton
          variant="gradiant"
          className="rounded-full bg-[#ea4335] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(255, 255, 255, 1)" }}
            className="flex items-center hover:text-white transition-colors"
          >
            <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path>
          </svg>
        </IconButton>
      </Link>
    </ul>
  );
}

export function AddressNav() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="bg-mintGreen">
      <Navbar
        color="inherite"
        className="w-full mx-auto  px-6 py-0 rounded-none shadow-none backdrop-saturate-none backdrop-blur-none bg-opacity-0 border-none"
      >
        <div className="flex items-center justify-between bg-inherite ">
          <Typography
            as="a"
            href="#"
            variant="h6"
            color="white"
            className="mr-4 cursor-pointer py-1.5 flex text-white"
          >
            <p className="divide-x-4">
              Address: House: 13, Block: B, Main Road, Dakkhin Banasree,
              Khilgaon, Dhaka-1219.
            </p>
            <p className="divide-x-4 px-10">
              Phone: +880 1331070310 | 311 | 312
            </p>
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    </div>
  );
}
