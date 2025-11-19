import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NeuralBackground from "./components/NeuralBackground";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";

function App() {
  return (
    <Router>
      <div className="relative min-h-screen overflow-hidden">
        <div className="app">
          <div className="fixed inset-0 -z-10">
            <NeuralBackground />
          </div>
          <Header />
          <main className="relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
