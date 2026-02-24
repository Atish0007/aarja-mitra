
import {useEffect} from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Header from './components/Header'
import Home from "./components/pages/Home"
import Services from "./components/pages/Services";
import Process from "./components/pages/Process";
import ArjForm from "./components/pages/ArjForm";
import QuickFormSection from "./components/pages/QuickFormSection";
// import Sevashetra from "./components/pages/Sevashetra";
import CallBannerSection from "./components/pages/CallBannerSection";
import WhyChooseSection from "./components/pages/WhyChooseSection";

import About from "./components/pages/About"
import WhoApply from "./components/pages/WhoApply";
import Problems from "./components/pages/Problems";
import Footer from "./components/Footer";
import MojaniGallery from "./components/pages/MojaniGallery";
import ContactForm from "./components/pages/ContactForm";

function App() {

//Prevent Inspect  
useEffect(() => {
   const handleContextMenu = (e) => {
      e.preventDefault();
    };
  const handleKeyDown = (e) => {
    if (
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && e.key === "I") ||
      (e.ctrlKey && e.shiftKey && e.key === "J") ||
      (e.ctrlKey && e.key === "U")
    ) {
      e.preventDefault();
    }
  };
  document.addEventListener("contextmenu", handleContextMenu);
  document.addEventListener("keydown", handleKeyDown);

  return () => {
    document.removeEventListener("keydown", handleKeyDown);
    document.removeEventListener("contextmenu", handleContextMenu);
  };
}, []);


const location = useLocation();
  return (
    <>
      <Header/>
      <main className="page-wrapper">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="services" element={<Services />} />
                <Route path="Process" element={<Process />} />
                <Route path="arjform" element={<ArjForm />} />
                <Route path="quickformsection" element={<QuickFormSection />} />
                <Route path="mojanigallery" element={ <MojaniGallery />} />
                <Route path="whychoosesection" element={ <WhyChooseSection />} />
                <Route path="callbannersection" element={<CallBannerSection />} />
                <Route path="contactform" element={<ContactForm />} />
                <Route path="about" element={<About />} />
                <Route path="whoapply" element={<WhoApply />} />
                <Route path="problems" element={<Problems />}/>
            </Routes>
            {location.pathname === "/" && <Services />}
            {location.pathname === "/" && <Process />}
            {location.pathname === "/" && <ArjForm />}
            {location.pathname === "/" && <QuickFormSection />}
            {location.pathname === "/" && <MojaniGallery />}
            {location.pathname === "/" && <WhyChooseSection />}
            {location.pathname === "/" && <CallBannerSection />}
      </main>
      <Footer />
       
      
    </>
  )
}

export default App;
