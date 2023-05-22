import React from 'react';
import './contactTitle.scss';
import Breadcrums from '../breadcrumbs/Breadcrums';

function ContactTitle({ pageTitle }) {
  return (
    <div
      className="contact-title"
      style={{
        backgroundImage: `url(${require('../../assets/contact.jpg')})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        zIndex: -2,
      }}
    >
      <div className="container header-container">
        <div className="row title-content d-flex align-items-center">
          <div className="page-title">
            <h1>Contact Us</h1>
            <div className="breadcrumbs">
              <Breadcrums />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactTitle;
