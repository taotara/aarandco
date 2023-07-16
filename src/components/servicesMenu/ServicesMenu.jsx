import React, { useEffect } from 'react';
import AuditAccounting from '../../assets/audit 2.svg';
import { Link, NavLink } from 'react-router-dom';
import Audit from '../../components/svg/Audit';
import Tax from '../../components/svg/Tax';
import Secretarial from '../../components/svg/Secretarial';
import Hr from '../../components/svg/Hr';
import FinancialAdvisory from '../../components/svg/FinancialAdvisory';
import './servicesMenu.scss';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PhoneSharpIcon from '@mui/icons-material/PhoneSharp';
import Aos from 'aos';

function ServicesMenu() {

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <nav className="service-menu">
      <div className="menu-item">
        <NavLink to="/services/audit and accounting">
          {' '}
          <span>
            <Audit />
          </span>{' '}
          Audit And Accounting <ChevronRightIcon className="chev" />
        </NavLink>
      </div>
      <div className="menu-item">
        <NavLink to="/services/tax planing and compliance">
          {' '}
          <span>
            <Tax />
          </span>{' '}
          Tax Planning & Compliance <ChevronRightIcon className="chev" />
        </NavLink>
      </div>
      <div className="menu-item">
        <Link to="/services/company secretarial">
          {' '}
          <span>
            <Secretarial />
          </span>{' '}
          Company Secretarial <ChevronRightIcon className="chev" />
        </Link>
      </div>
      <div className="menu-item">
        <Link to="/services/human resources">
          {' '}
          <span>
            <Hr />
          </span>{' '}
          Human Resources <ChevronRightIcon className="chev" />
        </Link>
      </div>
      <div className="menu-item">
        <Link to="/services/financial advisory">
          {' '}
          <span>
            <FinancialAdvisory />
          </span>{' '}
          Financial Advisory <ChevronRightIcon className="chev" />
        </Link>
      </div>
      <div
        className="consultation"
        style={{
          backgroundImage: `url(${require('../../assets/contact_us.jpg')})`,
          backgroundPosition: 'center right',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        data-aos="zoom-in-up"
      >
        <div className="consultation-message">
          <div className="consultation-inner">
            <div className="left">
              <div className="call-box">
                <PhoneSharpIcon className="call" />
              </div>
            </div>
            <div className="right">
              <h4>CALL FOR CONSULTATION</h4>
              <h2>080 333 33045</h2>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default ServicesMenu