import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classNameHelper from 'classnames';

import HomePage from "../../pages/HomePage/HomePage"
import MovieListPage from "../../pages/MovieListPage/MovieList"
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetails"

import './app.css';
//import SearchBar from './components/SearchBar';

const  App = () => {
  const [movies, setMovies] = useState([
    {
      "id": 157336,
      "original_title": "Interstellar",
      "overview": "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
      "poster_path": "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      "tagline": "Mankind was born on Earth. It was never meant to die here.",
      "title": "Interstellar",
      "vote_average": 8.3,
      "videos": {
          "results": [{
              "id": "5794fffbc3a36829ab00056f",
              "iso_639_1": "en",
              "iso_3166_1": "US",
              "key": "2LqzF5WauAw",
              "name": "Interstellar Movie - Official Trailer",
              "site": "YouTube",
              "size": 1080,
              "type": "Trailer"
          }]
      }
  },
  {

      "id": 550,
      "original_title": "Fight Club",
      "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
      "poster_path": "/8kNruSfhk5IoE4eZOc4UpvDn6tq.jpg",
      "tagline": "Mischief. Mayhem. Soap.",
      "title": "Fight Club",
      "video": false,
      "vote_average": 8.4
  },
  ]);
  return <div>hello</div>
}

// function App() {
//     return (
//       <div className="app">
//       <SearchBar />
//     </div>
//     );
// }

export default App;