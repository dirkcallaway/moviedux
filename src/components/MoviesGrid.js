import React, { useState, useEffect } from 'react';
import '../styles.css';

export default function MoviesGrid() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/movies.json`)
      .then(response => response.json())
      .then(data => setMovies(data));
  }, [])

  return (
    <div>{movies.length}</div>
  )
}