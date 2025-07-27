import React from "react";

const features = [
  {
    title: "Quantum Processing",
    desc: "Supercharged computations with Qubits.",
  },
  {
    title: "AI Predictions",
    desc: "Unparalleled forecasting & decision making.",
  },
  {
    title: "Security & Encryption",
    desc: "Quantum-grade data protection.",
  },
  {
    title: "Security & Encryption",
    desc: "Quantum-grade data protection.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-diagonal-gradient from-[#172633] to-[#406584] px-6">
      <h2 className="text-4xl font-bold text-center text-purple-400 mb-12">
        Our Features
      </h2>
      <div className="grid md:grid-cols-3 gap-20 max-w-6xl mx-auto">
        {features.map((f, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold text-purple-300 mb-3">{f.title}</h3>
            <p className="text-gray-400">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
