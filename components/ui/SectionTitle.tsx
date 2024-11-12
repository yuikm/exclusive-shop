import React from "react";

export default function SectionTitle() {
  return (
    <div className="flex flex-col max-w-screen-xl mx-auto px-4">
      <div className="flex items-center space-x-2">
        <div className="w-2 h-6 bg-red-500 rounded"></div>
        <span className="text-red-500 text-sm font-medium">Our Products</span>
      </div>
      <h2 className="text-3xl font-bold">Explore Our Products</h2>
    </div>
  );
}
