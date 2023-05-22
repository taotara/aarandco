import React from 'react';
import './careerTitle.scss';
import Breadcrums from '../breadcrumbs/Breadcrums';

function CareerTitle({ pageTitle }) {
  return (
    <div
      className="career-title"
      style={{
        backgroundImage: `url(${require('../../assets/careerBg.jpg')})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        zIndex: -2,
      }}
    >
      <div className="container header-container">
        <div className="row title-content d-flex align-items-center">
          <div className="page-title">
            <h1>Career</h1>
            <div className="breadcrumbs">
              <Breadcrums />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerTitle;
