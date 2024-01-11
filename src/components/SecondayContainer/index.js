import React from 'react'
import MovieList from '../MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)
  return (
    <>
      <div className='md:-mt-36 relative z-20'>
        {movies.nowPlayingMovies &&
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        }
        {movies.popularMovies &&
          <MovieList title={"Popular"} movies={movies?.popularMovies} />
        }
        {movies.topRatedMovies &&
          <MovieList title={"Top Rated Movies"} movies={movies?.topRatedMovies} />
        }
        {movies.upcomingMovies &&
          <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies} />
        }

      </div>
    </>
  )
};

export default SecondaryContainer;