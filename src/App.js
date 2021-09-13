import './App.css';
import Name from './components/Name';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Name />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
