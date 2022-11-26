import axios from "axios";
import React from "react";

const AxiosInstance = (() => {
  return axios.create({
    baseURL: "https://bookshelves.p.rapidapi.com",
    headers: {
      "X-RapidAPI-Key": "7c1c848d94msh527d9ecd4f11000p1c600cjsn3784197e28f3",
      "X-RapidAPI-Host": "bookshelves.p.rapidapi.com",
    },
  });
})();

export default AxiosInstance;
