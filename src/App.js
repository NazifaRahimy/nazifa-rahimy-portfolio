import  Navbar from './component/NavBar'
import Home from './component/Home';
import About from './component/About'
import Portfolio from './component/Portfolio';
import Experience from './component/Experience';
import Contact from './component/Contact';

function App() {
   return (
    <div className="absolute w-[100%] top-[0%] left-[0%] 2x:w-[100%] 2xl:bg-gray-200  border-box">
        < div className="relative mx-auto w-[100%] h-auto sm:w-[100%] sm:h-auto md:w-[100%] md:h-[100%] lg:w-[100%] lg:h-auto xl:w-[100%] xl:h-auto 2xl:w-[1366px] 2xl:h-auto ">
            < Navbar />
            <Home />
            <About />
            <Portfolio />
            <Experience />
            <Contact />
        </div>
    </div>
   );
}

export default App;
