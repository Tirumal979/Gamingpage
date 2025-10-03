import React from 'react';
import { FaGamepad, FaTwitter, } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
import { FaPaperPlane } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
      
        <div className="footer-section about">
          <h2 className="logo"><span role="img" aria-label="controller">< FaGamepad/></span> ODD</h2>
          <p className='logopara'>
            Adipisicing elit exercit ationem accusamus lauda nitium porro sunt repud ationem accusamus exercit ationem accusamus.
          </p>
        </div>

        <div className="footer-section news">
          <h4>LATEST NEWS</h4>
          <div className="news-item">
            <img src="/images/f1.jpg" alt="Black Hunt" />
            <div>
              <p className="news-title">Black Hunt</p>
              <span>June 28</span>
            </div>
          </div>
          <div className="news-item">
            <img src="/images/f2.jpg" alt="Blood Moon" />
            <div>
              <p className="news-title">Blood Moon</p>
              <span>June 28</span>
            </div>
          </div>
        </div>

      
        <div className="footer-section instagram">
          <h4>INSTAGRAM</h4>
          <div className="insta-grid">
            <img src="/images/f1.jpg" alt="instagramimages" />
           <img src="/images/f2.jpg" alt="instagramimages" />     
           <img src="/images/f3.jpg" alt="instagramimages" />
           <img src="/images/f4.jpg" alt="instagramimages" />
           <img src="/images/f5.jpg" alt="instagramimages" />
           <img src="/images/f6.jpg" alt="instagramimages" />
            
          </div>
        </div>

      
        <div className="footer-section newsletter">
          <h4>NEWSLETTER</h4>
          <p className='newsletter'>
            Adipisicing elit exercit tationem accusamus exercit ationem accusamus.
          </p>
          <form>
            <input type="email" placeholder="Subscribe" />
            <button type="submit"><FaPaperPlane /></button>
          </form>
        </div>
      </div>

    
      <div className="footer-bottom">
        <p>&copy; 2020 Odd. All rights reserved | </p>
        <div className="social-icons">
          <a href="www.facebook.com"><i className="fab fa-facebook-f">< FaFacebook /></i></a>
          <a href="www.twitter.com"><i className="fab fa-twitter">< FaTwitter /></i></a>
          <a href="www.instagram.com"><i className="fab fa-instagram"><FaInstagram /></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
