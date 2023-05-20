import React from 'react';
import ServicesMenu from '../../components/servicesMenu/ServicesMenu';
import PageTitle from '../../components/pageTitle/PageTitle';
import { useState } from 'react';
import './services.scss';
import ImagePic from '../../assets/auditMain.jpg';
import ImagePic2 from '../../assets/auditMain2.jpg';

function AuditAndAccounting() {
  const [pageTitle, setPageTitle] = useState('Audit And Accounting');

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
                  Naturally, our mainstay is STATUTORY AUDIT. Statutory Audit is
                  an independent examination of the books of Accounts of an
                  organization as will enable the auditor to satisfy himself
                  that the Financial Statements have been properly drawn up so
                  as to give a true and fair view of the state of the affairs of
                  the business at the date of the accounts. In the minds of the
                  public at large, the discovery of fraud is the principal
                  function of the Auditor thereby overshadowing his main duties
                  entirely.
                </p>
                <div className="row">
                  <div className="col-md-6 image-rep">
                    <img src={ImagePic} alt="Audit and Accounting" />
                  </div>
                  <div className="col-md-6 image-rep">
                    <img src={ImagePic2} alt="Audit and Accounting" />
                  </div>
                </div>
                <p>
                  Although of great importance, the detection of fraud and
                  errors must be regarded as incidental to such main duties. We
                  approach our audit assignments in compliance with the
                  guidelines of the International Standards on Auditing &
                  International Financial Reporting Standard (IFRS) guidelines
                  issued from time to time as deemed fit by the International
                  Accounting Standards Board (
                  <abbr
                    title="International
                  Accounting Standards Board"
                  >
                    IASB
                  </abbr>
                  ).
                </p>
                <p>
                  We work much more efficiently when clients supply us with all
                  the data we need. If we have to spend time doing catch-up
                  bookkeeping work or locating and copying needed files, the
                  length of the audit probably will increase and we are much
                  less likely to realize 100% of the value of our fees.
                </p>
                <p>
                  We have since transcended the rather menial book-keeping
                  nature of audit assignments. We discovered that by working
                  smarter, we are able to maintain and even improve the quality
                  of our audit while enhancing profits by cutting back on the
                  hours we invest in audit engagements. We have developed an
                  in-house audit template for smarter and efficient handling of
                  all our audit engagements.
                </p>

                <h5>
                  Other Specialised Audits offered by our firm are as follows:
                </h5>
                <ul>
                  <li>Management Review Audit</li>
                  <li>Stock Audit</li>
                  <li>Staff Audit</li>
                  <li>Financial Due Diligence</li>
                  <li>Fraud And Forensic Investigation, Etc.</li>
                </ul>

                <h5>The Accountacy Services we offer include:</h5>

                <ul>
                  <li>Excess Bank Charges Recovery</li>
                  <li>Accounting Books Write-Up</li>
                  <li>Cash Flow And Budget Projections</li>
                  <li>Accounting Manual</li>
                  <li>Inventory Control Manual</li>
                  <li>Accounting System Automation</li>
                  <li>Recording And Posting Of Financial Transactions.</li>
                  <li>Preparation Of Final Accounts, Etc.</li>
                </ul>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuditAndAccounting;
