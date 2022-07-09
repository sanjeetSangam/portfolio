import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";
import { FirstLoader } from "./components/FirstLoader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 2000 });

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return loading ? (
    <FirstLoader />
  ) : (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
