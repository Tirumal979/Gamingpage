import React from 'react'
import { FaUsers } from 'react-icons/fa';
import { FaCubes } from 'react-icons/fa';
import { PiImageSquareFill } from 'react-icons/pi';
import { GiTrophyCup } from 'react-icons/gi';
import { FaShieldAlt } from 'react-icons/fa';
import { IoSyncCircle } from 'react-icons/io5';

const Gamingcontent = () => {
  const features = [
  {
    title: 'Incredible Atmosphere',
    icon: < IoSyncCircle/>, 
    description:
      'Cumque asperiores ab quasi laboriosam omnis tempor econs ectetur elit. Optio illum officiis itaque soluta impedit ex esse aspernatur.',
  },
  {
    title: 'Catchy Battles',
    icon: < FaShieldAlt/>,
    description:
      'Cumque asperiores ab quasi laboriosam omnis tempor recons ectetur elit. Optio illum officiis itaque soluta impedit ex esse aspernatur.',
  },
  {
    title: 'Speed Up',
    icon: < GiTrophyCup />,
    description:
      'Cumque asperiores ab quasi laboriosam omnis tempor recons ectetur elit. Optio illum officiis itaque soluta impedit ex esse aspernatur.',
    },
  {
    title: 'New Avatars',
    icon: < FaUsers />,
    description:
      'Cumque asperiores ab quasi laboriosam omnis tempor recons ectetur elit. Optio illum officiis itaque soluta impedit ex esse aspernatur.',
    },
  {
    title: '3D Weapons',
    icon: < PiImageSquareFill />,
    description:
      'Cumque asperiores ab quasi laboriosam omnis tempor recons ectetur elit. Optio illum officiis itaque soluta impedit ex esse aspernatur.',
    },
  {
    title: 'New Levels',
    icon: <FaCubes/>,
    description:
      'Cumque asperiores ab quasi laboriosam omnis tempor recons ectetur elit. Optio illum officiis itaque soluta impedit ex esse aspernatur.',
    },
  
];
  return (
    <div><div className="feature-section">
      {/* <img src='/images/b3.jpg' alt='backgroundimage3' /> */}
      {features.map((feature, index) => (
        <div className="feature-card" key={index}>
          <div className="feature-icon">{feature.icon}</div>
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-description">{feature.description}</p>
        </div>
      ))}
    </div></div>
  )
}

export default Gamingcontent