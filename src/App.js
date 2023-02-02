import React, { useState } from 'react';
import './App.scss'
import Axios from 'axios';
import MovieComponent from "./Components/movie component/MovieComponent";
import MovieInfoComponent from './Components/movie component/MovieInfoComponent'
import LoadingSpinner from './Components/LoadingSpinner/LoadingSpinner';

//API Key was left in the app as there is no backend and it cannot be put to gitignore file as the project wouldn't be visible 
export const API_KEY = "2bc65279";

function App() {

    const [searchQuery, updateSearchQuery] = useState("");

    const [movieList, updateMovieList] = useState([]);
    const [selectedMovie, onMovieSelect] = useState();

    const [timeoutId, updateTimeoutId] = useState();
    const [loading, setLoading] = useState(false);

    const fetchData = async (searchString) => {
        setLoading(true);
        const response = await Axios.get(
            `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`,
        );
        updateMovieList(response.data.Search);
        setLoading(false);
    };

    const onTextChange = (e) => {
        onMovieSelect("")
        clearTimeout(timeoutId);
        updateSearchQuery(e.target.value);
        const timeout = setTimeout(() => fetchData(e.target.value), 400);
        updateTimeoutId(timeout);
    };


    return (
        <div className='navContainer'>
            <div className='header'>
                <div className='title'>
                    <img className='movieImage' src='/icon.png' alt='logo' />
                    Movie App
                </div>

                <div className='searchBox'>
                    <img src='/search.svg' alt='icon' />
                    <input
                        className='searchInput'
                        placeholder='Search Movie'
                        value={searchQuery}
                        onChange={onTextChange}
                    />
                </div>
            </div>
            {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie} onMovieSelect={onMovieSelect} />}
            <div className='movieListContainer'>
                {loading ? <LoadingSpinner /> : movieList?.length ? (
                    movieList.map((movie, index) => (
                        <MovieComponent
                            key={index}
                            movie={movie}
                            onMovieSelect={onMovieSelect}
                        />
                    ))
                ) : (
                    <div className='fillingText'> Search for the movie </div>
                )}
            </div>

        </div>
    );
}

export default App;
