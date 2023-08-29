import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {

  let api = axios.create({
    headers: {
      common: {},
    },
  });
  const token = useCookie('token')
  if (token.value) {
    api.interceptors.request.use(
      (config) => {
        const myString = token.value;
        if (myString) {
          config.headers["Authorization"] = `bearer ${myString}`;
          // console.log("token ok");
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
        // console.log("token err");
      }
    );
  }
  
return {
    provide: {
      api: api,
    },
  };
});