import "./app.scss";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Test from "./Test";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
// import Services from "./components/services/Services";

const App = () => {
  return (
    <Router>
      <Cursor />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="Homepage">
                <Hero />
              </section>
              <section id="Portfolio">
                <Parallax type="portfolio" />
              </section>
              <section id="Skills">
                <Skills />
              </section>
              {/* <section id="Services">
                <Services />
              </section> */}
              <Portfolio />
              <section id="Contact">
                <Contact />
              </section>
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

