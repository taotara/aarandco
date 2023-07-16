import React, { useEffect } from 'react';
import AboutTitle from '../../components/aboutTitle/AboutTitle';
import { useState } from 'react';
import './aboutUs.scss';
import DurotoyePic from '../../assets/team4.jpg';
import Aos from 'aos';

function Durotoye() {
  const [pageTitle] = useState('Durotoye Kayode Bisi');

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="team-details">
      <AboutTitle pageTitle={pageTitle} />
      <div className="container details">
        <div className="row details-box">
          <div
            className="col-md-4 left"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img src={DurotoyePic} alt="Durotoye" />
            <h3>Mr. Durotoye Kayode Bisi</h3>
            <h5>Managers/Consultants</h5>
          </div>
          <div className="col-md-8 right" data-aos="fade-left">
            <h2>Experience</h2>
            <p>
              Kayode Bisi Durotoye brings in over 20 years of experience in
              financial and Tax Management; an Accountant and experienced Audit
              Executive. A 1991 graduate of Accountancy from The Polytechnic,
              Ado-Ekiti; he also has a PGD Management from Federal University of
              Technology, Akure. He is an Associate member of the Chartered
              Institute of Taxation of Nigeria.  He started his Accounting
              career with a notable Accounting Firm, Duro Alalade & Co.
            </p>
            <p>
              He later moved into Import and Export Finance Logistics sector as
              an Accountant in Knightsbridge Nig. Ltd. before joining Abioye
              Abdul-Razaq & Co.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Durotoye;
