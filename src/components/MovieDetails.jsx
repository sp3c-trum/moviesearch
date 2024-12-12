import React from "react";

function MovieDetails({ movie, onBack }) {
  return (
    <div className="movie-details">
      <button onClick={onBack}>Wróć</button>
      <h2>{movie.Title}</h2>
      <img src={movie.Poster}/>
      <p><strong>Fabuła:</strong> {movie.Plot}</p>
      <p><strong>Reżyser:</strong> {movie.Director}</p>
      <p><strong>Aktorzy:</strong> {movie.Actors}</p>
      <p><strong>Gatunek:</strong> {movie.Genre}</p>
      <p><strong>Ocena IMDb:</strong> {movie.imdbRating}</p>
    </div>
  );
}

export default MovieDetails;
