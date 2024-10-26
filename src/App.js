import './App.css';
import About from './component/About';
import Hero from './component/Hero';
import Navbar from './component/Navbar';
import Project from './component/Project';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
    </div>
  );
}

export default App;
