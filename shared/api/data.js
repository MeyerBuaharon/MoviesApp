import axios from "axios";

const api = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
});

export const data = ({ setData }) =>
  api
    .get("/movie/popular/?api_key=c807c5adddcfff593a2d33533086273b")
    .then((res) => setData(res.data))
    .catch((error) => console.log("Error:", error));
