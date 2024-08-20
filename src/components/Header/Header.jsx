import React from 'react';
import image1 from "/src/assets/headerlogo1.jpg"
const Header = () => {
  return (
    <header className="relative bg-white shadow-md sticky top-0 z-50">
    {/* Image Section */}
    <div className="w-full h-[400px]">
      <img src={image1} alt="Kalyaneshwari Mandir" className="w-full h-[400px] object-cover" />
    </div>
    
    {/* Navbar Section */}
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
      <ul className="flex space-x-2 bg-white bg-opacity-70 p-4 rounded-md">
        <li className="hover:text-orange-600"><a href="#home">Home</a></li>
        <li className="hover:text-orange-600"><a href="#about">About</a></li>
        <li className="hover:text-orange-600"><a href="#events">Events</a></li>
        <li className="hover:text-orange-600"><a href="#gallery">Gallery</a></li>
        <li className="hover:text-orange-600"><a href="#tenders">Tenders</a></li>
        <li className="hover:text-orange-600"><a href="#donation">Donation</a></li>
        <li className="hover:text-orange-600"><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </header>
  
  
  

  );
};

export default Header;
