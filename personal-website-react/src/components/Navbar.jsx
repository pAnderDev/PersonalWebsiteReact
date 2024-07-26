import React, { useEffect } from 'react';

function Navbar() {
  useEffect(() => {
    const scrollToElement = (elementSelector, instance) => {
      const elements = document.querySelectorAll(elementSelector);
      if (elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    const link1 = document.getElementById('link1');
    const link2 = document.getElementById('link2');
    const link3 = document.getElementById('link3');

    link1.addEventListener('click', () => scrollToElement('.header', 0));
    link2.addEventListener('click', () => scrollToElement('.header', 1));
    link3.addEventListener('click', () => scrollToElement('.header', 2));

    // Cleanup event listeners on component unmount
    return () => {
      link1.removeEventListener('click', () => scrollToElement('.header', 0));
      link2.removeEventListener('click', () => scrollToElement('.header', 1));
      link3.removeEventListener('click', () => scrollToElement('.header', 2));
    };
  }, []);

  return (
    <nav>
      <div className="nav-logo">
        <a href="#">
          <img src="NOVAN-4.ico" alt="Logo" />
        </a>
      </div>
      <ul className="nav-links">
        <li id="link1" className="link"><a href="#education">Education</a></li>
        <li id="link2" className="link"><a href="#work-history">Work History</a></li>
        <li id="link3" className="link"><a href="#projects">Projects</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
