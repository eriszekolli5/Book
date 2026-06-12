import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-purple-800 text-white mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          
          <div>
            <h2 className="text-2xl font-bold mb-3">
              Book Library
            </h2>
            <p className="text-white">
              Discover, manage, and enjoy your favorite books all in one place.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">
              Quick Links
            </h3>

            <ul className="space-y-2 text-white">
              <li>
                <Link to="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/books" className="hover:text-gray-300">
                  Books
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">
              Contact
            </h3>

            <p className="text-white">
              Email: library@example.com
            </p>

            <p className="text-white">
              Phone: +383 44 123 456
            </p>
          </div>
        </div>

       
      </div>
    </footer>
  );
}

export default Footer;