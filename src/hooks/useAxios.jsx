import axios from "axios";

const useAxios = () => {
  const instanceAxios = axios.create({
    baseURL: "https://some-domain.com/api/",
  });

  return instanceAxios;
};

export default useAxios;
