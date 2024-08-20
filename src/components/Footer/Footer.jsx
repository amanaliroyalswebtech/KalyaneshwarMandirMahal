import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-12">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between">
        <div className="mb-8 md:mb-0">
          <div className="flex items-center mb-4">
            <i className="fa-solid fa-paper-plane text-3xl mr-2"></i>
            <i className="fa-solid fa-circle my-auto p-[5px] text-red-500"></i>
            <i className="fa-solid fa-circle my-auto p-[5px] text-green-500"></i>
            <i className="fa-solid fa-circle my-auto p-[5px] text-yellow-500"></i>
          </div>
          <p className="hover:text-yellow-400 cursor-pointer">
            Email us: <a href="mailto:contact@kalyaneshwarimandir.com" className="hover:text-yellow-400">contact@kalyaneshwarimandir.com</a>
          </p>
          <i className="fa-solid fa-temple text-5xl mt-4"></i>
        </div>
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-2">Kalyaneshwari Mandir</h2>
          <div className="w-36 h-1 border-b-2 border-yellow-400 rounded-md mb-4"></div>
          <div className="space-y-2">
            <Link to="/about" className="block hover:text-yellow-400 cursor-pointer">About Us</Link>
            <Link to="/pooja-timings" className="block hover:text-yellow-400 cursor-pointer">Pooja Timings</Link>
            <Link to="/events" className="block hover:text-yellow-400 cursor-pointer">Events</Link>
            <Link to="/contact" className="block hover:text-yellow-400 cursor-pointer">Contact Us</Link>
          </div>
        </div>
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-2">Get Involved</h2>
          <div className="w-36 h-1 border-b-2 border-yellow-400 rounded-md mb-4"></div>
          <div className="space-y-2">
            <Link to="/donation" className="block hover:text-yellow-400 cursor-pointer">Donate</Link>
            <Link to="/volunteer" className="block hover:text-yellow-400 cursor-pointer">Volunteer</Link>
            <Link to="/tenders" className="block hover:text-yellow-400 cursor-pointer">Tenders</Link>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Social Media</h2>
          <div className="w-36 h-1 border-b-2 border-yellow-400 rounded-md mb-4"></div>
          <div className="space-y-2">
            <a href="https://www.facebook.com" aria-label="Facebook" className="block hover:text-yellow-400 cursor-pointer">Facebook</a>
            <a href="https://twitter.com" aria-label="Twitter" className="block hover:text-yellow-400 cursor-pointer">Twitter</a>
            <a href="https://www.instagram.com" aria-label="Instagram" className="block hover:text-yellow-400 cursor-pointer">Instagram</a>
            <a href="https://www.youtube.com" aria-label="YouTube" className="block hover:text-yellow-400 cursor-pointer">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
