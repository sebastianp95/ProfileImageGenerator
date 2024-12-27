import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 text-gray-300">
      <div className="container mx-auto flex flex-col items-center space-y-6 text-center">
        {/* About */}
        <p className="px-4 text-sm">
          This project is powered by{" "}
          <span className="font-semibold">Python</span> and{" "}
          <span className="font-semibold">React</span>. Built for learning and
          sharing.
        </p>

        {/* Links */}
        <div className="flex flex-col space-y-4 text-sm md:flex-row md:space-x-8 md:space-y-0">
          <a
            href="https://sebastianp95.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Hire Me
          </a>
          <a
            href="https://www.setasolutions.com.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Seta Solutions
          </a>
          <a
            href="https://www.accutaxaccountingsolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Accutax Accounting
          </a>
        </div>

        {/* Buy Me a Coffee Button */}
        <a
          href="https://www.buymeacoffee.com/sebastiansetasolutions"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            alt="Buy Me A Coffee"
            style={{ height: "60px", width: "217px" }}
          />
        </a>
      </div>

      {/* Bottom Line */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-xs text-gray-500">
        © {new Date().getFullYear()} Built by Sebastian | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
