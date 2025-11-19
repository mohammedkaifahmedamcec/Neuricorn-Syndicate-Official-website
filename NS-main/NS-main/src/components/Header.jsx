import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Careers", path: "/careers" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5 md:px-24">
        {/* Brand */}
        <Link
          to="/"
          className="flex items-center gap-3 text-yellow-400 font-bold text-2xl md:text-3xl hover:scale-105 transition-transform"
        >
          🧠 <span>Neuricorn Syndicate</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-base md:text-lg font-medium transition-all duration-200 ${
                pathname === link.path
                  ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                  : "text-gray-300 hover:text-yellow-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA (Still commented out) */}
        {/*
        <div className="hidden md:flex gap-4">
          <button className="px-5 py-2 text-base border border-yellow-400 rounded-md text-yellow-400 hover:bg-yellow-400 hover:text-black transition">
            Schedule Demo
          </button>
          <button className="px-5 py-2 text-base bg-yellow-400 rounded-md text-black font-medium hover:bg-yellow-300 transition">
            Get Started
          </button>
        </div>
        */}

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-yellow-400 text-3xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-yellow-500/20 py-5 space-y-4 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block text-lg font-medium ${
                pathname === link.path
                  ? "text-yellow-400"
                  : "text-gray-300 hover:text-yellow-400"
              }`}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile CTA (commented out) */}
          {/*
          <div className="flex flex-col gap-4 px-8 pt-5">
            <button className="border border-yellow-400 text-yellow-400 py-2.5 rounded-md hover:bg-yellow-400 hover:text-black transition">
              Schedule Demo
            </button>
            <button className="bg-yellow-400 text-black py-2.5 rounded-md hover:bg-yellow-300 transition">
              Get Started
            </button>
          </div>
          */}
        </div>
      )}
    </header>
  );
}
