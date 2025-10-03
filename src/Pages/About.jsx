import React from 'react'
import Banner from '../Subcontent/Banner';
import { TbCheckbox } from 'react-icons/tb';
import { BiLogoMagento } from 'react-icons/bi';
import { GiCubes } from 'react-icons/gi';

const About = () => {
  const tags = [
    "Wargames",
    "Strategy games",
    "Customizable games",
    "Abstract",
    "Thematic games",
    "Abstract",
  ];
  return (
    <div>
      <Banner title="About Us" path="About" />
      
       <div className="about-game-container">
        <div className="text-section">
        <h1>About Game</h1>
        <p>
          Mollitia placeat modi explicabo voluptatum corporis unde? Dicta,
          provident! Rem adipisci Mollitia placeat modi explicabo voluptatum
          corporis unde? Dicta, provident! Rem adipisci consectetur adipisicing
          elit. Deleniti possimus culpa nemo asperiores aperiam mollitia,
          maiores fugiat tempor Vero est aliquid nisi fugit.
        </p>

        <div className="tags">
          <ul>
            {tags.map((tag, index) => (
        <li key={index}>
          <TbCheckbox size={24} className="checkbox-icon" />
          {tag}
        </li>
      ))}
          </ul>
        </div>
      </div>

      <div className="image-section">
        <img src='/images/l2.jpg' alt="Game Art" />
        </div>
      </div>
      
      <div className="hero-overlay">
        <img src='/images/a5.jpg' alt="heroimage" />
        <div className="hero-content">
          <h1>A Clan That Slays Together Stays Together</h1>
          <p>
            Consectetur Lorem ipsum dolor sit amet adipisicing elit. Recusandae
            nulla beatae exercitationem iusto dolore animi, voluptatem inventore
            minima corporis asperiores dicta molestiae dolorum quod numquam iure
            ipsam nostrum tempore porro Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Deleniti possimus culpa nemo asperiores aperiam
            mollitia, maiores, modi facilis atque consequuntur hic officia unde,
            fugiat tempora? Vero est aliquid nisi fugit.
          </p>
        </div>
      </div>

         <div className="highroll-container">
      <div className="highroll-image">
        <img src='/images/l3.jpg' alt="High Roll" />
      </div>

      <div className="highroll-content">
        <h2>Going For The High Roll.</h2>
        <p>
          Mollitia placeat modi explicabo voluptatum adipisci Quisquam exerci tationem praesentium suscipit.
          Est enim persp iciatis corporis unde? Dicta, provident! Rem adipisci Mollitia placeat modi explicabo 
          voluptatum corporis unde? Dicta, provident! Rem adipisci Quisquam exercitationem praesentium suscipit.
        </p>

        <div className="info-row">
          <BiLogoMagento className="info-icon" />
          <span>
            consectetur adipisicing elit.Lorem ipsum dolor sit, amet id obcaecati quas omnis dolorum voluptatem 
            assumenda aliquam ducimus operiam explicabo similique. Nulla nobis neque esse laudantium.
          </span>
        </div>

        <div className="info-row">
          <GiCubes className="info-icon" />
          <span>
            consectetur adipisicing elit.Lorem ipsum dolor sit, amet id obcaecati quas omnis dolorum voluptatem 
            assumenda aliquam ducimus operiam explicabo similique. Nulla nobis neque esse laudantium.
          </span>
        </div>
      </div>
    </div>
  
    </div>
  )
}

export default About