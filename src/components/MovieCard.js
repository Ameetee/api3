import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${title}`}>
        <img src={posterURL} alt={title} className="poster"/>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Rating: {rating}</p>
      </Link>
    </div>
  );
};

export default MovieCard;

