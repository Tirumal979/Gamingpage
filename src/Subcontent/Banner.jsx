import React from 'react'
import { MdNavigateNext } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Banner = ({ title, path,}) => {
  return (
    <div>
      <div className="banner">
      <div className="banner-overlay">
          <h1>{ title}</h1>
        <p>
            <span><Link to={'/'}>Home</Link></span> <MdNavigateNext /> <span>{path}</span>
        </p>
      </div>
    </div>
    </div>
  )
}

export default Banner