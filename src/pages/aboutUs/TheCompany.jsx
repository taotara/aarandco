import React from 'react';
import AboutTitle from '../../components/aboutTitle/AboutTitle';
import './aboutUs.scss';
import { useState } from 'react';
import Mission from '../../assets/mission.jpg';
import Vision from '../../assets/vision.jpg';
import FormatQuoteSharpIcon from '@mui/icons-material/FormatQuoteSharp';
import Values from '../../assets/values.jpg'

function TheCompany() {
  const [pageTitle] = useState('The Company');

  return (
    <div className="about-us">
      <AboutTitle pageTitle={pageTitle} />
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-md-4 welcome">
            <h5 className="subtitle">About the company</h5>
            <h2 className="title">Welcome To Abioye Abdul-razaq & Co</h2>
          </div>
          <div className="col-md-8 about-info">
            <p>
              Our culture is significantly influenced by the heritage of the
              firm and, as such, we focus on building long-term client
              relationship and doing what is best for our client. We provide
              services to companies throughout their life cycles – Micros, SMEs
              and Large cap companies.
            </p>
            <p>
              ABIOYE ABDUL-RAZAQ & CO. is an Audit, Accountancy and Consulting
              firm with expertise in Statutory Audit, Tax Matters, Management
              Consulting, Company Secretarial Services, Human
              Resources and Financial Advisory Services. Our competence is
              anchored on the combination of our EXPERTISE, TECHNICAL KNOW-HOW,
              continuous TRAINING and PROFESSIONALISM in delivering our
              services.
            </p>
          </div>
        </div>
        <div className="row mission">
          <div className="col-md-4 left">
            <img src={Mission} alt="mission" />
          </div>
          <div className="col-md-8 right">
            <h2 className="mt-3">Our Mission</h2>
            <div className="quote">
              <FormatQuoteSharpIcon className="quote-open" />
              <p>
                To render top-notch Financial Services in the areas of
                Accounting, Auditing, Taxation, Consultancy Services and
                Financial Advisory Services.
              </p>
              <FormatQuoteSharpIcon className="quote-close" />
            </div>
          </div>
        </div>
        <div className="row vision">
          <div className="col-md-8 left">
            <h2 className="mt-3">Our Vision</h2>
            <div className="quote">
              <FormatQuoteSharpIcon className="quote-open" />
              <p>
                To render top-notch Financial Services in the areas of
                Accounting, Auditing, Taxation, Consultancy Services and
                Financial Advisory Services.
              </p>
              <FormatQuoteSharpIcon className="quote-close" />
            </div>
          </div>
          <div className="col-md-4 right">
            <img src={Vision} alt="vision" />
          </div>
        </div>

        <div className="row values">
          <div className="col-md-4 left">
            <img src={Values} alt="values" />
          </div>
          <div className="col-md-8 right">
            <h2 className="mt-3">Our Values</h2>
            <div className="quote">
              <FormatQuoteSharpIcon className="quote-open" />
              <p>
                Excellent quality and timely delivery of our services and
                products. Conscientious maintenance and improvement of our place
                in our professions. Contributions to the development of our
                community and professions in manpower development, technical
                expertise, meaningful and stable employment in a healthy
                environment whilst simultaneously discharging our social
                responsibilities. Dissemination of technical information towards
                regular communication with our staff, clients and the public.
              </p>
              <FormatQuoteSharpIcon className="quote-close" />
            </div>
          </div>
        </div>
        <div className="row history">
          <h2 className="title">Our History & Background Information</h2>
          <p>
            The registered name of our firm is: ABIOYE ABDUL-RAZAQ & CO.. Our
            firm is an indigenous and multi-disciplinary outfit of chartered
            accountants established by young professionals who have cut their
            professional teeth in some of the leading accounting and consultancy
            firms in Nigeria. The firm was registered with The Institute of
            Chartered Accountants of Nigeria (ICAN) in 1998 and Corporate
            Affairs Commission (C.A.C.) in 1999. It got licensed by Chartered
            Institute of Taxation of Nigeria (CITN) in Year 2020 to better serve
            the Nigerian companies and individuals in such sectors as
            Manufacturing, Real Estate, Engineering, Maritime, Agriculture,
            Commerce, Transport & Logistics, Health, etc, using the latest
            technology and expertise to generate the highest naira returns for
            our clients.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TheCompany;
