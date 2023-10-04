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
function App() {
  return (
    <>
      <main className="App leading-relaxed bg-mintGreen text-left">
        <BrowserRouter>
          {/* <Navbar /> */}
          <AddressNav />
          <NavbarWithMegaMenu />
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admission-procedure" element={<AdmissionProc />} />
            <Route path="/academic-schedule" element={<Schedule />} />
            <Route path="/parents" element={<Parents />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          {/* <FooterSec /> */}
          <FooterWithLogo/>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
