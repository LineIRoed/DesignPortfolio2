
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Octomania from "./pages/Octomania.jsx";
import OctomaniaFontBook from "./pages/OctomaniaFontBook.jsx";
import Flixio from "./pages/Flixio.jsx";
import TheOceanQuiz from "./pages/TheOceanQuiz.jsx";
import Romern from "./pages/Romern.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/octomania" element={<Octomania />} />
        <Route path="/projects/octomaniaFontBook" element={<OctomaniaFontBook />} />
        <Route path="/projects/flixio" element={<Flixio />} />
        <Route path="/projects/theOceanQuiz" element={<TheOceanQuiz/>} />
        <Route path="/projects/romern" element={<Romern/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
