import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <About />
      </div>
    </div>
  );
}

export default App;
