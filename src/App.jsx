import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import { fetchMovies, fetchMovieDetails } from "./api";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const results = await fetchMovies(query);
      setMovies(results);
    } catch (err) {
      setError("Nie udało się pobrać filmów!");
    } finally {
      setLoading(false);
    }
  };

  const handleSelectMovie = async (movieId) => {
    setLoading(true);
    setError(null);
    try {
      const details = await fetchMovieDetails(movieId);
      setSelectedMovie(details);
    } catch (err) {
      setError("Nie udało się pobrać szczegółów!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Wyszukiwarka filmów</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="error">{error}</p>}
      {loading && <p>Ładowanie...</p>}
      {!selectedMovie && <MovieList movies={movies} onSelectMovie={handleSelectMovie} />}
      {selectedMovie && <MovieDetails movie={selectedMovie} onBack={() => setSelectedMovie(null)} />}
    </div>
  );
}

export default App;
