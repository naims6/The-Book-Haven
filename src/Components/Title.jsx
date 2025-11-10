import React from "react";

const Title = ({ children }) => {
  return (
    <div>
      <h1 className="text-2xl font-medium text-[#16513F]  dark:text-green-400 mb-7">
        {children}
      </h1>
    </div>
  );
};

export default Title;
