import HeroSection from "./components/HeroSection";
import Service from './components/Service';
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonial from './components/Testimonial';
import Hire from "./components/Hire";

function App() {
    return (
        <div>
            <HeroSection />
            <Service />
            <About />
            <Skills />
            <Projects />
            <Testimonial />
            <Hire />
        </div>
    );
}

export default App;