import { useMemo } from "react";
import axios from "axios";

const useAxios = () => {
  const axiosInstance = useMemo(() => {
    return axios.create({
      baseURL: "https://book-haven-server-snowy.vercel.app",
    });
  }, []);

  return axiosInstance;
};

export default useAxios;
