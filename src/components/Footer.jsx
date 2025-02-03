import { Link } from "react-scroll"; // For smooth scroll
import {Links} from "../constants/Detail"
function Footer() {
  return (
    <footer className="bg-black text-white py-8 w-full">
      <div className="w-full flex flex-col items-center px-4 box-border">
        {/* Navigation Links */}
        <ul className="flex space-x-6 mb-6">
          {["home", "about", "projects", "contact"].map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-500 transition"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Media Links */}
        <div className="flex space-x-6 mb-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            GitHub
          </a>
          <a
            href={Links.linkdin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            Twitter
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-400">
          &copy; 2025 MyWebsite. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
