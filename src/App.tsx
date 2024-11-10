// src/App.tsx
import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import FadeInSection from "./components/FadeInSection";
import "./App.css";
import Contactme from "./components/Contactme";
const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <FadeInSection>
        <Contactme />
      </FadeInSection>

      <FadeInSection>
        <About />
      </FadeInSection>
      <FadeInSection>
        <Experience />
      </FadeInSection>
      <FadeInSection>
        <Skills />
      </FadeInSection>
      <FadeInSection>
        <Portfolio />
      </FadeInSection>
    </div>
  );
};

export default App;
