import React from 'react';
import AboutTitle from '../../components/aboutTitle/AboutTitle';
import { useState } from 'react';
import './aboutUs.scss';
import Team1 from '../../assets/team1.jpg';
import Team2 from '../../assets/team2.jpg';
import Team3 from '../../assets/team3.jpg';
import Team4 from '../../assets/team4.jpg';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function OurTeam() {
  const [pageTitle] = useState('Our Team');

  return (
    <div className="our-team">
      <AboutTitle pageTitle={pageTitle} />
      <div className="container">
        {/* <h2 className="title">OUR MANAGEMENT TEAM</h2> */}
        <div className="row card-container">
          <div className="col-md-6 col-lg-3 card-box">
            <div className="box">
              <Link to={'/aboutus/our team/abioye'}>
                <img src={Team1} alt="Avatar" />
              </Link>
              <div className="team-info">
                <h3>Mr. A.O.S Abioye</h3>
                <h4>Managing Partner</h4>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 card-box">
            <div className="box">
              <Link to={'/'}>
                <img src={Team2} alt="Avatar" />
              </Link>
              <div className="team-info">
                <h3>Mr. Akinwale N.A</h3>
                <h4>Managers/Consultants</h4>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 card-box">
            <div className="box">
              <Link to={'/'}>
                <img src={Team3} alt="Avatar" />
              </Link>
              <div className="team-info">
                <h3>Akinduntire Atinuke</h3>
                <h4>Managers/Consultants</h4>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 card-box">
            <div className="box">
              <Link to={'/'}>
                <img src={Team4} alt="Avatar" />
              </Link>
              <div className="team-info">
                <h3>Mr. Durotoye Kayode Bisi</h3>
                <h4>Managers/Consultants</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
