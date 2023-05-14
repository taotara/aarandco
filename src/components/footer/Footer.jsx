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

function Footer() {
  return (
    <footer>
      <div className="d-flex footer-top-contents">
        <div className="col-md-12 col-lg-6 left">
          <img src={FooterLogo} alt="Logo" />
        </div>
        <div
          className="col-md-12 col-lg-6 right"
          style={{
            backgroundImage: `url(${FooterBg})`,
            backgroundPosition: 'center right',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="growBigBox d-flex justify-content-around align-items-center">
            <h3>Grow Big with best consultation </h3>
            <a href="#">Get Appointment</a>
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
                    <a href="#">Our Services</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Clientele</a>
                  </li>
                  <li>
                    <a href="#">Career</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 card-box">
              <div className="box">
                <h3>Services</h3>
                <ul>
                  <li>
                    <a href="#">Audit & Accounting</a>
                  </li>
                  <li>
                    <a href="#">Tax Planning & Compliance</a>
                  </li>
                  <li>
                    <a href="#">Company Secretarial</a>
                  </li>
                  <li>
                    <a href="#">Human Resources</a>
                  </li>
                  <li>
                    <a href="#">Financial Advisory</a>
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
                  08033333045, 08171281100
                </p>
                <p>
                  <span>
                    <MailIcon />
                  </span>
                  info@aarandco.com.ng
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
          <div className="row copyright-box">
            <div className="copyright">
              <p>2023 Abioye Abdulrazaq & co, All Rights Reserved</p>
            </div>
            
            <div className="socials">
              <FacebookRoundedIcon className='icon' />
              <TwitterIcon className='icon' />
              <LinkedInIcon className='icon' />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer