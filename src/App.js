import {useEffect} from "react";

import './App.css';
import SearchIcon from './search.svg';
//3c96dd3d

const API_URL = "https://www.omdbapi.com/?apikey=3c96dd3d";

const movie1 = {
    Title: "Batman Begins",
    Year: "2005",
    imdbID: "tt0372784",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BYzZmZWViM2EtNzhlMi00NzBlLWE0MWEtZDFjMjk3YjIyNTBhXkEyXkFqcGc@._V1_SX300.jpg"
};

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies("Batman");
    }, []);

    return (
        <div className = "app">
        <h1>MovieLand</h1>
        <div className="search">
            <input
                placeholder="Search for movies"
                value="Superman"
                onChange={() => {}}
            />
            <img
                src={SearchIcon}
                alt="search"
                onClick={() => {}}
            />
        </div>
        <div className="container">
            <div className="movie">
                <div>
                    <p>
                        {movie1.Year}
                    </p>
                </div>

                <div>
                    <img src={movie1.Poster !== 'N/A' ? movie1.Poster : ''} alt={movie1.Title} />
                </div>
                <div>
                    <span>{movie1.Type}</span>
                    <h3>{movie1.Title}</h3>
                </div>
            </div>
        </div>
    </div>    
    );
};

export default App;
