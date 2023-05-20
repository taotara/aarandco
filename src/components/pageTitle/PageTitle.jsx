import React from 'react';
import './pageTitle.scss';
import ServicesHead from '../../assets/services_bg.jpg';
import Breadcrums from '../breadcrumbs/Breadcrums';

function PageTitle({ pageTitle, pageTitleBg }) {
  return (
    <div
      className="services-title"
      style={{
        backgroundImage: `url(${require('../../assets/services_bg.jpg')})`,
        backgroundPosition: 'center right',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
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

export default PageTitle;
