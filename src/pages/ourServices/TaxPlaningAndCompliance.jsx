import React from 'react'
import ServicesMenu from '../../components/servicesMenu/ServicesMenu';
import PageTitle from '../../components/pageTitle/PageTitle';
import { useState } from 'react';
import './services.scss';

function TaxPlaningAndCompliance() {
  const [pageTitle, setPageTitle] = useState('Tax Planing And Compliance');

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
                  We offer worry-free tax support services without suffering
                  from bureaucratic red tapism. We have the expertise to fix
                  your tax problems no matter how complex they may be. We
                  usually achieve this without indulging in sharp practices(Tax
                  Evasion) but rather by exploitingto your advantage, the
                  incentives in the tax Laws, to make your system tax-efficient.
                </p>
                <p>
                  Our service objective is to help our clients to succeed by
                  ensuring compliance with the various tax laws in the country.
                  Our partners are highly qualified men, some of who have worked
                  in various tax departments in the past. Queries are attended
                  to promptly. We advise clients on matters relating to capital
                  gains, personal taxes particularly for directors and
                  partnerships and the processing of Tax Clearance Certificates
                  (TCCs), which have become a sine-qua-non for most business
                  relationships with the governments in Nigeria.
                </p>
                <p>
                  We have a good track record in the area of procuring from the
                  Federal Ministry of Trade and Industries, Acceptance
                  Certificates on qualified capital expenditures for the purpose
                  of enjoying annual capital allowances, to the delight of our
                  esteemed clients. Regularly, we issue to our clients, Taxation
                  News Letters, explaining changes in Tax laws and practice.
                  This is to keep them informed about the laws.
                </p>

                <h5>
                  We also guide our clients in complying with the relevant
                  provisions of the tax laws as it affects their businesses. Our
                  range of Tax Support Services covers the following taxes, tax
                  benefits and tax responsibilities:
                </h5>
                <ul>
                  <li>Value Added Tax (VAT ) - Monthly filing of returns.</li>
                  <li>
                    Statutory deductions and Pay-As-You-Earn (PAYE) - Monthly
                    remittance and compliance.
                  </li>
                  <li>
                    Withholding Taxes (Credit Notes approvals, deduction guides
                    and their utilization).
                  </li>
                  <li>
                    Company Income Taxation - Compliance advice and assistance
                    in filing.
                  </li>
                  <li>
                    Direct Assessment for Directors, self-employed and artisans.
                  </li>
                  <li>
                    Tax Clearance Certificates (TCCs) for both individuals and
                    companies.
                  </li>
                  <li>
                    Income Tax and Capital Allowance computations and filing
                    with tax authorities.
                  </li>
                  <li>
                    End-of-the-year Returns' filing with the relevant tax
                    authorities (Federal and States).
                  </li>
                  <li>Pioneer status incentives.</li>
                  <li>Petroleum Profit Taxes(PPT)</li>
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

export default TaxPlaningAndCompliance