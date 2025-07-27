// src/components/ProductGrid.jsx
import React from "react";

const Products = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-10">
      <div className="relative w-[600px] h-[600px] grid grid-cols-2 grid-rows-2 gap-8">

        <div className="rounded-tl-[100px] bg-gradient-to-b from-indigo-600 to-purple-300 flex items-center justify-center text-white text-xl font-serif">
          Product 1
        </div>

        <div className="rounded-tr-[100px] bg-gradient-to-b from-indigo-600 to-purple-300 flex items-center justify-center text-white text-xl font-serif">
          Product 2
        </div>

        <div className="rounded-bl-[100px] bg-gradient-to-b from-indigo-600 to-purple-300 flex items-center justify-center text-white text-xl font-serif">
          Product 3
        </div>

        <div className="rounded-br-[100px] bg-gradient-to-b from-indigo-600 to-purple-300 flex items-center justify-center text-white text-xl font-serif">
          Product 4
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-28 h-28 rounded-full bg-slate-900 text-white text-center text-xs font-semibold flex items-center justify-center z-10">
            Explore <br /> Products

            {/* Top Arc
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 border-t-2 border-r-2 border-indigo-300 rounded-tr-full animate-spin-slow origin-center"></div>

            {/* Bottom Arc */}
            {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16 border-b-2 border-l-2 border-indigo-300 rounded-bl-full animate-spin-slow-reverse origin-center"></div> */} 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
