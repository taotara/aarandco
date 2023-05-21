import React from 'react'
import ServicesMenu from '../../components/servicesMenu/ServicesMenu';
import PageTitle from '../../components/pageTitle/PageTitle';
import { useState } from 'react';
import './services.scss';
import Fa1 from '../../assets/fa1.jpg';
import Fa2 from '../../assets/fa2.jpg';

function FinancialAdvisory() {
  const [pageTitle, setPageTitle] = useState('Financial Adversory');

  return (
    <div className="services">
      <PageTitle pageTitle={pageTitle} />
      <div className="container services-container">
        <div className="row services-layout">
          <div className="services-layout">
            <nav className="side-nav">
              <ServicesMenu />
            </nav>
            <main>
              <div className="details">
                <p>
                  Our service model is similar to the concept of SWOT Matrix.
                  That is, we basically render our Financial Advisory service by
                  providing assistance to clients in exploiting available
                  Strength in order to tap new business Opportunities and also
                  assist in turning around identified Weaknesses in order to
                  avert avoidable business challenges.
                </p>
                <div className="row my-3">
                  <div className="col-md-6 image-rep">
                    <img src={Fa1} alt="Audit and Accounting" />
                  </div>
                  <div className="col-md-6 image-rep">
                    <img src={Fa2} alt="Audit and Accounting" />
                  </div>
                </div>
                <p>
                  Our expertise is anchored on our extensive business knowledge
                  and compliance know-how. We focus on strategic, operational,
                  financial and capital needs of businesses. We address the full
                  spectrum of financial and transactional challenges faced by
                  companies, boards, private equity sponsors, creditors and
                  other stakeholders.
                </p>

                <h5>
                  We provide support to companies or investors faced with
                  STRENGHT AND OPPORTUNITIES and consequently seeking:
                </h5>
                <ul>
                  <li>Feasibility study report for start-up projects.</li>
                  <li>Business plan for expansion projects.</li>
                  <li>Merger or acquisition advice.</li>
                  <li>Research studies (viz-a-viz market survey).</li>
                  <li>
                    business valuation for purposes of buy-sell agreements and
                    other business and legal purposes.
                  </li>
                  <li>To buy or sell a business.</li>
                  <li>
                    To raise new finance or improve the efficiency of the
                    funding on their balance sheets.
                  </li>
                  <li>To execute deals and maintain regulatory compliance.</li>
                  <li>
                    Reporting accountant services for companies seeking to raise
                    funds in the capital market.
                  </li>
                  <li>
                    Scrutineers to observe election process of shareholders
                    during key business decisions made through voting.
                  </li>
                </ul>

                <h5>
                  We assist clients to address WEAKNESSES AND THREATS
                  particularly on how to handle:
                </h5>

                <ul>
                  <li>
                    FUND RAISING FOR OPERATING CASHFLOW AND PROJECTS, FRAUD,
                    LITIGATION AND RE-ORGANISATION
                  </li>
                  <li>RECEIVERSHIP AND TEMPORARY MANAGEMENT</li>
                  <li>Cash Flow And Budget Projections</li>
                  <li>LIQUIDATION AND BANKRUPTCY PROCESSES</li>
                  <li>BUSINESS PROCESS DESIGN AND OPERATIONAL MANUAL</li>
                  <li>FORENSIC INVESTIGATIONS</li>
                  <li>SHAREHOLDERS AND PARTNERSHIP AGREEMENTS, ETC.</li>
                </ul>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinancialAdvisory