
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ModernNavbar from "./Components/Navbar";
import Home from "./Components/Home";
import Academics from "./Components/Academics";
import Admissions from "./Components/Admissions";
import NoticeEvents from "./Components/NoticeEvents";
import About from "./Components/About";
import Facilities from "./Components/Facilities";
import Contact from "./Components/Contact";
import NotFound from "./Components/NotFound";
import SiteFooter from "./Components/SiteFooter";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="app">
        <ModernNavbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/notice-events" element={<NoticeEvents />} />
            <Route path="/about" element={<About />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <SiteFooter />
      </div>
    </Router>
  );
}

export default App;
