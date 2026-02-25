import React, { useState } from 'react';
import MovieCard from './MovieCard';
import '../styles.css';

export default function MoviesGrid({ movies }) {

  const [searchTerm, setSearchTerm] = useState('');
  const [genreFilter, setGenreFilter] = useState('All Genres');
  const [ratingFilter, setRatingFilter] = useState('All Ratings');
  const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = genreFilter === 'All Genres' || movie.genre === genreFilter.toLowerCase();
    const matchesRating =
      ratingFilter === 'All Ratings' ||
      (ratingFilter === 'Good' && movie.rating >= 8) ||
      (ratingFilter === 'Ok' && movie.rating >= 5 && movie.rating < 8) ||
      (ratingFilter === 'Bad' && movie.rating < 5);

    return matchesSearch && matchesGenre && matchesRating;
  });

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