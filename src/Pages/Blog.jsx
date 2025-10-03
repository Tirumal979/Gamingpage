import React from 'react'
import Banner from '../Subcontent/Banner'
import { FaUser } from 'react-icons/fa';
import { FcLikePlaceholder } from 'react-icons/fc';
import { FaComments } from 'react-icons/fa';


const Blog = () => {
   const cards = [
    {
      image: '/images/l6.jpg',
      title: 'Nunc consequat justo id commodo feugiat',
      description:
        'Minima quis at rem quasi dolorem, inven tore Corrupti conse quatur perspi ciatis dolor rem sapiente eius Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci culpa labore ducimus excepturi explicabo laborum officia temporibus hic distinctio repellendus veniam, ipsam nesciunt itaque tempora. Placeat dolore atque sunt corporis.'
    },
    {
      image: '/images/a2.jpg',
      title: 'Nunc consequat justo id commodo feugiat',
      description:
        'Minima quis at rem quasi dolorem, inven tore Corrupti conse quatur perspi ciatis dolor rem sapiente eius Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci culpa labore ducimus excepturi explicabo laborum officia temporibus hic distinctio repellendus veniam, ipsam nesciunt itaque tempora. Placeat dolore atque sunt corporis.'
    },
    {
      image: '/images/a5.jpg',
      title: 'Nunc consequat justo id commodo feugiat',
      description:
        'Minima quis at rem quasi dolorem, inven tore Corrupti conse quatur perspi ciatis dolor rem sapiente eius Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci culpa labore ducimus excepturi explicabo laborum officia temporibus hic distinctio repellendus veniam, ipsam nesciunt itaque tempora. Placeat dolore atque sunt corporis.'
    }
  ];

  return (
    <div>
      <Banner title="Blog" path="Blog" />

      <div className="blog-page">
        <div className='page'>
      <h2 className="blog-heading">Our Blog</h2>
      <p className="blog-subheading">
        Amet consectetur adipisicing elit. Repellendus veniam, quaerat quasi in vel ex.
        Maxime quibusdam explicabo assumenda veniam velit.
          </p>
        </div>
        
         <div className="card-container">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <img src={card.image} alt="blog" className="card-image" />

            <div className="card-meta">
              <span><FaUser /> Admin</span>
              <span>< FcLikePlaceholder /> 6 Likes</span>
              <span>< FaComments /> 9 Comments</span>
            </div>

            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>

            <button className="read-more">Read More</button>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Blog