import React, { useEffect, useReducer, Suspense } from 'react';
import { initialState, reducer } from './MovieListReducer'
import { fetchMovieDataLocal, fetchMovieDataLive } from '../../api/movies';
import './MovieList.css';
import Movie from '../Movie/Movie'

export const MovieList = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchMovieDataLive().then(res => {
        dispatch({
          type: "GET_MOVIES_SUCCESS",
          payload: res.Search
        });
      });
  }, []);

  const { loading, movies } = state;

  return (
    <div className="grid">
      {movies.map((m, i) => (
        <Movie key={i} movie={m}/>
      ))}
    </div>
  );
}

export default MovieList;