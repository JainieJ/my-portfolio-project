import React from "react";
import Header from "./pages/header/header.component";
import Skills from "./pages/skills/skills.component";
import Projects from "./pages/projects/projects.component";
import Contact from "./pages/contact/contact.component";
import Footer from "./pages/footer/footer.component";
import Navigation from "./components/navigation/navigation.component";
import { LanguageProvider } from "./contexts/LanguageProvider";

function App() {
  return (
    <LanguageProvider>
      <Navigation />
      <Header />
      <main>
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
