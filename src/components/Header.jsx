import React from 'react';

function Header() {
  return (
    <header className="container">
      <div className="content">
        <span className="blur"></span>
        <span className="blur"></span>

        <h4>Welcome to my Portfolio</h4>
        <h1>Hello World, I'm <span>Patrick Anderson </span></h1>
        <p>
          I love you Hailey so much, you are the love of my life and I will do anything for you.
        </p>
      </div>
      <div className="image">
        <img src={`${process.env.PUBLIC_URL}/san_diego_esri.jpg`} alt="San Diego Esri" />
        <p>Left to Right: Jack Dangermond, Owner of Esri | Me | Anais Anderson</p>
      </div>
    </header>
  );
}

export default Header;

