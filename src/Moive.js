import React from "react";
import PropTypes from "prop-types";

 const Movie = ({ id, year, title, summary, poster }) => {
   return <h1>{title}</h1>
 }

 Movie.prototypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired
 }

 export default Movie;