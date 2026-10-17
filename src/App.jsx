
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Octomania from "./pages/Octomania.jsx";
import OctomaniaFontBook from "./pages/OctomaniaFontBook.jsx";
import Flixio from "./pages/Flixio.jsx";
import TheOceanQuiz from "./pages/TheOceanQuiz.jsx";
import Romern from "./pages/Romern.jsx";
import Footer from "./components/Footer.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  const location = useLocation();
  return (
    <div className="app-layout">
      <Navbar />

      <main className={`app-content ${location.pathname === "/" ? "home-content" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/octomania" element={<Octomania />} />
          <Route path="/projects/octomaniaFontBook" element={<OctomaniaFontBook />} />
          <Route path="/projects/flixio" element={<Flixio />} />
          <Route path="/projects/theOceanQuiz" element={<TheOceanQuiz />} />
          <Route path="/projects/romern" element={<Romern />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;