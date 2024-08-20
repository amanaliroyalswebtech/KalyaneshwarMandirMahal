import React from 'react'
import image1 from "/src/assets/headerlogo4.jpg"

const Header = () => {
  return (
    <header className="relative bg-white shadow-md  top-0 z-50">
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
              <a href="#home" className="hover:text-orange-600 focus:outline-none">
                Home
              </a>
              <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300">
                <a href="#home1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600">Home 1</a>
                <a href="#home2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600">Home 2</a>
              </div>
            </li>

            {/* Dropdown for About */}
            <li className="relative group">
              <a href="#about" className="hover:text-orange-600 focus:outline-none">
                About
              </a>
              <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300">
                <a href="#about1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600">About 1</a>
                <a href="#about2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600">About 2</a>
              </div>
            </li>

            {/* Dropdown for Events */}
            <li className="relative group">
              <a href="#events" className="hover:text-orange-600 focus:outline-none">
                Events
              </a>
              <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300">
                <a href="#event1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600">Event 1</a>
                <a href="#event2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600">Event 2</a>
              </div>
            </li>

            {/* Dropdown for Gallery */}
            <li className="relative group">
              <a href="#gallery" className="hover:text-orange-600 focus:outline-none">
                Gallery
              </a>
              <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300">
                <a href="#gallery1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600">Gallery 1</a>
                <a href="#gallery2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600">Gallery 2</a>
              </div>
            </li>

            {/* Dropdown for Tenders */}
            <li className="relative group">
              <a href="#tenders" className="hover:text-orange-600 focus:outline-none">
                Tenders
              </a>
              <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300">
                <a href="#tender1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600">Tender 1</a>
                <a href="#tender2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600">Tender 2</a>
              </div>
            </li>

            {/* Dropdown for Donation */}
            <li className="relative group">
              <a href="#donation" className="hover:text-orange-600 focus:outline-none">
                Donation
              </a>
              <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300">
                <a href="#donation1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600">Donation 1</a>
                <a href="#donation2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600">Donation 2</a>
              </div>
            </li>

            {/* Dropdown for Contact */}
            <li className="relative group">
              <a href="#contact" className="hover:text-orange-600 focus:outline-none">
                Contact
              </a>
              <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300">
                <a href="#contact1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600">Contact 1</a>
                <a href="#contact2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600">Contact 2</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
