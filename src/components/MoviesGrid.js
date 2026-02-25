import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import '../styles.css';

export default function MoviesGrid() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/movies.json`)
      .then(response => response.json())
      .then(data => setMovies(data));
  }, [])

  return (
    <div className='movies-grid'>

      {
        movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      }

    </div>
  )
}