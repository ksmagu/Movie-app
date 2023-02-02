import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { API_KEY } from '../../App';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import './movieInfoComponent.scss';


const MovieInfoComponent = (props) => {
    const [movieInfo, setMovieInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { selectedMovie } = props;

    useEffect(() => {
        setIsLoading(true);
        Axios.get(
            `https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`
        ).then((response) => {
            setMovieInfo(response.data);
            setIsLoading(false);
        });
    }, [selectedMovie]);

    return (
        <div className='movieInfoContainer'>
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <>
                    <img
                        className='coverImage'
                        src={movieInfo.Poster}
                        alt={movieInfo.Title}
                    />
                    <div className='infoColumn'>
                        <span className='movieInfoName'>
                            {movieInfo.Type}: <span>{movieInfo.Title}</span>
                        </span>
                        <span className='movieInfo'>
                            IMDB Rating: <span>{movieInfo.imdbRating}</span>
                        </span>
                        <span className='movieInfo'>
                            Year: <span>{movieInfo.Year}</span>
                        </span>
                        <span className='movieInfo'>
                            Language: <span>{movieInfo.Language}</span>
                        </span>
                        <span className='movieInfo'>
                            Rated: <span>{movieInfo.Rated}</span>
                        </span>
                        <span className='movieInfo'>
                            Released: <span>{movieInfo.Released}</span>
                        </span>
                        <span className='movieInfo'>
                            Runtime: <span>{movieInfo.Runtime}</span>
                        </span>
                        <span className='movieInfo'>
                            Genre: <span>{movieInfo.Genre}</span>
                        </span>
                        <span className='movieInfo'>
                            Director: <span>{movieInfo.Director}</span>
                        </span>
                        <span className='movieInfo'>
                            Actors: <span>{movieInfo.Actors}</span>
                        </span>
                        <span className='movieInfo'>
                            Plot: <span>{movieInfo.Plot}</span>
                        </span>
                    </div>
                    <div
                        className='close'
                        onClick={() => props.onMovieSelect()}
                    >
                        X
                    </div>
                </>
            )}
        </div>
    );
};

export default MovieInfoComponent;
