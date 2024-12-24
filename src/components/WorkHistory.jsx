import React from 'react';

function WorkHistory() {
  return (
    <section className="container" id="work-history">
      <h2 className="header">Work History</h2>
      <div className="card-style">
        <div className="card">
            <span><i className="ri-computer-line"></i></span>
            <h4>Full Stack Developer</h4>
            <h5>Antera Software | December 2024 - Present</h5>
            <ul>
              <li id='work'>Utilized PHP to rework and optimize existing back end code</li>
              <li id='work'>Solved customer issues on Advance system.</li>
              <li id='work'>Optimized PromoStandards API integration with Advance system.</li>
            </ul>
        </div>
        <div className="card">
          <span><i className="ri-smartphone-line"></i></span>
          <h4>Asurion</h4>
          <h5>Field Tech Sales Expert | July 2024 - November 2024</h5>
          <ul>
            <li id='work'>Provided timley delivery of customers new device replacements and ensured activation and data transfer on the new device.</li>
            <li id='work'>Protected customers with tech protection plan tailored and offered on behalf of AT&T and Verizon.</li>
            <li id='work'>Accomplished 5 star satisfaction rating from hundreds of customers.</li>
          </ul>
        </div>
        <div className="card">
          <span><i className="ri-building-line"></i></span>
          <h4>Marketing and Web Development Intern</h4>
          <h5>Law Enforcement Seminars LLC | August 2022 - July 2024</h5>
          <ul>
            <li id='work'>Produced informative advertising materials including mailers, faxes, and emails effectively disseminating details about company-taught police trainings across the nation.</li>
            <li id='work'>Utilized PHP, jQuery/JavaScript, and MySQL to sort, analyze, and warehouse marketing data to provide actionable insights and enhance campaign strategies.</li>
            <li id='work'>Demonstrated exceptional communication skills through discourse with various professional individuals from Police Officers to Police Chiefs, fostering relationships and facilitating successful collaborations and classes.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WorkHistory;
