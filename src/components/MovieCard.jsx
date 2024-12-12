import React from "react";

function MovieCard({ movie, onSelect }) {
  return (
    <div className="movie-card" onClick={onSelect}>
      <img src={movie.Poster} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </div>
  );
}

export default MovieCard;
