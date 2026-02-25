import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import '../styles.css';

export default function MoviesGrid() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()));


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