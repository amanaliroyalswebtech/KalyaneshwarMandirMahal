import image1 from '../../assets/bannerimage5.jpg'
// import backgroundImage from '/src/assets/mandirImage7.jpg';
import image2 from "../../assets/mandirimage7.jpg"
const PopupCard = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div
        className="relative bg-white p-6 rounded-lg shadow-lg max-w-xs w-full mx-auto md:max-w-md md:w-1/2"
        style={{
          backgroundImage: `url(${image2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center opacity-75 hover:opacity-100 transition-opacity duration-300 focus:outline-none"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="w-full h-48 overflow-hidden mb-4 relative flex items-center justify-center rounded-lg">
          <img
            src={image1}
            alt="Kalyaneshwar Mandir"
            className="object-cover rounded-lg" // Add rounded-lg class here
            style={{ width: '50%', height: 'auto' }} // Adjust width and height as needed
          />
        </div>
        <h2 className="text-xl font-bold text-center mb-4 font-poppins text-amber-100-300">
          SHRI!! <br /> KALYANESHWAR <br /> MANDIR
        </h2>
        <button
          onClick={onClose} // This makes the button close the popup
          className="w-full h-12 bg-red-800 text-white rounded-full font-semibold hover:bg-gray-500 focus:outline-none transition-colors duration-300"
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default PopupCard;
