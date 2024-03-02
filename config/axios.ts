import AxiosLib from "axios";

const axios = AxiosLib.create({
  baseURL: "",
});

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    return Promise.reject(error);
  }
);

export default axios;
