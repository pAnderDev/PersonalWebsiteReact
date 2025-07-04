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
              <li id='work'>Optimized and streamlined existing front and back end code</li>
              <li id='work'>Generated clean code and documentation to statisfy and exceed customer expectations.</li>
              <li id='work'>Participated in scrum like meetings and development.</li>
              <li id='work'>Integrated third party APIs with company product to provide better services to customers</li>
              <li id='work'>Utilized PHP, Angular, and various frameworks to generate satisfactory code based on requirements</li> 
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
        <div className="card">
          <span><i className="ri-building-line"></i></span>
          <h4>Online Unity and Java Instructor</h4>
          <h5>iDTech | May 2022 - August 2022</h5>
          <ul>
            <li id='work'>Utilized experience and knowledge of Unity and Java to teach eager youth complex techniques.</li>
            <li id='work'>Provided students high quality instruction recieving high marks from parents and students alike.</li>
            <li id='work'>Participated in company culture and weekly stand up meetings to gain better teaching habits.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WorkHistory;
