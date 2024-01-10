import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from '../VideoTitle';
import VideoBackground from '../VideoBackground';

const MainContainer = () => {
    const { nowPlayingMovies } = useSelector(store => store.movies);
    // Early Return
    if (nowPlayingMovies === null) return;
    const backgroundMovie = nowPlayingMovies[0];
    const { original_title, overview, id } = backgroundMovie;
    return (
        <div className=''>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieId={id}/>
        </div>
    )
};

export default MainContainer;