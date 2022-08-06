import HeroSection from "./components/HeroSection";
import Service from './components/Service';
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
    return (
        <div>
            <HeroSection />
            <Service />
            <About />
            <Skills />
            <Projects />
        </div>
    );
}

export default App;