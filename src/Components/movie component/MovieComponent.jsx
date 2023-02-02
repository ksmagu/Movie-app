import React from 'react';
import './movieComponent.scss';
import noImage from './movieimg.png';

const MovieComponent = (props) => {
    const { Title, Year, imdbID, Type, Poster } = props.movie;
    const PosterExists = Poster !== 'N/A';
    return (
        <div
            className='movieContainer'
            onClick={() => {
                props.onMovieSelect(imdbID);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
        >
            <img
                className='coverImage'
                src={PosterExists ? Poster : noImage}
                alt={Title}
            />
            <div className='movieName'>{Title}</div>
            <div className='movieInfoColumn'>
                <span className='movieDetails'>Year : {Year}</span>
                <span className='movieDetails'>Type : {Type}</span>
            </div>
        </div>
    );
};
export default MovieComponent;
