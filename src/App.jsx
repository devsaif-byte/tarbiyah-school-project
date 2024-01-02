import "./App.css";
import Layout from "./components/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/AboutUs/About";
import Gallery from "./pages/Gallery/Gallery";
import Notice from "./components/Notice/Notice";
import Contact from "./components/Contact/Contact";
import AdmissionProc from "./pages/Procedure/AdmissionProc";
import Schedule from "./pages/Schedule/Schedule";
import Parents from "./pages/Parents/Parents";
import Programs from "./pages/Programs/Programs";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import { NavbarWithMegaMenu } from "./components/Nav/Navbar";
import { AddressNav } from "./components/Nav/AdressNav";
import { FooterWithLogo } from "./components/Footer/Footer";
import Welcome from "./pages/Welcome/Welcome";
import NoCopyText from "./contexts/NoCopyText";

// const url =
// 	"https://my-json-server.typicode.com/devsaif-byte/tarbiyah-fake-json-server";
// const mongoUser = {
// 	username: "codeorigin3",
// 	password: "iEpw8b2NL9NCWK1z",
// };
function App() {
	window.onbeforeprint = () =>
		alert(
			"Printing this content is a violation of our copyright. Please respect our intellectual content.!"
		);
	return (
		<>
			<main className="App leading-relaxed text-left min-h-screen">
				<BrowserRouter>
					{/* <Navbar /> */}
					<AddressNav />
					<NavbarWithMegaMenu />
					<Routes>
						<Route path="/" element={<Layout />} />
						<Route path="/welcome" element={<Welcome />} />
						<Route
							path="/about"
							element={
								<NoCopyText>
									<About />
								</NoCopyText>
							}
						/>
						<Route path="/gallery" element={<Gallery />} />
						<Route path="/notice" element={<Notice />} />
						<Route path="/contact" element={<Contact />} />
						<Route
							path="/admission-procedure"
							element={
								<NoCopyText>
									<AdmissionProc />
								</NoCopyText>
							}
						/>
						<Route path="/academic-schedule" element={<Schedule />} />
						<Route path="/parents" element={<Parents />} />
						<Route path="/programs" element={<Programs />} />
						<Route path="*" element={<PageNotFound />} />
					</Routes>
					{/* <FooterSec /> */}
					<FooterWithLogo />
				</BrowserRouter>
			</main>
		</>
	);
}

export default App;
