import React from "react";

const Title2 = ({ children }) => {
  return (
    <div className="text-center py-6">
      <h2
        className="text-3xl md:text-4xl font-semibold
                   bg-linear-to-r from-indigo-500 via-primary to-pink-500
                   bg-clip-text text-transparent tracking-tight"
      >
        {children}
      </h2>
      {/* Bottom border/underline */}
      <div className="w-20 h-1 bg-linear-to-r from-indigo-500 via-primary to-pink-500 mx-auto mt-3 rounded-full"></div>
    </div>
  );
};

export default Title2;
