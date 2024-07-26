import React from 'react';

function Education() {
  return (
    <section className="container" id="education">
      <h2 className="header">Education</h2>
      <div className="card-style">
        <div className="card">
          <span><i className="ri-school-line"></i></span>
          <h4>University of Texas at Dallas</h4>
          <p>
            Fall 2020 - Fall 2024
            Pursuing a Bachelor's degree in Computer Science learning all aspects of computer science and software engineering
            including things like SDLC, various programming languages, ML, AI, Language Paradigms, Discrete Mathematics.
          </p>
        </div>
        <div className="card">
          <span><i className="ri-graduation-cap-line"></i></span>
          <h4>Sachse High School</h4>
          <p>
            Fall 2016 - Spring 2020 | GPA 4.0 |
            I graduated from Sachse High School in the spring of 2020. I participated in the marching band and jazz band, as well as show choir.
            I was a member of Mu Alpha Theta and active as a section leader in the trumpet section of the marching band.
          </p>
        </div>
        <div className="card">
          <span><i className="ri-book-line"></i></span>
          <h4>Relevant Coursework</h4>
          <ul>
            <li className="course">Computer Science I & II</li>
            <li className="course">Discrete Math I & II</li>
            <li className="course">Calculus I & II</li>
            <li className="course">Discrete Mathematics for Computing I & II</li>
            <li className="course">Software Engineering</li>
            <li className="course">Data Structure and Algorithm Analysis</li>
            <li className="course">Digital Logic and Computer Design</li>
            <li className="course">System Programming in Unix and Other Environments</li>
            <li className="course">Programming Language Paradigms</li>
            <li className="course">Augmented Reality</li>
            <li className="course">Artificial Intelligence</li>
            <li className="course">Operating Systems</li>
            <li className="course">Database Systems</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Education;
