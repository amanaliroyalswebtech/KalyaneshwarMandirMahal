import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import mandirImage1 from '/src/assets/mandirImage1.jpg';
import mandirImage2 from '/src/assets/mandirImage2.jpg';
import mandirImage3 from '/src/assets/mandirImage3.jpg';
import mandirImage4 from '/src/assets/mandirImage4.jpg';
import mandirImage5 from '/src/assets/mandirImage5.jpg';
import mandirImage6 from '/src/assets/mandirImage6.jpg';
import mandala1 from '/src/assets/mandala1.png'; // Add your image path here
import HomeAbout from '../HomeComponents/HomeAbout';
import HomeServices from '../HomeServices.jsx/HomeServices';
import DailyUpdate from '../DailyUpdate/DailyUpdate';
import Social from '../HomeSocial.jsx/Social';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <>
   
      <section id="home" className="py-16 bg-orange-100 relative overflow-hidden">
        {/* Top Left Image */}
        <img
          src={mandala1}
          alt="Top Left"
          className="absolute top-0 left-0 w-[80px] h-[80px] md:w-[300px] md:h-[300px] object-cover"
        />

        {/* Top Right Image */}
        <img
          src={mandala1}
          alt="Top Right"
          className="absolute top-0 right-0 w-[80px] h-[80px] md:w-[300px] md:h-[300px] sm:w-30 sm:h-30 object-cover"
        />

        {/* about */}
        <HomeAbout/>
       
           
        {/* Heading */}


        <div className="text-center mb-12 relative z-10">
          <h2 className="text-4xl font-bold text-[#FF0000] font-poppins">Kalyaneshwar Mandir</h2>
          <p className="text-lg text-gray-600 mt-4 font-poppins">
            Welcome to the sacred Kalyaneshwar Mandir, a place of devotion and peace.
          </p>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-6">
          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Block 1 */}
            <div className="relative group" data-aos="fade-right">
              <img
                src={mandirImage1}
                alt="Mandir 1"
                className="w-full h-auto max-h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold mb-2">The Sacred Entrance</h3>
                <p className="text-sm">
                  The entrance of Kalyaneshwari Mata Mandir is adorned with intricate carvings and a grand archway that sets the tone for the spiritual experience inside.
                </p>
              </div>
            </div>

            {/* Block 2 */}
            <div className="relative group" data-aos="fade-left">
              <img
                src={mandirImage2}
                alt="Mandir 2"
                className="w-full h-auto max-h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold mb-2">Inner Sanctum</h3>
                <p className="text-sm">
                  The inner sanctum of the mandir is where the main deity resides, decorated with beautiful frescoes and sculptures.
                </p>
              </div>
            </div>

            {/* Block 3 */}
            <div className="relative group" data-aos="fade-right">
              <img
                src={mandirImage3}
                alt="Mandir 3"
                className="w-full h-auto max-h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold mb-2">Festive Celebrations</h3>
                <p className="text-sm">
                  The mandir hosts various festivals and events throughout the year, marked by vibrant decorations and community gatherings.
                </p>
              </div>
            </div>

            {/* Block 4 */}
            <div className="relative group" data-aos="fade-left">
              <img
                src={mandirImage4}
                alt="Mandir 4"
                className="w-full h-auto max-h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold mb-2">Community Outreach</h3>
                <p className="text-sm">
                  The temple organizes various charitable activities and provides support to those in need, fostering a spirit of generosity.
                </p>
              </div>
            </div>

            {/* Block 5 */}
            <div className="relative group" data-aos="fade-right">
              <img
                src={mandirImage5}
                alt="Mandir 5"
                className="w-full h-auto max-h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold mb-2">Architectural Beauty</h3>
                <p className="text-sm">
                  The mandir's architecture is a blend of traditional and contemporary styles, showcasing intricate designs and craftsmanship.
                </p>
              </div>
            </div>

            {/* Block 6 */}
            <div className="relative group" data-aos="fade-left">
              <img
                src={mandirImage6}
                alt="Mandir 6"
                className="w-full h-auto max-h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold mb-2">Peaceful Gardens</h3>
                <p className="text-sm">
                  The mandir is surrounded by beautifully maintained gardens that offer a tranquil escape from the hustle and bustle of daily life.
                </p>
              </div>
            </div>
          </div>
        </div>
  

      {/* services */}
      <HomeServices/>
      <DailyUpdate/>
      </section>
    </>
  );
};

export default Home;
