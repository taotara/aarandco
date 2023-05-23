import React from 'react';
import './servicesSection.scss';
import bG from '../../assets/services_bg.jpg';
import AuditAcc from '../../assets/Audit & Accounting.png';
import Tax from '../../assets/Tax Planning & Compliance.png';
import ConmpSec from '../../assets/Company Secretarial.png';
import Hr from '../../assets/Human Resources.png';
import FinAd from '../../assets/Financial Advisory.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import OtherServicesBG from '../../assets/explore_services.jpg';
import { Link } from 'react-router-dom';

function ServicesSection() {
  return (
    <div
      className="services-section"
      style={{
        backgroundImage: `url(${bG})`,
        backgroundPosition: 'center right',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container">
        <div className="row">
          <h3 className="subtitle">OUR SERVICES</h3>
          <h2 className="title">Your success is our top priority</h2>
        </div>
        <div className="row card-container">
          <div className="col-md-6 col-lg-4 card-box">
            <div className="box">
              <img src={AuditAcc} alt="" />
              <h3>Audit & Accounting</h3>
              <p>
                Naturally, our mainstay is STATUTORY AUDIT. Statutory Audit is
                an independent examination of the books of Accounts of an
                organization as will enable the auditor to satisfy himself that
                the...
              </p>
              <a href="#">
                <span>
                  <ArrowForwardIcon />
                </span>
                Read More
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 card-box">
            <div className="box">
              <img src={Tax} alt="" />
              <h3>Tax Planning & Compliance</h3>
              <p>
                We offer worry-free tax support services without suffering from
                bureaucratic red tapism. We have the expertise to fix your tax
                problems no matter how complex they may be. We usually achieve
                this...
              </p>
              <a href="#">
                <span>
                  <ArrowForwardIcon />
                </span>
                Read More
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 card-box">
            <div className="box">
              <img src={ConmpSec} alt="" />
              <h3>Company Secretarial</h3>
              <p>
                Muni Consulting is the Company Secretarial Arm of Abioye
                Abdul-Razaq & Co. registered in May 2011 to carry out Company
                Secretarial work. Our personnel for this service consist of a...
              </p>
              <a href="#">
                <span>
                  <ArrowForwardIcon />
                </span>
                Read More
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 card-box">
            <div className="box">
              <img src={Hr} alt="" />
              <h3>Human Resources</h3>
              <p>
                Most business owners know the frustration of spending more time
                than they want or should on non-revenue-generating activities.
                From payroll and human resource management to benefits...
              </p>
              <a href="#">
                <span>
                  <ArrowForwardIcon />
                </span>
                Read More
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 card-box">
            <div className="box">
              <img src={FinAd} alt="" />
              <h3>Financial Advisory</h3>
              <p>
                We offer worry-free tax support services without suffering from
                bureaucratic red tapism. We have the expertise to fix your tax
                problems no matter how complex they may be. We usually achieve
                this...
              </p>
              <Link to="/services/financial advisory">
                <span>
                  <ArrowForwardIcon />
                </span>
                Read More
              </Link>
            </div>
          </div>
          {/* <div className="col-md-6 col-lg-4 card-box">
            <div
              className="box-extra"
              style={{
                backgroundImage: `url(${OtherServicesBG})`,
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="content">
                <h3>Explore all the Other services by Abioye Abdulazak & Co</h3>
                <a href="#">See All Services</a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
