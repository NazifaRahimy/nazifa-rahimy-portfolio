
import  Navbar from './component/NavBar'
import Home from './component/Home';
import SocialLink from './component/SocialLink'
import About from './component/About'
import Portfolio from './component/Portfolio';
import Experience from './component/Experience';
import Contact from './component/Contact';

function App() {
  return (
    <div className="App ">
    
      < Navbar />
      <Home />
      <SocialLink />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
