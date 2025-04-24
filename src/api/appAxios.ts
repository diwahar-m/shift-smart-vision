import axios from "axios";

const appAxios = axios.create({
  baseURL: `https://api-shiftsmart-ai.cyces.co`,
  timeout: 30000,
  responseType: "json",
});


export default appAxios;