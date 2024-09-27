import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div>
      <Navbar />
      <div id="About">
        <About />
      </div>
      <div id="Experience">
        <Experience />
      </div>
      <div id="Projects">
        <Projects />
      </div>
      <div id="Contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;