import React from 'react';
import './AboutUsSection.scss';
import PrimaryImg from '../../assets/about_us_section_primary.jpg';
import SecondarImg from '../../assets/about_us_section_secondary.jpg';
import Chevron from '../../assets/mdi_chevron-double-right.png'

function AboutUsSection() {
  return (
    <div className="about-us-section">
      <div className="container">
        <div className="row">
          <div className="col-md-5 about-image">
            <div
              className="img-primary"
              style={{
                backgroundImage: `url(${PrimaryImg})`,
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div
                className="img-secondary"
                style={{
                  backgroundImage: `url(${SecondarImg})`,
                  backgroundPosition: 'center right',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              ></div>
            </div>
          </div>
          <div className="col-md-7 about-section-txt">
            <h3 className="subtitle">ABOUT ABIOYE ABDUL-RAZAQ & CO</h3>
            <h2 className="title">
              Integrity, expertise, and excellence in all we do.
            </h2>
            <p>
              Our culture is significantly influenced by the heritage of the
              firm and, as such, we focus on building long-term client
              relationship and doing what is best for our client. We provide
              services to companies throughout their life cycles – Micros, SMEs
              and Large cap companies.
            </p>
            <div className="clients">
              <h3>Our clients includes and not limited to:</h3>
              <div className="client-list d-flex p-2 justify-content-around">
                <ul style={{ listStyleImage: `url(${Chevron})` }}>
                  <li>Professional firms</li>
                  <li>Public sector</li>
                  <li>Franchising</li>
                </ul>
                <ul style={{ listStyleImage: `url(${Chevron})` }}>
                  <li>Charity and not-for-profit organizations</li>
                  <li>Media and entertainment</li>
                  <li>Auto mobile</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;
