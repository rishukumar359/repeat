import axios from "axios";
import { LocalStorageService } from "./services/storage/localstorageservice";

const localStorageService = LocalStorageService.getService(); 


export const axi = axios.create({
  baseURL: "http://localhost:3020",
});
axi.interceptors.request.use( 
  async (config) => { 
    const token = localStorageService.getAccessToken();
    if (token) {
      
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axi.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      originalRequest.url === "http://localhost:3020/signin"
    ) {
      router.push("/user");
      return Promise.reject(error);
    }
  }
);
