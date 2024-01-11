import React from 'react'
import { useSelector } from 'react-redux';
import useAddTrailer from '../../hooks/useAddTrailer';

const VideoBackground = ({ movieId }) => {
    const trailer = useSelector(store => store.movies.trailer);
    useAddTrailer(movieId);

    return (
        <iframe className='w-screen aspect-video min-h-3/4' src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&playlist=${trailer?.key}&loop=1&fs=1&end=120`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      
    );
};

export default VideoBackground;