import React from 'react';
import '../styles.css';

export default function MovieCard({ movie }) {
  const handleImgError = (e) => {
    e.target.src = `${process.env.PUBLIC_URL}/images/placeholder.png`;
  }
  return (
    <div className='movie-card'>
      <img src={`${process.env.PUBLIC_URL}/images/${movie.image}`} alt={movie.title} onError={handleImgError} />
      <div className='movie-card-info'>
        <h3 className='movie-card-title'>{movie.title}</h3>
        <p className='movie-card-genre'>{movie.genre}</p>
        <p className='movie-card-rating'>{movie.rating}</p>
      </div>
    </div>
  )
}