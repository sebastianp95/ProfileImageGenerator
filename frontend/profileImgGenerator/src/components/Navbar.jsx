import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`navbar-container fixed top-0 z-10 w-full transition-shadow ${
        scrolled ? "bg-blue-600 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="navbar-content mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-white">ProImage</h1>
      </div>
    </div>
  );
};

export default Navbar;
