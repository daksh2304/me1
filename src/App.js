import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import "./App.css";
import Fulfillment from "./pages/Fulfillment";
import Distribution from "./pages/Distribution";
import Blogs from "./pages/Blogs";
function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />}/>
            <Route path="/testimonials" element={<testimonials />}/>
            <Route path="/services/fulfillment" element={<Fulfillment />} />
           <Route path="/services/distribution" element={<Distribution />} />
           <Route path="/blogs" element={<Blogs />}/>

          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
