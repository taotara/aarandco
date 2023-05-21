import React from 'react';
import './aboutTitle.scss';
import Breadcrums from '../breadcrumbs/Breadcrums';

function AboutTitle({ pageTitle }) {
  return (
    <div
      className="about-title"
      style={{
        backgroundImage: `url(${require('../../assets/about_us_title.jpg')})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        zIndex: -2
      }}
    >
      <div className="container header-container">
        <div className="row title-content d-flex align-items-center">
          <div className="page-title">
            <h1>{pageTitle}</h1>
            <div className="breadcrumbs">
              <Breadcrums />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTitle