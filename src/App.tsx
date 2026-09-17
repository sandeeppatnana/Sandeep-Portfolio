import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Achievements from "./sections/Achievements";
import Expertise from "./sections/Expertise";
import Skills from "./sections/Skills";
import Resume from "./sections/Resume";
import GitHubShowcase from "./sections/GitHubShowcase";
import Products from "./sections/Products";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-[var(--color-accent)] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Achievements />
        <Expertise />
        <Skills />
        <Resume />
        <Products />
        <GitHubShowcase />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
