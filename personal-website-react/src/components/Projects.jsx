import React, { useState, useEffect } from 'react';

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Hide all cards except the first one initially
    const cards = document.querySelectorAll('.card-horizontal');
    cards.forEach((card, index) => {
      if (index !== 0) card.style.display = 'none';
    });
  }, []);

  const handleBarClick = (index) => {
    setActiveIndex(index);
    const cards = document.querySelectorAll('.card-horizontal');
    cards.forEach((card, i) => {
      card.style.display = i === index ? 'block' : 'none';
    });

    // Remove active class from all bars
    const bars = document.querySelectorAll('.bar');
    bars.forEach((bar, i) => {
      bar.classList.toggle('active', i === index);
    });
  };

  return (
    <section className="container" id="projects">
      <h2 className="header">Projects</h2>
      <div className="card-style-horizontal">
        <div className="card-horizontal">
          <h4>Fire and Emergency Response VR Simulation</h4>
          <p>
            This was a project I worked on for 2 years during high school. Our local fire department had asked our class of computer science students in the 3rd year, and animation students
            to create a new training simulation for them. They were currently training using old maps and driving the firetruck around the city. They wanted to do something enjoyable and cheap.
            Our school created this class through the support of our computer science and animation teachers and began working on it in 2017. When I joined in 2018 I was on the programming team
            working on the physics of the firetruck, attaching addresses to the locations of houses in the real world locations. That summer my sister and I got the privilege to speak at a convention in San Diego 
            for Esri. The next year I became the project lead, I managed all the students and conducted meetings regularly to keep on task. I also managed the file systems and really putting together
            the project as a whole.
          </p>
          <div className="btn-container">
            <a href="https://github.com/Novan01/FireSim" target="_blank" rel="noopener noreferrer">
              <button className="btn"><i className="ri-github-fill"></i>Fire Simulation</button>
            </a>
          </div>
        </div>

        <div className="card-horizontal">
          <h4>The Collector | Game Jam Contest Winner</h4>
          <p>
            During the summer of 2020, a few friends and I participated in an international GameJam sponsored by Sogeti, a tech division of
            Capgemini, sponsored by Intel. The goal of the event was to create a game in 48 hours to promote protecting biodiversity. My team created a game called The Collector
            and with it we won the caption award "Best Sustainable Code". Our code was described as "precise, clean, and efficient" by the judges.
          </p>
          <div className="btn-container">
            <a href="https://github.com/Novan01/GameJam-TheCollector" target="_blank" rel="noopener noreferrer">
              <button className="btn"><i className="ri-github-fill"></i>The Collector</button>
            </a>

            <a href="https://www.youtube.com/live/9VrD34j4png?si=xKpRHwIAty8ShRaN&t=2340" target="_blank" rel="noopener noreferrer">
              <button className="btn"><i className="ri-youtube-line"></i>GameJam Presentation</button>
            </a>

            <a href="https://novan01.itch.io/bushland-the-collector" target="_blank" rel="noopener noreferrer">
              <button className="btn"><i className="ri-gamepad-line"></i>Play the game!</button>
            </a>
          </div>
        </div>

        <div className="card-horizontal">
          <h4>Marketing Information Page</h4>
          <p>
            Developed a page on the Admin website during my employment at Law Enforcement Seminars LLC. Most my work consisted of marketing and advertising for trainings from our company. With this, I was able to use my programming skills to develop a comprehensive full-stack webpage within our admin-side infrastructure designed to manipulate and display vital marketing data associated with our multi-media marketing channels. This platform presented crucial analytical data including cost, location, advertised training, and more. Using this page I created, I was able to begin rolling out weekly reports on the amount of advertisements I sent out, and the total cost of all our advertising efforts to become more cost-effective.
            <p><b>* Please note the repo linked provides only a glimpse to emphasize key design principles and functionality of my work *</b></p>
            <div className="btn-container">
              <a href="https://github.com/Novan01/AdvertisingPage" target="_blank" rel="noopener noreferrer">
                <button className="btn"><i className="ri-github-fill"></i>Code Snippets</button>
              </a>
            </div>
          </p>
        </div>

        <div className="card-horizontal">
          <h4>TexVenture | Web-Based Text RPG</h4>
          <p>
            This is a working project to practice multiple aspects of design I've been learning. 
            The idea is a Web-Based text adventure written using the MERN stack, MongoDB, Express, React.js, and Node.js to begin putting into practice and learning useful full-stack skills
            whilst flexing my creative muscles. This project is still a work in progress, this is currently the second version. The first can be found on my GitHub under the repo web-rpg.
            <div className="btn-container">
              <a href="https://github.com/Novan01/TexVenture.git" target="_blank" rel="noopener noreferrer">
                <button className="btn"><i className="ri-github-fill"></i>TexVenture</button>
              </a>
            </div>
          </p>
        </div>

        <div className="card-horizontal">
          <h4>AI Algorithms | Pacman</h4>
          <p>
            This homework demonstrates an understanding and implementation of common AI searching algorithms, those being BFS, DFS, UCS, and A*.
            Along with my partner, we abstracted the problem with a Node class, where each node has its state, cost, and actions. The algorithms can be found in
            <b>search.py</b> and <b>searchAgents.py CornerSearch</b>
            <div className="btn-container">
              <a href="https://github.com/Novan01/Pacman-AI" target="_blank" rel="noopener noreferrer">
                <button className="btn"><i className="ri-github-fill"></i>AI Algorithms</button>
              </a>
            </div>
          </p>
        </div>

        <div className="card-horizontal">
          <h4>Aphantasia</h4>
          <p>
            This was a semester-long project to put into practice the skills acquired during my Augmented Reality class. This project, Aphantasia, is a simple rogue-like AR game where you as the player
            must survive waves of enemy slime objects. Built within Unity, this project implements simple enemy slime AI, Swipe and Gesture manager to detect complex screen swipes, and many AR features including plane
            detection, occlusion, and more.
          </p>
          <div className="btn-container">
            <a href="https://github.com/Novan01/Aphantasia.git" target="_blank" rel="noopener noreferrer">
              <button className="btn"><i className="ri-github-fill"></i>Aphantasia</button>
            </a>

            <a href="https://youtu.be/GfX3AqCvo04" target="_blank" rel="noopener noreferrer">
              <button className="btn"><i className="ri-youtube-line"></i>Demo Video</button>
            </a>
          </div>
        </div>

        <div className="navigation">
          {[...Array(6)].map((_, index) => (
            <label 
              key={index} 
              className={`bar ${index === activeIndex ? 'active' : ''}`} 
              onClick={() => handleBarClick(index)}
            ></label>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
