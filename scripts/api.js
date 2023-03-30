const API_KEY = `YOUR_API_KEY`;
const BASE_URL = `https://api.themoviedb.org/3/movie/popular/`;
const LANGUAGE = `pt-BR`;
const IMAGES_URL = `https://image.tmdb.org/t/p/w500/`;

let api = {
  key: API_KEY,
  url: BASE_URL,
  language: LANGUAGE,
  images_url: IMAGES_URL,
};

export default { ...api };
