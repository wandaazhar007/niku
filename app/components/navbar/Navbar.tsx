'use client'
import './navbar.scss';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from "next/navigation";
const Navbar: React.FC = () => {

  const pathName = usePathname();
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleMenu = () => {
    setIsActive(!isActive);
  }

  return (
    <header className="header">
      <div className="wrapContainer">
        <div className="boxHeader">

          <div className="logo">
            <Image src="/images/logo-niku.png" width={70} height={70} alt='logo niku japanese kitchen' />
            <h1 className="titleLogo">Japanese Kitchen</h1>
          </div>

          <div className={`nav ${isActive ? 'on' : ''}`}>
            <ul className='navUl'>
              <li className={`navLi ${pathName === '/' ? 'active' : ''}`}>
                <Link href="/">Home</Link>
              </li>
              <li className={`navLi ${pathName === '/about' ? 'active' : ''}`}>
                <Link href="/">About</Link>
              </li>
              <li className={`navLi ${pathName === '/menu' ? 'active' : ''}`}>
                <Link href="/">Menu</Link>
              </li>
              <li className={`navLi ${pathName === '/contact' ? 'active' : ''}`}>
                <Link href="/">Contact</Link>
              </li>
              <li className={`navLi ${pathName === '/faq' ? 'active' : ''}`}>
                <Link href="/">Faq</Link>
              </li>
              <li className={`navLi ${pathName === '/review' ? 'active' : ''}`}>
                <Link href="/">Reviews</Link>
              </li>
            </ul>
          </div>

          {/* <div className="ctaButton">
            <Link href="#">
              <button>Call Us <FontAwesomeIcon icon={faPhone} className="icon" /></button>
            </Link>
          </div> */}

          {/* <div className="toggleMenu"> */}
          {isActive ? (
            <FontAwesomeIcon icon={faClose} className="iconToggleClose" onClick={handleMenu} />
          ) : (
            <FontAwesomeIcon icon={faBars} className="iconToggleMenu" onClick={handleMenu} />
          )}
          {/* </div> */}
        </div>
      </div>
    </header>
  );
}

export default Navbar;