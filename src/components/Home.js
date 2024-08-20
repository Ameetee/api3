import React from 'react';
import MovieList from './MovieList';

const Home = ({ movies }) => {
  return (
    <div>
      <h1>Movie List</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;

