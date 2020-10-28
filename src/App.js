import logo from './logo.svg';
import './App.css';
import { useEffect, useState, Suspense, lazy } from 'react';
const MovieList = lazy(() => import ('./components/MovieList/MovieList'));

function Loader() {
  return (
    <p className="loader">Loading</p>
  );
} 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://fontmeme.com/permalink/201027/8e4d598d8fc33788a3786b39c2620dd5.png" alt="netflix-font" border="0"/>
      </header>
      <div className="App-body">
        <Suspense fallback={<Loader/>}>
            <MovieList/>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
