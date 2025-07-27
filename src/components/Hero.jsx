import React from "react";
import BlurText from "./BlurText";



export default function Hero() {

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4">
      <BlurText
        text="Explore Quantum AI"
        delay={259}
        animateBy="words"
        direction="top"
        className="text-5xl md:text-7xl font-bold mb-6 text-purple-400"
      />

      <p className="max-w-xl text-lg text-gray-300 mb-8">
        Experience the power of AI fused with Quantum Computing — reimagining intelligence.
      </p>

      <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all">
        Get Started
      </button>
    </section>
  );
}
