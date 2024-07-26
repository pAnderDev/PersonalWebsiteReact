import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Education from "./components/Education.jsx";
import WorkHistory from "./components/WorkHistory.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import './style.css';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Education />
      <WorkHistory />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
