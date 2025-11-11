import axios from "axios";

const useAxios = () => {
  const instanceAxios = axios.create({
    baseURL: "http://localhost:3000",
  });

  return instanceAxios;
};

export default useAxios;
