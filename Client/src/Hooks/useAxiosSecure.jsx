import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("error interceptor", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          console.log("logout the use");
          logOut()
          .then(()=> navigate('/login'))
          .catch()
        }
      }
    );
  }, []);
  return axiosSecure;
};

export default useAxiosSecure;
