import About from './About'
import './App.css';
import Home from './Home'
import Service from './Service';
import Project from './Project';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';
import Experience from './Experience';
import Other from './Other';


function App() {
  return (
    <div className="App">
      <Home />
      <Experience />
      <Service />
      <Project />
      <Other />
      <About />


      {/* <Blog/> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
