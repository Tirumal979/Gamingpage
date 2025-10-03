import React from 'react'
import Banner from '../Subcontent/Banner'

const Gaming = () => {
  const gameData = [
  {
    image: '/images/l4.jpg',
    title: 'Voluptate',
    description: 'Assumenda temporibus quidem ipsam. Voluptate fugiat corporis saepe simil.'
  },
  {
    image: '/images/l6.jpg',
    title: 'Temporibus',
    description: 'Assumenda temporibus quidem ipsam. Voluptate fugiat corporis saepe simil.'
  },
  {
    image: '/images/l2.jpg',
    title: 'Quidesam',
    description: 'Assumenda temporibus quidem ipsam. Voluptate fugiat corporis saepe simil.'
  },
  {
    image: '/images/l5.jpg',
    title: 'Corporisiu',
    description: 'Assumenda temporibus quidem ipsam. Voluptate fugiat corporis saepe simil.'
  },
  {
    image: '/images/l1.jpg',
    title: 'Quidemips',
    description: 'Assumenda temporibus quidem ipsam. Voluptate fugiat corporis saepe simil.'
  },
  {
    image: '/images/l3.jpg',
    title: 'Fugacorp',
    description: 'Assumenda temporibus quidem ipsam. Voluptate fugiat corporis saepe simil.'
  },
  {
    image: '/images/l6.jpg',
    title: 'Parisusto',
    description: 'Assumenda temporibus quidem ipsam. Voluptate fugiat corporis saepe simil.'
  },
  {
    image: '/images/l2.jpg',
    title: 'Iustosimil',
    description: 'Assumenda temporibus quidem ipsam. Voluptate fugiat corporis saepe simil.'
  },
  {
    image: '/images/l4.jpg',
    title: 'Iustosimil',
    description: 'Assumenda temporibus quidem ipsam. Voluptate fugiat corporis saepe simil.'
  },
];

  return (
    <div>
      <Banner title="Game" path="Gaming" />
      
       <div className="games-page">
      <h2 className="games-heading">Our Games</h2>
      <p className="games-subheading">
        Amet consectetur adipisicing elit. Repellendus veniam, quaerat quasi in vel ex.
        Maxime quibusdam explicabo assumenda veniam velit.
      </p>

      <div className="games-grid">
        {gameData.map((game, index) => (
          <div className="game-card" key={index}>
            <img src={game.image} alt={game.title} className="game-image" />
            <div className="game-info">
              <h3>{game.title}</h3>
              <p>{game.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
      
    </div>
  )
}

export default Gaming