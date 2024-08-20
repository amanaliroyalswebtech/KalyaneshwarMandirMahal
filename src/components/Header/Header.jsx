import React from 'react';
import { Link } from 'react-router-dom';
import image1 from "/src/assets/headerlogo4.jpg";

const Header = () => {
  return (
    <header className="relative bg-white shadow-md top-0 z-50">
      {/* Image Section */}
      <div className="w-full h-[500px] overflow-hidden">
        <img src={image1} alt="Kalyaneshwari Mandir" className="w-full h-full object-cover" />
      </div>

      {/* Navbar Section */}
      <nav className="bg-white bg-opacity-70 p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-center">
          <ul className="flex space-x-6">
            {/* Dropdown for Home */}
            <li className="relative group">
              <Link to="/" className="hover:text-orange-600 focus:outline-none">
                Home
              </Link>
              <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300">
                <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600">Home 1</Link>
                <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600">Home 2</Link>
              </div>
            </li>

            {/* Dropdown for About */}
            <li className="relative group">
              <Link to="/about" className="hover:text-orange-600 focus:outline-none">
                About
              </Link>
              <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300">
                <Link to="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600">About 1</Link>
                <Link to="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600">About 2</Link>
              </div>
            </li>

            {/* Dropdown for Events */}
            <li className="relative group">
              <Link to="/events" className="hover:text-orange-600 focus:outline-none">
                Events
              </Link>
              <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300">
                <Link to="/events" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600">Event 1</Link>
                <Link to="/events" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600">Event 2</Link>
              </div>
            </li>

            {/* Dropdown for Gallery */}
            <li className="relative group">
              <Link to="/gallery" className="hover:text-orange-600 focus:outline-none">
                Gallery
              </Link>
              <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300">
                <Link to="/gallery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600">Gallery 1</Link>
                <Link to="/gallery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600">Gallery 2</Link>
              </div>
            </li>

            {/* Dropdown for Tenders */}
            <li className="relative group">
              <Link to="/tenders" className="hover:text-orange-600 focus:outline-none">
                Tenders
              </Link>
              <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300">
                <Link to="/tenders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600">Tender 1</Link>
                <Link to="/tenders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600">Tender 2</Link>
              </div>
            </li>

            {/* Dropdown for Donation */}
            <li className="relative group">
              <Link to="/donation" className="hover:text-orange-600 focus:outline-none">
                Donation
              </Link>
              <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300">
                <Link to="/donation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600">Donation 1</Link>
                <Link to="/donation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600">Donation 2</Link>
              </div>
            </li>

            {/* Dropdown for Contact */}
            <li className="relative group">
              <Link to="/contact" className="hover:text-orange-600 focus:outline-none">
                Contact
              </Link>
              <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300">
                <Link to="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600">Contact 1</Link>
                <Link to="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600">Contact 2</Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
