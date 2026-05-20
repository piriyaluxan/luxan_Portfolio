import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import CogntixFit from "./components/CogntixFit";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="gradient-line" />
        <Experience />
        <div className="gradient-line" />
        <Projects />
        <div className="gradient-line" />
        <CogntixFit />
        <div className="gradient-line" />
        <Skills />
        <div className="gradient-line" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
