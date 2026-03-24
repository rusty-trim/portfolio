import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Navbar from "./components/Navbar";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Resume from "./components/sections/Resume";
import Contact from "./components/sections/Contact";

function App() {
    return (
        <div className="min-h-screen bg-primary overflow-hidden">
            <Navbar />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Resume />
            <Contact />
        </div>
    );
}

export default App;
