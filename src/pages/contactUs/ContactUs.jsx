import React from 'react';
import ContactTitle from '../../components/contactTitle/ContactTitle';
import { useRef } from 'react';
import Card from 'react-bootstrap/Card';
import Mail from '../../assets/email.jpg';
import Call from '../../assets/call.jpg';
import Visit from '../../assets/visit.jpg';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import './contactUs.scss';
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const ContactUs = () => {
  // const [pageTitle] = useState('Contact Us');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_endkvjg',
        'template_bzr03el',
        form.current,
        '3j-26buNNAqoqEtsj'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <ContactTitle />
      <div className="container contact-container">
        <div className="row contact-info-box">
          <div className="col-md-4 mb-5">
            <Card className="h-100 card" style={{ width: '95%' }}>
              <Card.Img variant="top" src={Mail} />
              <div className="icon-block">
                <MarkEmailUnreadOutlinedIcon className="icon" />
              </div>
              <Card.Body className="d-flex flex-column align-items-center mt-3 pt-5">
                <Card.Title>Send Us a Mail</Card.Title>
                <Card.Text>
                  <p>info@aarandco.com.ng</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mb-5">
            <Card className="h-100" style={{ width: '95%' }}>
              <Card.Img variant="top" src={Call} />
              <div className="icon-block">
                <PhoneIphoneOutlinedIcon className="icon" />
              </div>
              <Card.Body className="d-flex flex-column align-items-center mt-3 pt-5">
                <Card.Title>Call Us</Card.Title>
                <Card.Text>
                  <p>
                    08033333045 <br /> 08171281100
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mb-5">
            <Card className="h-100" style={{ width: '95%' }}>
              <Card.Img variant="top" src={Visit} />
              <div className="icon-block">
                <PlaceOutlinedIcon className="icon" />
              </div>
              <Card.Body className="d-flex flex-column align-items-center mt-3 pt-5">
                <Card.Title>Visit Our Office</Card.Title>
                <Card.Text>
                  <p className="text-center">
                    2nd Floor, Rear Wing, No.313, Agege Motor Road, Beside GT
                    Bank Plc, Olorunshogo, Lagos. P.O Box 8127, Ikeja, Lagos.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div
          className="row message"
          style={{
            backgroundImage: `url(${require('../../assets/contact_form_bg.jpg')})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            zIndex: -2,
          }}
        >
          <div className="form-container  col-md-8">
            <h2>Drop Us A Message</h2>
            <p>We are happy to here from you.</p>
            <form ref={form} onSubmit={sendEmail}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="from_name"
                    placeholder="Your Name"
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="from_email"
                    placeholder="Enter email"
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  placeholder="Your message"
                />
              </Form.Group>

              <Button className="submit-btn" type="submit" value="Send">
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
