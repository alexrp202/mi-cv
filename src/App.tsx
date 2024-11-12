// src/App.tsx
import React from "react";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import FadeInSection from "./components/FadeInSection";
import "./App.css";
import Aboutme from "./components/Aboutme";
import Information from "./components/info";
const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <FadeInSection>
        <Aboutme />
      </FadeInSection>
      <Information />

      <FadeInSection>
        <Experience />
      </FadeInSection>
      {/* <FadeInSection>
        <Skills />
      </FadeInSection>
      <FadeInSection>
        <Portfolio />
      </FadeInSection>  */}
    </div>
  );
};

export default App;
