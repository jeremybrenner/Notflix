import './Movie.css';

function Movie({ movie }) {
  return (
    <div className="movie-card">
      <div>{movie.Title}</div>
      <img src={movie.Poster}/>
    </div>
  );
}

export default Movie;