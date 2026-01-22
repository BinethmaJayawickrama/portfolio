import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import { useScrollSpy } from "./hooks/useScrollSpy";

const SECTION_IDS = ["about", "skills", "projects", "experience", "contact"];

export default function App() {
  const activeId = useScrollSpy(SECTION_IDS, { rootMargin: "-35% 0px -55% 0px" });

  return (
    <>
      <Navbar activeId={activeId} />

      <main className="main">
        {/* First section after navbar is About-style hero */}
        <Hero />

        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
