import "./App.css";
import { About } from "./components/About/About";
import { Contacts } from "./components/Contacts/Contacts";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<About />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
      </Routes>
    </div>
  );
}

export default App;
