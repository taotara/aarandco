import React from 'react'
import ServicesMenu from '../../components/servicesMenu/ServicesMenu';
import PageTitle from '../../components/pageTitle/PageTitle';
import { useState } from 'react';
import './services.scss';

function HumanResources() {
  const [pageTitle, setPageTitle] = useState('Human Resources');

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
                  Most business owners know the frustration of spending more
                  time than they want or should on non-revenue-generating
                  activities. From payroll and human resource management to
                  benefits and compensation, entrepreneurs can spend up to 40
                  percent of their precious day engaged in these necessary but
                  time-sucking tasks.
                </p>
                <p>
                  The answer for many growing companies may be to outsource
                  their HR functions. We become the legal employer of your staff
                  and handle all the payroll, benefits and HR functions.
                  Companies intend to benefit the following from HR service
                  outsourced to our firm:
                </p>

                <ul>
                  <li>Compliance with complex Federal and State regulations</li>
                  <li>Reduce and control operating costs</li>
                  <li>
                    Eliminating cost of acquiring, updating and maintaining
                    systems in-house
                  </li>
                  <li>Improve process efficiencies</li>
                  <li>Eliminate difficult-to-manage functions</li>
                  <li>
                    To free internal resources for other purposes  Resources not
                    available internally
                  </li>
                  <li>To improve the company's focus</li>
                  <li>To reduce staff/limit staff growth</li>
                </ul>

                <h5>
                  Our range of services covered under HR service practice are:
                </h5>
                <ul>
                  <li>CAPACITY TRAINING</li>
                  <li>EXECUTIVE SEARCH AND RECRUITMENT SERVICES</li>
                  <li>RECRUITMENT SERVICES FOR ACCOUNTING PERSONNEL</li>
                  <li>STAFF AUDIT</li>
                  <li>STAFF MANUAL AND EMPLOYEE HANDBOOK COMPILATION</li>
                  <li>HANDLE ALL STATUTORY DEDUCTIONS</li>
                  <li>EMPLOYMENT OFFER LETTER</li>
                  <li>
                    STAFF BACKGROUND CHECK AND REFEREE RECORDS AND CONFIRMATION.
                  </li>
                  <li>STAFF COMPENSATION AND BENEFITS</li>
                  <li>STAFF INDIVIDUAL TAX CLEARANCE CERTIFICATE</li>
                  <li>MAINTAINING STAFF RECORDS AND INFORMATION</li>
                  <li>OUTSORCED PAYROLL MANAGEMENT</li>
                  <li>PENSION AND GRATUITY ADMINISTRATION</li>
                  <li>COMPLETE OUTSOURCING  OF ALL HUMAN RESOURCE FUNCTIONS</li>
                </ul>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HumanResources