import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

const Movie = ({ id, year, title, summary, poster, genres }) => {
  return (
    <div className="movie">
      <img src={poster} alt={title}></img>
      <div className="movies_data">
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <ul className="movie_genres">{genres.map((genre, idx) => <li key={idx} className="genres_genre">{genre}</li>)}</ul>
        <p className="movie_summary">{summary}</p>
      </div>
    </div>
  )
}

Movie.prototypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

 export default Movie;