import { useEffect, useState, useRef } from "react";
import logo from "../../assets/logokk.png";
import Reveal from "../../components/sections/reveal";

export default function Navbar() {
  const [showGradient, setShowGradient] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setShowGradient(true);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        setShowGradient(false);
      }, 2000);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <nav
    className={`
      fixed top-0 left-0 w-full z-50
      transition-transform duration-300 ease-in-out
      ${showNavbar ? "translate-y-0" : "-translate-y-full"}
      `}
      >
      <Reveal>
      {/* Gradient Background */}
      <div
        className={`
          absolute inset-0
          bg-gradient-to-b from-black/20 to-transparent
          transition-opacity duration-500 ease-in-out
          ${showGradient ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">

        {/* Logo */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="hover:scale-125 transition"
      >
        <img src={logo} alt="logo" className="w-24 h-10 object-contain" />
      </a>

        {/* Menu */}
        <ul className="hidden mx-auto md:flex gap-8 text-white font-light bg-black/20 backdrop-blur-lg border border-white/30 rounded-full px-6 py-2 shadow-lg">
          <li><a href="#about" className="hover:text-primary transition">About</a></li>
          <li><a href="#commission" className="hover:text-primary transition">Commission</a></li>
          <li><a href="#portfolio" className="hover:text-primary transition">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
        </ul>

        {/* Button Scroll to Order */}
        <a 
          href="#order"
          className="text-white font-light bg-black/20 backdrop-blur-lg border border-white/30 rounded-full px-6 py-2 shadow-lg hover:bg-[#FFA600] hover:text-white transition"
        >
          Order Now
        </a>
      </div>
      </Reveal>
    </nav>
  );
}
