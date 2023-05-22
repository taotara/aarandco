import React from 'react';
import './clientele.scss';
import ClienteleTitle from '../../components/clienteleTitle/ClienteleTitle';
import { useState } from 'react';
import ClientelePic from '../../assets/clientele.jpg';
import Chevron from '../../assets/mdi_chevron-double-right.png';

const Clientele = () => {
  const [pageTitle] = useState('Clientele');

  return (
    <div className="clientele">
      <ClienteleTitle />
      <div className="container clientele-main">
        <div className="row box">
          <div className="col-md-4 left">
            <img src={ClientelePic} alt="clientele" />
          </div>
          <div className="col-md-8 right">
            <p>
              Our range of services is exceptional for a firm of our size,
              reflecting the strength of our organization and our commitment to
              delivering the expert services our clients require. Our
              understanding of the special Accounting needs in different
              industries has prepared us in working with quoted companies,
              owner- managed businesses and privately owned businesses drawn
              from a wide range of industries/commercial sectors. Our clients
              include:
            </p>
          </div>
        </div>
        <div className="row list">
          <ul style={{ listStyleImage: `url(${Chevron})` }}>
            <li>Professional firms (Legal, Medical, Surveying, etc)</li>
            <li>Public sector</li>
            <li>Franchising</li>
            <li>
              Charity and not-for-profit (Education, Religious bodies, NGOs,
              Trade associations, Sports, Schools, etc)
            </li>
            <li>Media and entertainment</li>
            <li>Automobile</li>
            <li>Tourism, leisure and hospitality</li>
            <li>Property and real estate</li>
            <li>Manufacturing</li>
            <li>Retail and wholesale</li>
            <li>Engineering and construction</li>
            <li>Marketing services</li>
            <li>
              Private individuals ( Artisans, Trusts & Estates, Entrepreneurs,
              e.t.c)
            </li>
            <li>Farming and Agriculture</li>
            <li>Oil and gas</li>
            <li>Transportation and logistics (Passenger, Cargo and Courier)</li>
            <li>Service industries (Financial Institutions, e.t.c)</li>
            <li>Fast Moving Consumer Goods(FCMG).</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Clientele