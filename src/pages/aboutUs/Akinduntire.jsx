import React, { useEffect } from 'react';
import AboutTitle from '../../components/aboutTitle/AboutTitle';
import { useState } from 'react';
import './aboutUs.scss';
import AkinduntirePic from '../../assets/team3.jpg';
import Aos from 'aos';

function Akinduntire() {
  const [pageTitle] = useState('Akinduntire Atinuke');

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
            <img src={AkinduntirePic} alt="Abioye" />
            <h3>Akinduntire Atinuke</h3>
            <h5>Managers/Consultants</h5>
          </div>
          <div className="col-md-8 right" data-aos="fade-left">
            <h2>Experience</h2>
            <p>
              Atinuke is a prolific chartered accountant with immense practical
              experience in the Accounting field. She has traversed various
              sectors with a view to broadening her horizon and this has given
              her the necessary hands-on experience to ensure that her abilities
              are both reliable and proficient.
            </p>
            <p>
              A graduate of the prestigious Obafemi Awolowo University (OAU,
              Ile-Ife) in Osun state; Atinuke is also a certified member of the 
              Institute of Chartered Accountants of Nigeria. She is a student
              member of the Chartered Institute of Taxation of Nigeria with an
              IFRS Certification in Whales in view and a CFE Certification in
              view as well.
            </p>
            <p>
              She began her career in Intercontinental Bank Plc as the Assistant
              Branch Resident controller after which she worked in Bloomfield
              Advocates & Solicitors as the Accountant and Office Manager.  In
              2013, she furthered her career at The Chair Centre where she
              actively took on 2 successive roles, first as the Treasury
              Accountant and later as the Financial Accounting and Reporting
              Officer where her primary role involved Book-keeping and General
              Ledger Maintenance as well as generating Reports monthly and
              Reconciliation of Bank transactions; Fixed Assets Register
              Update-Reconciling the Fixed Assets Register with the Fixed Assets
              Ledgers. She also had a brief stint at Lashone Links Group of
              Companies, a real estate company, as the Chief Finance
              Officer(CFO). Atinuke was the Chief Accountant at Promo Prints
              Ventures Limited where she headed the Accounts department; a
              position she left to embrace self-employment solving Financial
              Reporting problems for start-up companies, rendering Advisory
              services, etc. She collaborates with Audit Firms on professional
              assignments/engagements, where necessary, to secure greater
              value-added results.
            </p>
            <p>
              Atinuke, outside her Accounting pursuits, has personal interests
              which include mentoring and imparting Accounting knowledge in
              students pro-bono as well as Fashion Designing. She recently
              concluded a course organised by the Daystar Christain
              Centre(Dsap). Finally, achieving good and timely results boost her
              happiness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Akinduntire;
