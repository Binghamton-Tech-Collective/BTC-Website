import { React, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

const hamburgerMotion = {
  open: { opacity: 1, height: "auto", transition: { duration: 0.5 } },
  closed: { opacity: 0, height: 0, transition: { duration: 0.5 } },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [1, 0]);
  const scrollYTransition = useTransform(scrollY, [0, 100], [0, -50]);
  const [scrollingUp, setScrollingUp] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    return scrollY.on("change", (curr) => {
      if (curr < lastScrollY.current && curr < 100) setScrollingUp(true);
      else setScrollingUp(false);
      lastScrollY.current = curr;
    });
  }, [scrollY]);

  return (
    <>
      <motion.nav
        className="bg-custom-green fixed top-0 left-0 w-full z-50"
        style={{
          opacity: scrollingUp ? 1 : navOpacity,
          y: scrollingUp ? 0 : scrollYTransition,
        }}
      >
        <div className="mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-lg text-white hover:text-white hover:bg-custom-drk-green focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon for the button */}
                {isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:justify-center">
              <div className="flex-shrink-0">
                <div className="flex text-xl font-bold text-white py-1 sm:hidden sm:justify-center">
                  Binghamton Tech Collective
                </div>
              </div>
              <div className="hidden sm:flex sm:ml-6">
                <div className="flex space-x-4">
                  {/* Navigation Links */}

                  <Link
                    to="/"
                    className="flex items-center text-md text-white hover:bg-custom-drk-green hover:text-white rounded-md font-small py-1 px-3"
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="flex items-center text-md text-white hover:bg-custom-drk-green hover:text-white rounded-md py-1 px-5 font-small text-lg"
                  >
                    About
                  </Link>
                  <Link
                    to="/projects"
                    className="flex items-center text-md text-white hover:bg-custom-drk-green hover:text-white rounded-md font-small py-1 px-5 text-lg"
                  >
                    Project
                  </Link>
                  <Link
                    to="/teams"
                    className="flex items-center text-md text-white hover:bg-custom-drk-green hover:text-white rounded-md font-small py-1 px-5 text-lg"
                  >
                    Teams
                  </Link>
                  <Link
                    to="/contacts"
                    className="flex items-center text-md text-white hover:bg-custom-drk-green hover:text-white rounded-md font-small py-1 px-5 text-lg"
                  >
                    Contact Us
                  </Link>
                  <button className="bg-blue-500 rounded-md">
                    <Link
                      to="/join"
                      className="flex items-center text-md text-white hover:bg-custom-drk-green hover:text-white rounded-md font-small py-1 px-4 text-lg"
                    >
                      Join→
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div

    
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={hamburgerMotion}
          className="sm:hidden overflow-hidden"
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="flex items-center text-md text-white hover:bg-custom-drk-green hover:text-white rounded-md font-small py-1 px-5 text-lg"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="flex items-center text-md text-white hover:bg-custom-drk-green hover:text-white rounded-md font-small py-1 px-3"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="flex items-center text-md text-white hover:bg-custom-drk-green hover:text-white rounded-md font-small py-1 px-3"
            >
              Projects
            </Link>
            <Link
              to="/teams"
              className="flex items-center text-md text-white hover:bg-custom-drk-green hover:text-white rounded-md font-small py-1 px-3"
            >
              Teams
            </Link>
            <Link
              to="/contacts"
              className="flex items-center text-md text-white hover:bg-custom-drk-green hover:text-white rounded-md font-small py-1 px-3"
            >
              Contact Us
            </Link>
            <Link
              to="/join"
              className="flex items-center text-md text-white hover:bg-custom-drk-green hover:text-white rounded-md font-small py-1 px-3"
            >
              Join
            </Link>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Navbar;
