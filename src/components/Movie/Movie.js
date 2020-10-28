import './Movie.css';
import React, { useEffect, useState, Suspense } from 'react';
import MovieModal from '../MovieModal/MovieModal'

function Movie({ movie }) {
  const [modalShow, setModalShow] = useState(false)
  return (
    <div className="movie-card">
      <div>{movie.Title}</div>
      <img 
        src={movie.Poster}
        onClick={() => setModalShow(true)}
      />
      <MovieModal 
        movie={movie}
        show={modalShow} 
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default Movie;
