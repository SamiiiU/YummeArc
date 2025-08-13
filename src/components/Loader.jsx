// src/components/Common/Loader/Loader.jsx
import React from "react";

const Loader = ({text}) => {
  return (
    <div className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center text-white">
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-t-transparent border-orange-400 rounded-full animate-spin"></div>

      {/* Loading Text */}
      <p className="mt-6 text-lg flex items-center space-x-1">
        <span>Loading Yumearc Page</span>
        <span className="flex space-x-1">
          <span className="animate-bounce">.</span>
          <span className="animate-bounce delay-150">.</span>
          <span className="animate-bounce delay-300">.</span>
        </span>
      </p>
    </div>
  );
};

export default Loader;
