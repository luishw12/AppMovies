import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "eca81e5495d9b3726d789dfdb8fa65c4",
    language: "pt-BR",
  },
});
