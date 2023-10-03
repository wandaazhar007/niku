'use client'
import Link from 'next/link';
import './hero.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faPhone, faStar } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Lottie from "lottie-react";
import animation_hi4 from "../../../../public/images/animation_hi4.json";
import animation_hi from "../../../../public/images/animation_hi.json";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="wrapContainer">
        <div className="boxHero">
          <div className="colLeft">
            <div className="titleHero">
              <h3>Unleash Your Taste Buds.</h3>
              <h1>Explore <span> Niku Japanese Kitchen</span></h1>
            </div>
            <h6>Visit us today and experience the thrill of hibachi cuisine brought to life at Kansha Hibachi Express. We look forward to serving you and sharing the joy of our flavorful creations.</h6>
            <Link href="#" className="cta">
              <button className="ctaBtnHero">Order Now <FontAwesomeIcon icon={faPhone} /></button>
            </Link>
            <div className="rating">
              <div className="star">
                <FontAwesomeIcon icon={faStar} className='iconStar' />
                <FontAwesomeIcon icon={faStar} className='iconStar' />
                <FontAwesomeIcon icon={faStar} className='iconStar' />
                <FontAwesomeIcon icon={faStar} className='iconStar' />
                <FontAwesomeIcon icon={faStar} className='iconStar' />
              </div>
              <p>5 Stars Ratings on <Link href="#">Google Review <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Link></p>
            </div>
          </div>
          <div className="colRight">
            <div className="box box1">
              <Image src="/images/logo-niku.png" width={100} height={100} alt="logo" />

            </div>
            <div className="box box2">
              <Lottie animationData={animation_hi4} loop={true} className='animationHi' />
            </div>
            <div className="box box3">
              <Lottie animationData={animation_hi} loop={true} className='animationHi' />
            </div>
            {/* <div className="box box4">box 4</div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;