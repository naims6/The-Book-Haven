import React from "react";

const Title = ({ children }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-7">{children}</h1>
    </div>
  );
};

export default Title;
