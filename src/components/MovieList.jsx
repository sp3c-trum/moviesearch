import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies, onSelectMovie }) {
  if (!movies.length) {
    return <p>Nie znaleziono filmów!</p>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} onSelect={() => onSelectMovie(movie.imdbID)} />
      ))}
    </div>
  );
}

export default MovieList;
