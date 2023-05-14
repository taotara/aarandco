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
      
      return (
        <div className='crumb' key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      )
    })

  return (
    <div className='breadcrums'>
      {crumbs}
    </div>
  )
}

export default Breadcrums