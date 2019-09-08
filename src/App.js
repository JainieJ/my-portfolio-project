import React from "react";
import Header from "./pages/header/header.component";
import Skills from "./pages/skills/skills.component";
import Projects from "./pages/projects/projects.component";

function App() {
  return (
    <>
      <Header />
      <main>
        <Skills />
        <Projects />
      </main>
    </>
  );
}

export default App;
