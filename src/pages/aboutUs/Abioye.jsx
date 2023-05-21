import React from 'react';
import AboutTitle from '../../components/aboutTitle/AboutTitle';
import { useState } from 'react';
import './aboutUs.scss';
import AbioyePic from '../../assets/team1.jpg';

function Abioye() {
  const [pageTitle] = useState('A.O.S Abioye');

  return (
    <div className="team-details">
      <AboutTitle pageTitle={pageTitle} />
      <div className="container details">
        <div className="row details-box">
          <div className="col-md-4 left">
            <img src={AbioyePic} alt="Abioye" />
            <h3>Mr. A.O.S Abioye</h3>
            <h5>Managing Partner</h5>
          </div>
          <div className="col-md-8 right">
            <h2>Experience</h2>
            <p>
              Mr. A.O.S Abioye – A 1991 graduate of Accountancy from The
              Polytechnic, Ibadan, AbdulRazaq Abioye also bagged an MBA degree
              from Federal University of Technology, Akure. He is an associate
              member of the following professional bodies: The Institute of
              Chartered Accountants of Nigeria (ACA), Chartered Institute of
              Management, Nigeria (AMNIM), Chartered Institute of Taxation of
              Nigeria (ACTI), Chartered Institute of Bankers of Nigeria (ACIB)
              and Chartered Institute of Stockbrokers (ACS).
            </p>
            <p>
              AbdulRazaq has more than 25 years' working experience across
              various sectors of the economy. He has attended various trainings
              and workshops on Taxation, Accounting, Auditing,
              Stockbroking/Capital Market, Insurance, Consulting, etc. He
              started his working career with Aremu Akindele & Co. (Chartered
              Accountants) in 1995 as an Audit Senior. He also worked at various
              times and levels as an Accountant with Umarco (Nig.) Plc, WTN Plc,
              Crusader Insurance (Nig.) Plc, Finance & Admin Manager of Red Star
              Communications, a subsidiary of Fedex Red Star Plc. He served at
              different times as the Head of Finance & Admin., Dealing Clerk
              (Floor Trader) on The Nigerian Stock Exchange, Head of
              Stockbroking Department, Chief Operating Officer and the Executive
              Director in charge of Operations at Shelong Investment Limited
              (Stockbrokers & a Member of The Nigerian Stock Exchange), a
              position he held until June 2015 when he started Managing Abioye
              Abdul-Razaq & Co.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Abioye