import React from "react";
import Header from "./pages/header/header.component";
import Skills from "./pages/skills/skills.component";
import Projects from "./pages/projects/projects.component";
import Contact from "./pages/contact/contact.component";
import Footer from "./pages/footer/footer.component";
import Navigation from "./components/navigation/navigation.component";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <main>
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
