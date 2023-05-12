import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slide1 from '../../assets/slide1.jpg';
import Slide2 from '../../assets/slide2.jpg';
import Slide3 from '../../assets/slide3.jpg';
import './ImageCarousel.scss';

const ImageCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div
          className="carousel-image"
          style={{
            backgroundImage: `url(${Slide1})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '90vh',
            position: 'relative',
          }}
        >
          <div className="overlay-cover"></div>
          <div className="carousel-text d-flex flex-column justify-content-center">
            <h3>
              Intelligent Constultation <br />
              <span>for decision making</span>
            </h3>
            <p>
              Maximize your financial potential with our Audit & Accounting
              expertise. Get in touch to learn more.
            </p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="carousel-image"
          style={{
            backgroundImage: `url(${Slide2})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '90vh',
          }}
        >
          <div className="overlay-cover"></div>
          <div className="carousel-text d-flex flex-column justify-content-center">
            <h3>
              Trust your finances <br />
              <span>to the experts</span>{' '}
            </h3>
            <p>
              We take the stress out of financial reporting. Contact us for all
              your Audit & Accounting needs.
            </p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="carousel-image"
          style={{
            backgroundImage: `url(${Slide3})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '90vh',
          }}
        >
          <div className="overlay-cover"></div>
          <div className="carousel-text d-flex flex-column justify-content-center">
            <h3>
              Don't leave your <br />
              <span>taxes to chance</span>
            </h3>
            <p>
              We help you navigate the complexities of tax regulations. Trust us
              for all your Tax Planning & Compliance needs.
            </p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarousel;
