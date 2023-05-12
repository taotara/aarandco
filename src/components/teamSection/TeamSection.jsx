import React from 'react';
import './teamSection.scss';
import Team1 from '../../assets/team1.jpg';
import Team2 from '../../assets/team2.jpg';
import Team3 from '../../assets/team3.jpg';
import Team4 from '../../assets/team4.jpg';

function TeamSection() {
  return (
    <div className="team-section">
      <div className="container">
        <div className="row">
          <h3 className="subtitle">OUR TEAM</h3>
          <h2 className="title">Meet Our Team</h2>
        </div>
        <div className="row card-container" >
          <div className="col-md-6 col-lg-3 card-box">
            <div className="box">
              <img src={Team1} alt="Avatar" />
              <div className="team-info">
                <h3>Mr. A.O.S Abioye</h3>
                <h4>Managing Partner</h4>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 card-box">
            <div className="box">
              <img src={Team2} alt="Avatar" />
              <div className="team-info">
                <h3>Mr. A.O.S Abioye</h3>
                <h4>Managing Partner</h4>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 card-box">
            <div className="box">
              <img src={Team3} alt="Avatar" />
              <div className="team-info">
                <h3>Mr. A.O.S Abioye</h3>
                <h4>Managing Partner</h4>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 card-box">
            <div className="box">
              <img src={Team4} alt="Avatar" />
              <div className="team-info">
                <h3>Mr. A.O.S Abioye</h3>
                <h4>Managing Partner</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
