import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import arrow icons

const cards = [
  {
    level: 'Level 1',
    title: 'Blood Moon',
    strength: 20,
    speed: 30,
    cost: 350,
    image: '/images/l1.jpg',
    para:'Nulla ex nunc, interdum nec egestas nec, dapibus ac mauris. egestas nec, dapibus ac mauris. Vivamus id tempor nisl.'
  },
  {
    level: 'Level 2',
    title: 'Dark Night',
    strength: 20,
    speed: 30,
    cost: 350,
    image: '/images/l2.jpg',
    para:'Nulla ex nunc, interdum nec egestas nec, dapibus ac mauris. egestas nec, dapibus ac mauris. Vivamus id tempor nisl.'
  },
  {
    level: 'Level 3',
    title: 'Blue Moon',
    strength: 20,
    speed: 30,
    cost: 350,
    image: '/images/l3.jpg',
    para:'Nulla ex nunc, interdum nec egestas nec, dapibus ac mauris. egestas nec, dapibus ac mauris. Vivamus id tempor nisl.'
  },
  {
    level: 'Level 4',
    title: 'Hunting Man',
    strength: 25,
    speed: 40,
    cost: 400,
    image: '/images/l4.jpg',
    para:'Nulla ex nunc, interdum nec egestas nec, dapibus ac mauris. egestas nec, dapibus ac mauris. Vivamus id tempor nisl.'
  },
  {
    level: 'Level 5',
    title: 'Dark Hunting',
    strength: 30,
    speed: 35,
    cost: 420,
    image: '/images/l5.jpg',
    para:'Nulla ex nunc, interdum nec egestas nec, dapibus ac mauris. egestas nec, dapibus ac mauris. Vivamus id tempor nisl.'
  },
  {
    level: 'Level 6',
    title: 'Black Red Hunting ',
    strength: 35,
    speed: 45,
    cost: 500,
    image: '/images/l6.jpg',
    para:'Nulla ex nunc, interdum nec egestas nec, dapibus ac mauris. egestas nec, dapibus ac mauris. Vivamus id tempor nisl.'
  },
];

function Cardshow() {
  const [startIndex, setStartIndex] = useState(0);
  const cardstoshow = 3;

  const next = () => {
    if (startIndex + cardstoshow < cards.length) {
      setStartIndex(startIndex + cardstoshow);
    }
  };

  const prev = () => {
    if (startIndex - cardstoshow >= 0) {
      setStartIndex(startIndex - cardstoshow);
    }
  };

  return (
    <div className="slider-container">
      <h2>With A Careful Step</h2>
      <p>Amet consectetur adipisicing elit. Repell endus veniam, quaerat quasi in vel exerci tationem cum consequatur accusamus.
        Maxime quibusdam explicabo assumenda veniam velit.</p>
      
      <div className="card-wrapper">
        {cards.slice(startIndex, startIndex + cardstoshow).map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.title} />
            <div className="card-content">
              <h3>{card.level}</h3>
              <h5>{card.title}</h5>
              <p>{card.para}</p>
              <div className="card-stats">
                  <p><strong>Strength :</strong> {card.strength}</p>
                  <p><strong>Speed :</strong> {card.speed}</p>
                  <p><strong>Cost :</strong> {card.cost}</p>
                </div>

            </div>
          </div>
        ))}
      </div>

      <div className="controls">
        <button onClick={prev} disabled={startIndex === 0}>
          <FaArrowLeft />
        </button>
        <button onClick={next} disabled={startIndex + cardstoshow >= cards.length}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Cardshow;
