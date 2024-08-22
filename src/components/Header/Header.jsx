import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PopupCard from '../PopupCard/PopupCard'
import image1 from '/src/assets/shivjilogo1.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const [showPopup, setShowPopup] = useState(true)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // Images for the modal
  const images = [
    '/src/assets/mandirimage3.3.jpg',
    '/src/assets/mandirimage1.3.avif',
    '/src/assets/headerlogo4.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds delay
    return () => clearInterval(interval);
  }, [images.length]);

  return (
   <header className="relative bg-orange-100  shadow-md top-0 w-full">
      {/* Navbar Section */}
      <nav className="bg-white bg-opacity-70 p-6 shadow-md z-40 relative h-[120px] flex items-center">
        <div className="container mx-auto flex items-center w-full">
          {/* Toggle Button for Mobile */}
          <button
            className="lg:hidden text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            {/* <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg> */}

          </button>
          <div className='relative lg:hidden mx-auto'>
  <div className ='absolute inset-0 bg-cover rotating-bg' />
  <img src={image1} alt="omlogo" className='h-20 relative z-10'/>
</div>

          {/* Navbar Links */}
          <ul className={`lg:flex lg:space-x-6 ${isMenuOpen ? 'block' : 'hidden'} lg:flex w-full gap-8 items-center`}>
            {/* Dropdown for Home */}
            <li className='relative md:ml-40'>
  {/* Background image with rotation */}
  <div className='absolute inset-0 bg-cover  rotating-bg'></div>
  {/* Shivji logo */}
  <img src={image1} alt="omlogo" className='h-20 relative z-10 ' />
</li>

            <li className="relative group text-center">
              <Link to="/" className="hover:text-orange-600 focus:outline-none">
                Home
              </Link>
            </li>

            {/* Dropdown for About */}
            <li className="relative group text-center">
              <Link to="/about" className="hover:text-orange-600 focus:outline-none">
                About
              </Link>
              <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300 z-50">
                <Link to="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600">About us</Link>
                <Link to="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600">History</Link>
              </div>
            </li>

            {/* Dropdown for Events */}
            <li className="relative group text-center">
              <Link to="/events" className="hover:text-orange-600 focus:outline-none">
                Events
              </Link>
              <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300 z-50">
                <Link to="/events" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600">Upcoming</Link>
                <Link to="/events" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600">Recent</Link>
              </div>
            </li>

            {/* Dropdown for Gallery */}
            <li className="relative group text-center">
              <Link to="/gallery" className="hover:text-orange-600 focus:outline-none">
                Gallery
              </Link>
              <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300 z-50">
                <Link to="/gallery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600">Mandir Images</Link>
                <Link to="/gallery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600">Mandir Videos</Link>
              </div>
            </li>

            {/* Dropdown for Tenders */}
            <li className="relative group text-center">
              <Link to="/tenders" className="hover:text-orange-600 focus:outline-none">
                Tenders
              </Link>
              <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300 z-50">
                <Link to="/tenders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600">Latest Tender</Link>
                <Link to="/tenders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600">Old Tenders</Link>
              </div>
            </li>

            {/* Dropdown for Donation */}
            <li className="relative group text-center">
              <Link to="/donation" className="hover:text-orange-600 focus:outline-none">
                Donation
              </Link>
              <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300 z-50">
                <Link to="/donation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600">Donation</Link>
                <Link to="/donation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600">Charity</Link>
              </div>
            </li>

            {/* Dropdown for Contact */}
            <li className="relative group text-center">
              <Link to="/contact" className="hover:text-orange-600 focus:outline-none">
                Contact
              </Link>
              <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300 z-50">
                <Link to="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600">Contact us</Link>
                <Link to="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600">Whatsapp</Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      {/* Image Modal Section */}
      <div className="relative w-full h-[600px] overflow-hidden z-30">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Mandir Image ${index + 1}`}
            className={`absolute transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? 'opacity-100 animate-zoom' : 'opacity-0'
            } w-full h-full object-cover`}
          />
        ))}
        
        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 z-20">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Kalyaneshwar Mandir</h2>
            <p className="text-lg italic">white"May the divine light of Kalyaneshwar guide you on the path of peace and prosperity."
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-orange-500 shadow-lg transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="p-4">
          <button className="text-gray-600 focus:outline-none" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul className="mt-4 space-y-2 text-white">
            <li>
              <Link to="/" className="block px-4 py-2 text-white hover:bg-gray-200 hover:text-orange-600">Home</Link>
            </li>
            <li>
              <Link to="/about" className="block px-4 py-2 text-white hover:bg-gray-200 hover:text-orange-600">About</Link>
            </li>
            <li>
              <Link to="/events" className="block px-4 py-2 text-white hover:bg-gray-200 hover:text-orange-600">Events</Link>
            </li>
            <li>
              <Link to="/gallery" className="block px-4 py-2 text-white hover:bg-gray-200 hover:text-orange-600">Gallery</Link>
            </li>
            <li>
              <Link to="/tenders" className="block px-4 py-2 text-white hover:bg-gray-200 hover:text-orange-600">Tenders</Link>
            </li>
            <li>
              <Link to="/donation" className="block px-4 py-2 text-white hover:bg-gray-200 hover:text-orange-600">Donation</Link>
            </li>
            <li>
              <Link to="/contact" className="block px-4 py-2 text-white hover:bg-gray-200 hover:text-orange-600">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Show Pop-Up Card */}
      {showPopup && (
        <PopupCard onClose={() => setShowPopup(false)} />
      )}
    </header>
  );
};

export default Header;
