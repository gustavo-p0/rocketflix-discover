import api from "./api.js";
// import axios from "axios";
let movies = null;
const button = document.querySelector("button");
const main = document.querySelector("main");
async function requireMovies() {
  try {
    movies = await axios({
      url: api.url,
      params: {
        api_key: api.key,
        language: api.language,
      },
    });
    movies = movies.data.results;
    button.addEventListener("click", () => {
      main.style.display = "block";
      const movie = movies[Math.ceil(Math.random() * movies.length)];
      if (movie) {
        main.innerHTML = `<article>
        <figure>
          <img src="${api.images_url}${movie.backdrop_path}" alt="Movie cover">
        </figure>
        <h2>${movie.original_title}</h2>
        <p>${movie.overview}</p>
      </article>`;
      } else {
        main.innerHTML = `<article>
        <figure>
          <img src="https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=60" alt="Movie cover">
        </figure>
        <h2>Nenhum filme encontrado</h2>
        <p>Ops, hoje não é dia de assistir filme.
Bora codar! 🚀</p>
      </article>`;
      }
    });
  } catch (e) {
    throw new Error("Erro");
  }
}
requireMovies();
