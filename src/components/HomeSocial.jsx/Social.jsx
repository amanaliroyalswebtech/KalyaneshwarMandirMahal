import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPlay, FaPause } from "react-icons/fa";
import { BiSolidMessageSquareAdd } from "react-icons/bi";
import backgroundMusic from "../../assets/namamish_mishan.mp3";

const Social = () => {
  const [isMenuVisible, setMenuVisible] = useState(true);
  const [isMusicPlaying, setMusicPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(backgroundMusic);

    const playMusic = () => {
      audio.play().catch(error => {
        console.log('Autoplay prevented: ', error);
      });
    };

    if (isMusicPlaying) {
      playMusic();
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
    };
  }, [isMusicPlaying]);

  const handleClick = () => {
    setMenuVisible(!isMenuVisible);
  };

  const toggleMusic = () => {
    setMusicPlaying(!isMusicPlaying);
  };

  return (
    <div>
      <div className="fixed bottom-7 right-0 z-50 flex flex-col items-center space-y-2 lg:p-4">
        {/* Music Control Button */}
        <a
          className="bg-[#c57b1f] border-2 border-white rounded-full p-3 text-white flex items-center justify-center cursor-pointer"
          onClick={toggleMusic}
          title={isMusicPlaying ? "Pause" : "Play"}
        >
          {isMusicPlaying ? <FaPause className="w-6 h-6 sm:w-4 sm:h-4" /> : <FaPlay className="w-6 h-6" />}
        </a>

        {/* Social Media Links */}
        <div className="flex flex-col space-y-3">
          <a
            href="#"
            className={`${isMenuVisible ? "hidden" : "block"} bg-white p-3 rounded-full border-2 border-white text-blue-700`}
            target="_blank"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/shree_kalyaneshwar_mandir?igsh=MWtpaGM3bzZsZGZ4Mw=="
            className={`${isMenuVisible ? "hidden" : "block"} bg-white p-3 rounded-full border-2 border-white text-[#da214f]`}
            target="_blank"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="#"
            className={`${isMenuVisible ? "hidden" : "block"} bg-white p-3 rounded-full border-2 border-white text-[#5c6efa]`}
            target="_blank"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
          <a
            href="#"
            className={`${isMenuVisible ? "hidden" : "block"} bg-white p-3 rounded-full border-2 border-white text-[#da1919]`}
            target="_blank"
          >
            <FaYoutube className="w-6 h-6" />
          </a>
        </div>

        {/* Menu Toggle Button */}
        <a
          className="bg-[#c57b1f] border-2 border-white rounded-full p-3 text-white flex items-center justify-center cursor-pointer"
          onClick={handleClick}
        >
          <BiSolidMessageSquareAdd className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default Social;
