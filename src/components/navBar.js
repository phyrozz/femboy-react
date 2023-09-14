import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faImages, faNewspaper, faCompass } from '@fortawesome/free-solid-svg-icons';
import discordIconImage from '../images/discord-icon.png';
import { useLocation } from 'react-router-dom';

const homeIcon = <FontAwesomeIcon icon={faHouse} />
const galleryIcon = <FontAwesomeIcon icon={faImages} />
const doujinIcon = <FontAwesomeIcon icon={faNewspaper} />
const exploreIcon = <FontAwesomeIcon icon={faCompass} />

function Navbar() {
  const [isNavbarOpaque, setIsNavbarOpaque] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Check if the current route is "/home"
    if (location.pathname === '/') {
      const handleScroll = () => {
        if (window.scrollY > 30) {
          setIsNavbarOpaque(false);
        } else {
          setIsNavbarOpaque(true);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      // If not on "/home", set the navbar to always be pink
      setIsNavbarOpaque(false);
    }
  }, [location]);

  const navbarClasses = `text-white fixed w-full z-50 transition-all ${
    isNavbarOpaque ? 'bg-transparent pt-4' : 'bg-pink-500 p-0'
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex justify-center">
          <a href='/'>
            <li className="px-3 sm:px-5 py-3 hover:bg-pink-600 cursor-pointer transition text-center flex gap-1 sm:gap-2 justify-center items-center flex-col sm:flex-row">
              {homeIcon}<p>Home</p>
            </li>
          </a>
          <a href='/gallery'>
            <li className="px-3 sm:px-5 py-3 hover:bg-pink-600 cursor-pointer transition text-center flex gap-1 sm:gap-2 justify-center items-center flex-col sm:flex-row">
              {galleryIcon}<p>Gallery</p>
            </li>
          </a>
          <a href='/doujins'>
            <li className="px-3 sm:px-5 py-3 hover:bg-pink-600 cursor-pointer transition text-center flex gap-1 sm:gap-2 justify-center items-center flex-col sm:flex-row">
              {doujinIcon}<p>Doujins</p>
            </li>
          </a>
          <a href='/explore'>
            <li className="px-3 sm:px-5 py-3 hover:bg-pink-600 cursor-pointer transition text-center flex gap-1 sm:gap-2 justify-center items-center flex-col sm:flex-row">
              {exploreIcon}<p>Explore</p>
            </li>
          </a>
        </ul>
        <a className='px-2 sm:px-5 py-3 hover:bg-pink-600 cursor-pointer transition text-center flex gap-1 sm:gap-2 justify-center items-center flex-col sm:flex-row' href="https://discord.gg/CKhwKtDK" target='_blank' rel="noreferrer">
          <p className='hidden md:block'>Join the Community</p>
          <img src={discordIconImage} alt="Discord Icon" className="w-5" />
          <p className='block md:hidden'>Join</p>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
