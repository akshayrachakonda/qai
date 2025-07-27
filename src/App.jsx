import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Footer from "./components/Footer";
import Products from "./components/Products";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-diagonal-gradient from-[#0C1721] to-[#406584] text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element = {<Products/>}/>
          <Route path="/contact" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );
}