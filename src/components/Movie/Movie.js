import './Movie.css';
import React, { useEffect, useState } from 'react';
import MovieModal from '../MovieModal/MovieModal'

const Movie = ({ movie }) => {
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
