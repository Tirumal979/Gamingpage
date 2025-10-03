import React from "react";


const imageData = [
  { src: "/images/a1.jpg", title: "Autem sit nemo commodi velit", description: "Consectetur adipis icing elit. Exerci tationem, facilis veritatis. Lorem ipsum dolor sit amet Facere adipisci autem sit nemo commodi quo velit neque laboriosam iste odit, aspernatur aliquam, enim nulla Vitae, ipsa cupiditate" },
  { src: "/images/a2.jpg", title: "Dolorsit Amet", description: "Consectetur adipis icing elit. Exerci tationem. amet Facere adipisci autem sit nemo commodi" },
  { src: "/images/a3.jpg", title: "Exercitati", description: "Consectetur adipis icing elit. Exerci tationem. amet Facere adipisci autem sit nemo commodi" },
  { src: "/images/a4.jpg", title: "Facere adipisci", description: "Consectetur adipis icing elit. Exerci tationem. amet Facere adipisci autem sit nemo commodi" },
  { src: "/images/a5.jpg", title: "Consectetur", description: "Consectetur adipis icing elit. Exerci tationem. amet Facere adipisci autem sit nemo commodi" },
  { src: "/images/a6.jpg", title: "Commodi quovel neque labor", description: "Consectetur adipis icing elit. Exerci tationem, facilis veritatis. Lorem ipsum dolor sit amet Facere adipisci autem sit nemo commodi quo velit neque laboriosam iste odit aspernatur aliquam, enim nulla Vitae, ipsa cupiditate" },
];

const ImageGallery = () => {
  return (
    <div className="images">
      {imageData.map((item, index) => (
        <div key={index} className="hover-card">
          <img src={item.src} alt={`Image ${index + 1}`} className="card-image" />
          <div className="overlay">
            <h2 className="title">{item.title}</h2>
            <p className="description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
