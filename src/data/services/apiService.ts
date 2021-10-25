import axios from "axios";

export const api = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public",
  params: {
    ts: process.env.TIMESTAMP,
    apikey: process.env.PUBLIC_KEY,
    hash: process.env.HASH,
  },
});
