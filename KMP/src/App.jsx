import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import KMP_LOGO from './assets/kmp.jpg';

const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;

const Contact = () => <div>Contact Page</div>;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <nav className="text-black bg-white">
        <div className="flex items-center justify-between px-6 py-4 sm:px-10 md:px-20">
          <div className="flex items-center justify-center w-full sm:w-auto">
            <img src={KMP_LOGO} alt="KMP Logo" className="w-auto h-8" />
          </div>

          {/* Desktop Navigation */}
          <div className="justify-center hidden w-full font-bold sm:flex sm:justify-center md:gap-6">
            {["Home", "About", "Services", "Contact"].map((label) => (
              <div key={label} className="relative pb-1 mx-4 group">
                <Link
                  to={`/${label.toLowerCase()}`}
                  className="transition-all duration-300"
                >
                  {label}
                </Link>
                <span className="block absolute left-0 right-0 bottom-0 bg-yellow-500 h-0.5 transform scale-x-0 transition-all duration-300 ease-in-out group-hover:scale-x-100"></span>
              </div>
            ))}
          </div>

          {/* Hamburger Icon for Mobile */}
          <button
            className="sm:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <div
              className="w-6 h-0.5 bg-black mb-1"
              style={{
                transform: menuOpen ? "rotate(45deg) translateY(6px)" : "rotate(0deg)",
                transition: "0.3s",
              }}
            />
            <div
              className="w-6 h-0.5 bg-black mb-1"
              style={{ opacity: menuOpen ? "0" : "1", transition: "0.3s" }}
            />
            <div
              className="w-6 h-0.5 bg-black"
              style={{
                transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "rotate(0deg)",
                transition: "0.3s",
              }}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`flex flex-col items-center gap-4 py-4 overflow-hidden bg-blue-800 sm:hidden ${menuOpen ? "h-auto opacity-100" : "h-0 opacity-0"}`}
          style={{ transition: "height 0.5s ease, opacity 0.5s ease" }}
        >
          {["Home", "About", "Services", "Contact"].map((label) => (
            <div key={label} className="relative pb-1 mx-4 group">
              <Link
                to={`/${label.toLowerCase()}`}
                className="text-white transition-all duration-300"
              >
                {label}
              </Link>
              <span className="block absolute left-0 right-0 bottom-0 bg-yellow-500 h-0.5 transform scale-x-0 transition-all duration-300 ease-in-out group-hover:scale-x-100"></span>
            </div>
          ))}
        </div>
      </nav>

      {/* Define Routes */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={< About/>} />
        <Route path="/contact" element={< Contact/>} />
      </Routes>
    </Router>
  );
};

export default Navbar;
