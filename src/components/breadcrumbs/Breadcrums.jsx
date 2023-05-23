import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './breadcrumbs.scss';

function Breadcrums() {
  const location = useLocation()

  let currentLink = '';

  const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
      currentLink = +`/${crumb}`;

  const frag = crumb.replace(/%20/g, ' ');
      
      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{frag}</Link>
        </div>
      );
    })

  return (
    <div className='breadcrums'>
      <Link to='/'>Home</Link> &gt; {crumbs}
    </div>
  )
}

export default Breadcrums