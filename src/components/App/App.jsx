import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classNamesHelper from 'classnames';

import HomePage from "../../pages/HomePage/HomePage"
import MovieListPage from "../../pages/MovieListPage/MovieList"
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetails"

import './app.css';
//import SearchBar from './components/SearchBar';

function App() {
  const [currentPage, setCurrentPage] = useState("home")

  return (
    <>
      {/* Temporary navigation */}
      <nav className="navigation">
        <button
          className={classNamesHelper(
            "navigation__item",
            currentPage === "home" && "navigation__item--active"
          )}
          onClick={() => setCurrentPage("home")}
        >
          Home
        </button>
        <button
          className={classNamesHelper(
            "navigation__item",
            currentPage === "movieList" && "navigation__item--active"
          )}
          onClick={() => setCurrentPage("movieList")}
        >
          Movie List
        </button>
        <button
          className={classNamesHelper(
            "navigation__item",
            currentPage === "movieDetails" && "navigation__item--active"
          )}
          onClick={() => setCurrentPage("movieDetails")}
        >
          Details
        </button>
      </nav>
      {/* Temporary navigation */}

      <div className="app">
        {currentPage === "home" && <HomePage />}

        {currentPage === "movieList" && <MovieListPage />}

        {/* Temporary page */}
        {currentPage === "movieDetails" && <MovieDetailsPage />}
        {/* Temporary page */}
      </div>
    </>
  )
}

export default App;