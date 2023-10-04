import { Typography } from "@material-tailwind/react";
import logo from '../../images/tarbiyah_logo.jpg'
export function FooterWithLogo() {
  return (
    <footer className="w-full bg-white text-gray p-8">
      <div className="container">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
          <img src={logo} alt="logo-ct" className="w-10" />
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 ">
            <li>
              <Typography
                as="a"
                href="#"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                About Us
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                License
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Contribute
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Contact Us
              </Typography>
            </li>
          </ul>
        </div>
        <hr className="my-8 border-blue-gray-50" />
        <Typography  className="text-center font-normal">
          &copy; Tarbiyah Ideal School 2023 | All right reserves.
        </Typography>
      </div>
    </footer>
  );
}
