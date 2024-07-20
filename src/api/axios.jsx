import axios from "axios";

const api = axios.create({
  baseURL: "https://api.telegram.org",
  headers: {
    "Content-Type" : "application/json"
  },
  timeout: 10000
})

export default api