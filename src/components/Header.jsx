import React from 'react';
import { Tooltip } from 'react-tooltip';

function Header() {
  return (
    <header className="container">
      <div className="content">
        <span className="blur"></span>
        <span className="blur"></span>

        <h4>Welcome to my Portfolio</h4>
        <h1>Hello World, I'm <span>Patrick Anderson </span></h1>
        <p>
        Hello reader! I am a Full Stack Developer who enjoys all aspects of development. I am a quick learner and am able to work well on my own or with a team.
        </p>
      </div>
      <div className="image">
        <img 
          src={`${process.env.PUBLIC_URL}/san_diego_esri.jpg`} 
          alt="San Diego Esri" 
          className="tooltip-target"
          data-tooltip-content="Left to Right: Jack Dangermond, Owner of Esri | Me | Anais Anderson"
          data-tooltip-id="esri-tooltip"
        />
        <Tooltip id="esri-tooltip" place="top" className="tooltip" />
      </div>
    </header>
  );
}

export default Header;

