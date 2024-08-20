import React from 'react';

function WorkHistory() {
  return (
    <section className="container" id="work-history">
      <h2 className="header">Work History</h2>
      <div className="card-style">
        <div className="card">
          <span><i className="ri-building-line"></i></span>
          <h4>Marketing and Web Development Intern</h4>
          <h5>Law Enforcement Seminars LLC | August 2022 - Current</h5>
          <ul>
            <li id='work'>Produced informative advertising materials including mailers, faxes, and emails effectively disseminating details about company-taught police trainings across the nation.</li>
            <li id='work'>Utilized PHP, jQuery/JavaScript, and MySQL to sort, analyze, and warehouse marketing data to provide actionable insights and enhance campaign strategies.</li>
            <li id='work'>Demonstrated exceptional communication skills through discourse with various professional individuals from Police Officers to Police Chiefs, fostering relationships and facilitating successful collaborations and classes.</li>
          </ul>
        </div>
        <div className="card">
          <span><i className="ri-computer-line"></i></span>
          <h4>Online Java and Unity Camp Instructor</h4>
          <h5>InternalDrive Inc. | May 2022 - August 2022</h5>
          <ul>
            <li id='work'>Educated and mentored students aged 11-17 on Java and Unity programming and development concepts, fostering a passion for programming and game development.</li>
            <li id='work'>Fostered personal connections with each student to inspire enthusiasm and participation, resulting in high satisfaction from both students and parents alike.</li>
          </ul>
        </div>
        <div className="card">
          <span><i className="ri-cup-line"></i></span>
          <h4>Barista</h4>
          <h5>Starbucks | May 2020 - May 2022</h5>
          <ul>
            <li id='work'>Crafted personalized beverages for valued customers, ensuring exceptional quality and service.</li>
            <li id='work'>Established personal connections with each customer to foster a warm and friendly atmosphere.</li>
            <li id='work'>Maintained high-quality standards within all aspects of the job including cleaning, customer connections, and food and beverage quality.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WorkHistory;
