import React from 'react';
import CareerTitle from '../../components/careerTitle/CareerTitle';
import { useState } from 'react';
import CareerPic from '../../assets/career.jpg';
import Chevron from '../../assets/mdi_chevron-double-right.png';
import './career.scss';

const Career = () => {
  const [pageTitle] = useState('Career');

  return (
    <div className="career">
      <CareerTitle />
      <div className="container career-main">
        <div className="row career-first">
          <div className="col-md-4 left">
            <img src={CareerPic} alt="Career" />
          </div>
          <div className="col-md-8 right">
            <p>
              Working at Abioye Abdul-Razaq & Co. We don’t believe that all our
              people should be cast in the same mold but we do require them to
              show ambition, determination and integrity.
            </p>
            <h4>Opportunities</h4>
            <ul style={{ listStyleImage: `url(${Chevron})` }}>
              <li>Partners</li>
              <li>Managers</li>
              <li>Newly qualified</li>
              <li>Support and admin</li>
              <li>
                Graduate trainingSIWES (Student Industrial Work Experience
                Scheme)
              </li>
            </ul>
          </div>
        </div>
        <div className="row next">
          <p>
            Our approach is designed to give you the training you need to do
            your job effectively, develop personally and consistently, deliver
            the high quality of services expected by our clients. The training
            programme we offer staff, while fundamental to our continued
            success, also demonstrates the investment we make in our people. Our
            career path allows you to make your mark and seize opportunities.
            The following is a summary of our Training and Development
            programmes.
          </p>
          <ul style={{ listStyleImage: `url(${Chevron})` }}>
            <li>STEPSTONE AND SIWESS PROGRAMME</li>
            <li>INDUCTION COURSE</li>
            <li>PRACTICAL EXPERIENCE</li>
            <li>TECHNICAL TRAINING</li>
            <li>
              SPONSORED MCPE (MANDATORY CONTINUING PROFESSIONAL EDUCATION)
              TRAINING
            </li>
            <li>STEP STONE  AND SIWESS PROGRAMME</li>
          </ul>
          <p>
            A dedicated in-house programme called ”StepStone” programme is
            designed especially for GRADUATE. StepStone has been designed to
            create highly skilled managers, directors and Partners of the future
            who are not only technically excellent but who understand and
            support our vision and services inside out. We firmly believe that
            excellence comes from creating our own professionals from the start
            and we have tailored our StepStone programme to uphold this. For
            the UNDERGRADUATE, we offer them opportunity for training and first
            hand exposure through our SIWESS programme.
          </p>
          <h4>INDUCTION COURSE</h4>
          <p>
            We give four (4) weeks dedicated induction course when you begin
            employment with us, introducing you to our people, our work culture
            and our services.
          </p>
          <h4>PRACTICAL EXPERIENCE</h4>
          <p>
            You will also undertake substantial work experience in all areas of
            our business during the first three years of your training.
          </p>
          <h4>TECHNICAL TRAINING</h4>
          <p>
            On top of this, you will also work towards your ICAN (ACA)
            qualification to become a chartered accountant.
          </p>
          <h4>
            SPONSORED MCPE (MANDATORY CONTINUING PROFESSIONAL EDUCATION)
            TRAINING
          </h4>
          <p>
            For our qualified staff, we sponsor on rotational basis, two
            training programmes that will guarantee them the required credit
            hours and to keep updating them on new trends in the Accountancy
            profession. It is our clients that make working in Abioye
            Abdul-Razaq & Co. special. From small entrepreneurial start-ups to
            well-established and listed entities, we work hard to deliver a
            technically superior and uniquely personal service.
          </p>
          <p>
            Like our clients, we keep progressing and we’re always interested in
            market developments. If you are looking for the opportunity to gain
            professional qualifications as well as general business training or
            simply looking to move to an environment that offers you more, then
            please, get in touch with us.
          </p>

          <h4>VACANCY</h4>
          <p>
            If you are looking to work in an ambitious and growing-up firm
            combining traditional values with forward-thinking approach, then
            please, view our list of current vacancies. Click Below:
          </p>
        </div>
      </div>
    </div>
  );
};

export default Career