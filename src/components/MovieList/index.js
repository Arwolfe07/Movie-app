import React from 'react'
import MovieCard from '../MovieCard';

const MovieList = ({ title, movies }) => {
  return (
    
    <div className='sm:p-6 p-2 text-white'>
        <h1 className='py-4 text-xl md:text-2xl font-bold tracking-tight'>{title}</h1>
      <div className='flex overflow-x-scroll container'>
        <div className='flex'>
          {movies.map((movie) => (<MovieCard key={movie.id} poster={movie.poster_path}/>))}
        </div>
      </div>
    </div>
  )
};

export default MovieList;