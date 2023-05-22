import React from 'react';
import ContactTitle from '../../components/contactTitle/ContactTitle';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Mail from '../../assets/email.jpg';
import Call from '../../assets/call.jpg';
import Visit from '../../assets/visit.jpg'
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import './contactUs.scss';


const ContactUs = () => {
  const [pageTitle] = useState('Contact Us');

  return (
    <div className="contact">
      <ContactTitle />
      <div className="container contact-container">
        <div className="row contact-info-box">
          <div className="col-md-4">
            <Card className="h-100" style={{ width: '95%' }}>
              <Card.Img variant="top" src={Mail} />
              <div className="icon">
                <MarkEmailUnreadOutlinedIcon />
              </div>
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title>Send Us a Mail</Card.Title>
                <Card.Text>
                  <p>info@aarandco.com.ng</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="h-100" style={{ width: '95%' }}>
              <Card.Img variant="top" src={Call} />
              <div className="icon">
                <PhoneIphoneOutlinedIcon />
              </div>
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title>Call Us</Card.Title>
                <Card.Text>
                  <p>
                    08033333045 <br /> 08171281100
                  </p>
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="h-100" style={{ width: '95%' }}>
              <Card.Img variant="top" src={Visit} />
              <div className="icon">
                <PlaceOutlinedIcon />
              </div>
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title>Visit Our Office</Card.Title>
                <Card.Text>
                  <p>
                    2nd Floor, Rear Wing, No.313, Agege Motor Road, Beside GT
                    Bank Plc, Olorunshogo, Lagos. P.O Box 8127, Ikeja, Lagos.
                  </p>
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs