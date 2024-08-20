import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer className="flex h-auto w-full flex-wrap items-center bg-gray-900 p-12 text-white flex-col md:flex-row justify-around">
        <div>
          <div className="flex w-full flex-wrap">
            <i className="fa-solid fa-paper-plane text-3xl mr-2"></i>
            <i className="fa-solid fa-circle my-auto p-[5px] text-red-500"></i>
            <i className="fa-solid fa-circle my-auto p-[5px] text-green-500"></i>
            <i className="fa-solid fa-circle my-auto p-[5px] text-yellow-500"></i>
          </div>
          <p className="hover:text-yellow-500 cursor-pointer">
            Email us: contact@royalswebtechpvtltd.com
          </p>
          <i className="fa-solid fa-medal text-5xl p-2"></i>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Royal Skills</h2>
          <div className="w-36 h-1 border-b-2 border-yellow-400 rounded-md my-[4px]"></div>
          <div>
            <Link to="/about" className="hover:text-yellow-500 block">About us</Link>
            <Link to="/faqs" className="hover:text-yellow-500 block">FAQs</Link>
            <Link to="/privacy" className="hover:text-yellow-500 block">Privacy Policy</Link>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Products</h2>
          <div className="w-36 h-1 border-b-2 border-yellow-400 rounded-md my-[4px]"></div>
          <div>
            <Link to="/lab" className="hover:text-yellow-500 block">Royal Skills Lab</Link>
            <Link to="/jobs" className="hover:text-yellow-500 block">Job Portal</Link>
            <Link to="/experience" className="hover:text-yellow-500 block">Experience Portal</Link>
            <Link to="/affiliate" className="hover:text-yellow-500 block">Become an affiliate</Link>
            <Link to="/hall-of-fame" className="hover:text-yellow-500 block">Hall of Fame</Link>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Links</h2>
          <div className="w-36 h-1 border-b-2 border-yellow-400 rounded-md my-[4px]"></div>
          <div>
            <Link to="/discord" className="hover:text-yellow-500 block">Discord</Link>
            <Link to="/youtube" className="hover:text-yellow-500 block">Royals YouTube</Link>
            <Link to="/careers" className="hover:text-yellow-500 block">Careers</Link>
            <Link to="/linkedin" className="hover:text-yellow-500 block">LinkedIn</Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
