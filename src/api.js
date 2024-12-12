const API_KEY = "bd1725a6";
const BASE_URL = "https://www.omdbapi.com/";

export const fetchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}?s=${query}&apikey=${API_KEY}`);
  const data = await response.json();
  if (data.Response === "False") {
    throw new Error(data.Error);
  }
  return data.Search;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await fetch(`${BASE_URL}?i=${movieId}&apikey=${API_KEY}`);
  const data = await response.json();
  if (data.Response === "False") {
    throw new Error(data.Error);
  }
  return data;
};
