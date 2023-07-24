import React from 'react';
import './footer.scss';
import FooterLogo from '../../assets/footer_logo.png';
import FooterBg from '../../assets/footer_bg.jpg';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import RoomIcon from '@mui/icons-material/Room';
import FacebookRoundedIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="footer-top-contents">
        <div className="left">
          <img src={FooterLogo} alt="Logo" />
        </div>
        <div
          className="right"
          style={{
            backgroundImage: `url(${FooterBg})`,
            backgroundPosition: 'center right',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="growBigBox">
            <h3>Grow Big with best consultation </h3>
            <Link to="/Contact Us">Get Appointment</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom-contents">
        <div className="container bottom-content">
          <div className="row">
            <div className="col-md-6 col-lg-3 card-box">
              <div className="box">
                <h3>About Us</h3>
                <p>
                  ABIOYE ABDUL-RAZAQ & CO. is an Audit, Accountancy and
                  Consulting firm with expertise in Statutory Audit, Tax
                  Matters, Management Consulting, Company Secretarial Services,
                  Human Resources and Financial Advisory Services.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 card-box">
              <div className="box">
                <h3>Useful Links</h3>
                <ul>
                  <li>
                    <Link to="/ourservices">Our Services</Link>
                  </li>
                  <li>
                    <Link to="/aboutus/the company">About Us</Link>
                  </li>
                  <li>
                    <Link to="/Clientele">Clientele</Link>
                  </li>
                  <li>
                    <Link to="/career">Career</Link>
                  </li>
                  <li>
                    <Link to="/Contact Us">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 card-box">
              <div className="box">
                <h3>Services</h3>
                <ul>
                  <li>
                    <Link to="/services/audit and accounting">
                      Audit & Accounting
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/tax planing and compliance">
                      Tax Planning & Compliance
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/company secretarial">
                      Company Secretarial
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/human resources">Human Resources</Link>
                  </li>
                  <li>
                    <Link to="/services/financial advisory">
                      Financial Advisory
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 card-box">
              <div className="box">
                <h3>Contact Us</h3>
                <p>
                  <span>
                    <PhoneIcon />
                  </span>
                  <a href="tel:08033333045">08033333045</a>, &nbsp;
                  <a href="tel:08171281100">08171281100</a>
                </p>
                <p>
                  <span>
                    <MailIcon />
                  </span>
                  <a href="mailto:info@aarandco.com.ng">info@aarandco.com.ng</a>
                </p>
                <p>
                  <span>
                    <RoomIcon />
                  </span>
                  2nd Floor, Rear Wing, No.313, Agege Motor Road, Beside GT Bank
                  Plc, Olorunshogo, Lagos. P.O Box 8127, Ikeja, Lagos.
                </p>
              </div>
            </div>
          </div>
          <div className="copyright-box">
            <div className="copyright">
              <p>2023 Abioye Abdulrazaq & co, All Rights Reserved</p>
            </div>

            <div className="socials">
              <FacebookRoundedIcon className="icon" />
              <TwitterIcon className="icon" />
              <LinkedInIcon className="icon" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
