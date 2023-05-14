import React from 'react';
import { Audit as components } from '../../assets/audit 2.svg'
import AuditAccounting from '../../assets/audit 2.svg';
import { Link } from 'react-router-dom';

function ServicesMenu() {
  return (
    <div className="service-menu">
      <div className="menu-item">
        {/* <Audit fill="black" stroke="yellow" /> */}
        <img src={AuditAccounting} alt="Service icon" />
        <Link to="/audit and accounting">Audit And Accounting</Link>
      </div>
    </div>
  );
}

export default ServicesMenu