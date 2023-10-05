import Image from 'next/image';
import './footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <>
      <div className="wrapSvgFooter">

      </div>
      <footer className="footer">
        <div className="wrapContainer">
          <div className="wrapFooter">
            <div className="boxFooter boxFooter1">
              <div className="logo">
                <Image src="/images/logo-niku.png" width={70} height={70} alt='logo niku' />
              </div>
              <p>Our friendly and attentive staff are here to make your visit an enjoyable one, providing prompt service and answering any questions you may have.</p>
              <div className="wrapSocialMedia">
                <Link href="#">
                  <FontAwesomeIcon icon={faInstagram} className="socialMediaIcon" />
                </Link>
                <Link href="#">
                  <FontAwesomeIcon icon={faFacebook} className="socialMediaIcon" />
                </Link>
                <Link href="#">
                  <FontAwesomeIcon icon={faPhone} className="socialMediaIcon" />
                </Link>
              </div>
            </div>

            <div className="boxFooter boxFooter2">
              <div className="groupShortLink">
                <h3 className="titleFooterLink">Short Link</h3>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/menu">Menu</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link href="/faq">Faq</Link>
                  </li>
                </ul>
              </div>

              <div className="groupHelpLink">
                <h3 className="titleFooterLink">Help Link</h3>
                <ul>
                  <li>
                    <Link href="/review">Reviews</Link>
                  </li>
                  <li>
                    <Link href="/galery">Galery</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="/refund-policy">Refund Policy</Link>
                  </li>

                </ul>
              </div>

            </div>

            <div className="boxFooter boxFooter3">
              <h3 className="titleBoxFooter3">Contact Us</h3>
              <ul>
                <li>
                  <Link href="#"><FontAwesomeIcon icon={faPhone} className="iconBoxFooter3" /> <span>660-429-9074</span></Link>
                </li>
                <li>
                  <Link href="#"><FontAwesomeIcon icon={faEnvelope} className="iconBoxFooter3" /> <span>nikujapanesekitchen@gmail.com</span></Link>
                </li>
                <li>
                  <Link href="#"><FontAwesomeIcon icon={faMapLocation} className="iconBoxFooter3" /><span>303 Cooper Blvd Suite I, Warrensburg, MO 64093, United States</span></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <section className="credit">
        <div className="wrapContainer">
          <p>Made With ❤️ By <Link href="https://wandaazhar.vercel.app" target='_blank'>Wanda Azhar </Link> © 2023 In Michigan, USA 🇺🇸</p>
        </div>
      </section>
    </>
  );
}

export default Footer;