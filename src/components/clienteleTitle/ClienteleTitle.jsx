import React from 'react';
import './clienteleTitle.scss';
import Breadcrums from '../breadcrumbs/Breadcrums';

function ClienteleTitle({ pageTitle }) {
  return (
    <div
      className="clientele-title"
      style={{
        backgroundImage: `url(${require('../../assets/clienteleBg.jpg')})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        zIndex: -2,
      }}
    >
      <div className="container header-container">
        <div className="row title-content d-flex align-items-center">
          <div className="page-title">
            <h1>Clientele</h1>
            <div className="breadcrumbs">
              <Breadcrums />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClienteleTitle;
