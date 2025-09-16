import { Navbar } from "./navbar";
import { HeroSection } from "../public/HeroSection";
import { About } from "./About";
import { Project } from "./Project";
import { Skill } from "./Skill";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

function App() {
  return (
    <div className="bg-gray-50 text-gray-800 scroll-smooth">
      <Navbar />
      <HeroSection />
      <About />
      <Project />
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;