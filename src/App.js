import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import MovieDetails from './components/MovieDetails';
import Home from './components/Home';
import { STATES } from 'mongoose';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(movie => {
    const matchesTitle = movie.title.toLowerCase().includes(filterTitle.toLowerCase());
    const matchesRating = filterRating === '' || movie.rating >= parseFloat(filterRating);
    return matchesTitle && matchesRating;
  });

  return (
    <Router>
      <div className="app">
        <Filter
          filterTitle={filterTitle}
          filterRating={filterRating}
          setFilterTitle={setFilterTitle}
          setFilterRating={setFilterRating}
        />
        <Routes>
          <Route
            path="/"
            element={<Home movies={filteredMovies} />}
          />
          <Route
            path="/movie/:title"
            element={<MovieDetails movies={movies} />}
          />
        </Routes>
        <button onClick={() => addMovie({
          title: "New Movie",
          description: "This is a new movie.",
          posterURL: "https://via.placeholder.com/150",
          rating: 5,
          trailerLink: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Example trailer link
        })}>
          Add Movie
        </button>
      </div>
    </Router>
  );
};

export default App;
