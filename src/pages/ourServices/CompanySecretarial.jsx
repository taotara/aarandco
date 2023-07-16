import React, { useEffect } from 'react';
import ServicesMenu from '../../components/servicesMenu/ServicesMenu';
import PageTitle from '../../components/pageTitle/PageTitle';
import { useState } from 'react';
import './services.scss';
import Secretarial1 from '../../assets/Secretarial1.jpg';
import Secretarial2 from '../../assets/Secretarial2.jpg';
import Aos from 'aos';

function CompanySecretarial() {
  const [pageTitle, setPageTitle] = useState('Company Secretarial');

  useEffect(() => {
    Aos.init();
  }, []);

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
                  Muni Consulting is the Company Secretarial Arm of Abioye
                  Abdul-Razaq & Co. registered in May 2011 to carry out Company
                  Secretarial work. Our personnel for this service consist of a
                  combination of the three (3) key professionals required by the
                  Corporate Affairs Commission (CAC) in rendering efficient
                  Company Secretarial Services: Chartered Secretaries, Lawyers
                  and Chartered Accountants; all with long years of experience
                  in the field. We also act as Company Secretary.
                </p>
                <div className="row my-3">
                  <div className="col-md-6 image-rep">
                    <img
                      src={Secretarial1}
                      alt="Audit and Accounting"
                      data-aos="fade-right"
                      data-aos-duration="500"
                    />
                  </div>
                  <div className="col-md-6 image-rep">
                    <img
                      src={Secretarial2}
                      alt="Audit and Accounting"
                      data-aos="fade-left"
                      data-aos-duration="500"
                    />
                  </div>
                </div>
                <h5>
                  Our numerous Corporate Secretarial Services are highlighted
                  below:
                </h5>
                <ul>
                  <li>
                    Incorporation of new companies, Registration of business
                    names and trustees for Not-For-Profit organisations.
                  </li>
                  <li>
                    Drafting Memorandum and Articles of Association for business
                    promoters' adoption during incorporation of companies.
                  </li>
                  <li>
                    We offer our office to be used as temporary registered
                    office address by entrepreneurs for the purpose of company
                    incorporation and business registration for those who have
                    not secured office spaces.
                  </li>
                  <li>We also provide nominee directors and shareholders.</li>
                  <li>
                    Incorporation and registration of company with Foreign
                    Investment through the * One Stop Investment Centre (OSIC)
                    with the Nigerian Investment Promotion Council (NIPC).
                  </li>
                </ul>

                <h5>Post Incorporation services such as:</h5>

                <ul>
                  <li>
                    Changes in incorporation records with Corporate Affairs
                    Commission (CAC), like form CAC 7, form CAC 2, alteration to
                    Memorandum and Articles of Association, authorized share
                    capital increase, changes in company's name, etc.
                  </li>
                  <li>
                    Taking Minutes and Support services at Board meetings for
                    directors and General meetings for shareholders/members.
                  </li>
                  <li>
                    Management of investments in Quoted companies on behalf of
                    our clients.
                  </li>
                  <li>
                    We provide Safe Custody and updating statutory books such as
                    the Register of Members, Register of Directors, Register of
                    Directors’ interest in shares, Register of Charges, Minutes
                    books of proceedings of the board and general meetings,
                    e.t.c.
                  </li>
                  <li>
                    Filing the appropriate Annual Returns with CAC on behalf of
                    clients in order to comply with the relevant provisions of
                    the Companies And Allied Matters Act to preserve
                    the company's name.
                  </li>
                  <li>
                    We offer intermediation support services for registration
                    and obtaining approval from relevant government agencies on
                    special corporate matters like expatriate quota, business
                    permit, approved user scheme, import licence, issue or
                    transfer of shares involving non-resident shareholders from
                    the SEC, DPR registration, registration of contractors,
                    remittance of dividends and repatriation of capital
                    overseas, etc.
                  </li>
                  <li>
                    We design, print, administer, issue, dispatch and the
                    execution of Share Certificates on behalf of clients and
                    their shareholders. We also prepare and dispatch dividend
                    warrants to shareholders where necessary.
                  </li>
                  <li>
                    We Offer trusteeship and executorship services in respect of
                    Will administration.
                  </li>
                </ul>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanySecretarial