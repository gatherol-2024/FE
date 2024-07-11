import axios from "axios";

export const server = axios.create({
  baseURL: "/mock",
  timeout: 15000,
});
