import React from 'react';

function Education() {
  return (
    <section className="container" id="education">
      <h2 className="header">Education</h2>
      <div className="card-style">
        <div className="card">
          <span><i className="ri-school-line"></i></span>
          <h4>University of Texas at Dallas</h4>
          <h5>Fall 2020 - Fall 2024 | GPA 2.896</h5>
          <p>
           Currently pursuing a Bachelors of Science in Computer Science finishing in December 2024. Extensive expereinece in all aspects from database, to 
           networking, to front end. Gained classroom experience in working with a team, and conducting the lifecycle of a product or software from conception to final product.
           Utilized schooling and experiece to expand on my skills outside of class, working on many personal projects. 
          </p>
        </div>
        <div className="card">
          <span><i className="ri-graduation-cap-line"></i></span>
          <h4>Techincal Skills</h4>
          <ul>
            <h5>Languages</h5>
            <li id='skills'>Java</li>
            <li id='skills'>C/C++</li>
            <li id='skills'>Python</li>
            <li id='skills'>HTML/CSS</li>
            <li id='skills'>JavaScript</li>
            <li id='skills'>PHP</li>
            <h5 id='skills'>Frameworks & Tools</h5>
            <li id='skills'>React.js</li>
            <li id='skills'>Node.js</li>
            <li id='skills'>Express.js</li>
            <li id='skills'>Git</li>
            <li id='skills'>Trello</li>
            <li id='skills'>jQuery</li>
            <li id='skills'>Ajax</li>
            <li id='skills'>Postman</li>
            <h5>Database</h5>
            <li id='skills'>MongoDB</li>
            <li id='skills'>MySQL</li>
            <h5>Cloud & Infastructure</h5>
            <li id='skills'>AWS</li>
            <li id='skills'>Docker</li>
          </ul>
        </div>
        <div className="card">
          <span><i className="ri-book-line"></i></span>
          <h4>Relevant Coursework</h4>
          <ul>
            <li id="course">Computer Science I & II</li>
            <li id="course">Discrete Mathematics for Computing I & II</li>
            <li id="course">Software Engineering</li>
            <li id="course">Data Structure and Algorithm Analysis</li>
            <li id="course">Digital Logic and Computer Design</li>
            <li id="course">System Programming in Unix and Other Environments</li>
            <li id="course">Programming Language Paradigms</li>
            <li id="course">Artificial Intelligence</li>
            <li id="course">Operating Systems</li>
            <li id="course">Database Systems</li>
            <li id="course">Automata Theory</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Education;
