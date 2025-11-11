import React from "react";
import { SquareLoader } from "react-spinners";
import useTheme from "../../hooks/useTheme";
const Loading = () => {
  const { theme } = useTheme();

  return (
    <div className="text-center mt-16">
      <SquareLoader color={`${theme === "dark" ? "#fff" : "#000"}`} />
    </div>
  );
};

export default Loading;
