import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageGallery from "../Subcontent/Imagegallery";
import Gamingcontent from "../Subcontent/Gamingcontent";
import Cardshow from "../Subcontent/Cardshow";
import Hero from "../Subcontent/Hero";

function Home() {
  const sliderRef = useRef(null);
  const [autoplay, setAutoplay] = useState(true);

  const settings = {
    dots: true,
    infinite: false, 
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoplay,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    afterChange: (current) => {
      if (current === 1) {
        setAutoplay(false);
        if (sliderRef.current) {
          sliderRef.current.slickPause();
        }
      }
    },
  };

  return (
    <div>
    <div className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        <div className="slide">
          <img src="/images/b1.jpg" alt="Slide 1" />
          <div className="slide-content">
            <h1>END OF THE GAME</h1>
            <p>Adipi sicing elit. Quia, aliquid odio Lorem ipsum dolor sit amet conse ctetur tempora ex veniam assumenda voluptate, inventore dolorum sequi dolor enim aperiam laudantium excepturi fugiat, quibusdam delectus recusandae voluptatibus animi.</p>
            <button>Read More</button>
          </div>
        </div>
        <div className="slide">
          <img src="/images/b2.jpg" alt="Slide 2" />
          <div className="slide-content">
            <h1>END OF THE GAME</h1>
            <p>Adipi sicing elit. Quia, aliquid odio Lorem ipsum dolor sit amet conse ctetur tempora ex veniam assumenda voluptate, inventore dolorum sequi dolor enim aperiam laudantium excepturi fugiat, quibusdam delectus recusandae voluptatibus animi.</p>
           
            <button>Read More</button>
          </div>
        </div>
      </Slider>
      </div>

      <div className="aboutgame">
        <h1>About The Game</h1>
        <p>Sit amet cons ectetur adipis icing elit.optio illum officiis itaque soluta impedit ex esse aspernatur Sit amet cons ectetur adipis icing elit.optio illum officiis itaque soluta impedit ex esse aspernatur Sit amet cons ectetur adipis icing elit.optio illum officiis itaque soluta impedit ex esse aspern aturCu mque iosam omnis tempo recons ectetur adipis icing elit.optio illum officiis itaque illum officiis .</p>
        <div className="awards">
          <div>
          <span>45</span>
          <h4>Tea</h4>
          </div>
        
          <div>
          <span>26</span>
          <h4>Coffee</h4>
          </div>
         
          <div>
          <span>36</span>
          <h4>Awards</h4>
          </div>
          
          <div>
          <span>130</span>
          <h4>Similes</h4>
          </div>
          
        </div>
      </div>

      <ImageGallery />

      <Gamingcontent />
      
      <Cardshow />

      <Hero />
       
      </div>
  );
}

export default Home;
