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
          Hello reader! I am a Computer Science student at UTD currently in my Senior year.
          I enjoy software and web development in all aspects. I have work experience in web development and business marketing and schooling in
          software development. I am a quick learner and am able to work well on my own or with a team.
        </p>
      </div>
      <div className="image">
        <img src="san_diego_esri.jpeg" alt="San Diego Esri" />
        <p>Left to Right: Jack Dangermond, Owner of Esri | Me | Anais Anderson</p>
      </div>
    </header>
  );
}

export default Header;
