import React from 'react'
import { IMG_URL } from '../../utils/constants';

const MovieCard = ({ poster }) => {
  if (!poster) return;
  return (
    <div className='w-52 pr-4 cursor-pointer hover:scale-110 duration-300'>
      <img className='w-full lg:h-80 sm:h-60 h-44' src={IMG_URL + poster} alt='movie-img' />
    </div>
  )
};

export default MovieCard;