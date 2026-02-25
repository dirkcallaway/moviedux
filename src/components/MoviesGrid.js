import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import '../styles.css';

export default function MoviesGrid() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [genreFilter, setGenreFilter] = useState('All Genres');
  const [ratingFilter, setRatingFilter] = useState('All');
  const filteredMovies = movies.filter(movie => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  }).filter(movie => {
    if (genreFilter === 'All Genres') return true;
    return movie.genre === genreFilter.toLowerCase();
  }).filter(movie => {
    if (ratingFilter === 'All') return true;
    if (ratingFilter === 'Good') return movie.rating >= 8;
    if (ratingFilter === 'Ok') return movie.rating >= 5 && movie.rating < 8;
    if (ratingFilter === 'Bad') return movie.rating < 5;
  });



  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/movies.json`)
      .then(response => response.json())
      .then(data => setMovies(data));
  }, [])

  return (
    <div>
      <input
        type="text"
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search movies..." />
      <div className="filter-bar">
        <div className="filter-slot">
          <label htmlFor="genre">Genre:</label>
          <select className="filter-dropdown" value={genreFilter} onChange={(e) => setGenreFilter(e.target.value)}>
            <option>All Genres</option>
            <option>Action</option>
            <option>Fantasy</option>
            <option>Drama</option>
            <option>Horror</option>
          </select>
        </div>
        <div className="filter-slot">
          <label htmlFor="rating">Rating:</label>
          <select className="filter-dropdown" value={ratingFilter} onChange={(e) => setRatingFilter(e.target.value)}>
            <option>All Ratings</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>
      <div className='movies-grid'>
        {
          filteredMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        }
      </div>
    </div>
  )
}