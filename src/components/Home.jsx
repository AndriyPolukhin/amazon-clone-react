import React from 'react';
import './Home.css';
import Product from './Product';

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://m.media-amazon.com/images/G/01/digital/video/sonata/Superhero_UK_Acquisition_FT_Apr_20/f4b165f5-678a-48bb-a049-11e7ddc2168d._UR3000,600_SX1500_FMwebp_.jpg"
        alt=""
      />

      <div className="home__row">
        <Product
          id="1"
          key="1"
          title="The Lean Startup: How Contant Innovation Creates Value"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />
        <Product
          id="2"
          key="2"
          title="Apple MacBook Pro (16-Inch, 16GB RAM, 1TB Storage) - Space Grey"
          price={2479}
          rating={5}
          image="https://m.media-amazon.com/images/I/313XNeEdfjL._AC_UY218_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="3"
          key="3"
          title="Kindle Paperwhite | Waterproof, 6' High-Resolution Display, 8GB—with Special Offers—Black"
          price={119.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/51DVu7YNt7L._AC_UY218_.jpg"
        />
        <Product
          id="4"
          key="4"
          title="Moët & Chandon Rosé Impérial, Gift Box 75 cl"
          price={37.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71oXTOmTO7L._AC_UY218_.jpg"
        />
        <Product
          id="5"
          key="5"
          title="F-JX Handheld Steam Generator Iron, Portable Garment Steamer, Mini Generator Travel Household Electric Garment Cleaner Hanging Ironing"
          price={397.34}
          rating={5}
          image="https://m.media-amazon.com/images/I/51-C+ZFd+rL._AC_UY218_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="6"
          key="6"
          title="LG UltraWide 34UC99-W 34 Inch Curved Monitor Height Adjustable IPS  (3440 x 1440, 2x HDMI, DisplayPort, USB-C, 300 cd/m2, 5ms, 75Hz, AMD Radeon Freesync)"
          price={587.97}
          rating={5}
          image="https://m.media-amazon.com/images/I/81dzt2LjvqL._AC_SX180_SY120_QL70_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
