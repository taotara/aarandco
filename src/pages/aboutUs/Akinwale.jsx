import React, { useEffect } from 'react';
import AboutTitle from '../../components/aboutTitle/AboutTitle';
import { useState } from 'react';
import './aboutUs.scss';
import AdewalePic from '../../assets/team2.jpg';
import Aos from 'aos';


function Akinwale() {
  const [pageTitle] = useState('Akinwale N.A.');

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
            <img src={AdewalePic} alt="Abioye" />
            <h3>Mr. Akinwale N.A.</h3>
            <h5>Managers/Consultants</h5>
          </div>
          <div className="col-md-8 right" data-aos="fade-left">
            <h2>Experience</h2>
            <p>
              Mr. Akinwale graduated in 1985 from the Architecture Department of
              The polytechnic Ibadan. He qualified as a chartered accountant in
              Year 2000. He started his working career in 1986 with the Nigerian
              Railway Corporation as a Principal Technical Officer
              (Architecture).
            </p>
            <p>
              He was in the Technical Department of NRC until 2000 when he
              qualified as a chartered accountant and thereafter moved to the
              Accounts Department. He worked at various levels in the Accounts
              Department including Manager (Accounts), Railway Property
              Management Co. Ltd, Kaduna. He was a Principal Accountant
              (Engineering) in July 2008 to March 2010 a position he held before
              joining Abioye Abdul-Razaq & Co. Mr. Akinwale has over 30 years'
              working experience and he his versed in Government Accounting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Akinwale