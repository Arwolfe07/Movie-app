import React from 'react'
import { IMG_URL } from '../../utils/constants';

const MovieCard = ({poster}) => {
  return (
    <div className='pr-4'>
      <img className='min-w-52' src={IMG_URL+poster} alt='movie-img'/>
    </div>
  )
};

export default MovieCard;