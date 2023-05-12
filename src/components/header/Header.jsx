import React from 'react'
import { Container } from 'react-bootstrap';
import './Header.scss';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Header = () => {
  return (
    <div className="header-top d-sm-none">
      <Container>
        <div className="row">
          <div className="top-content">
            <EmailIcon className="me-2 icon" />
            info@aarandco.com.ng
            <LocationOnIcon className="ms-3 me-2 icon" />
            2nd Floor, Rear Wing, No.313, Agege Motor Road, Beside GT Bank Plc,
            Olorunshogo, Lagos.
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header