import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8 text-center text-gray-400">
      <p>&copy; {new Date().getFullYear()} QuantumAI. All rights reserved.</p>
    </footer>
  );
}
