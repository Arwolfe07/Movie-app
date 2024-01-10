import React from 'react'
import useFetchNowPlayingMovies from '../../hooks/useFetchNowPlayingMovies';
import MainContainer from '../../components/MainContainer';
import SecondaryContainer from '../../components/SecondayContainer';
import useFetchPopularMovies from '../../hooks/useFetchPolpularMovies';
import useFetchTopRatedMovies from '../../hooks/useFetchTopRatedMovies';
import useFetchUpcomingMovies from '../../hooks/useFetchUpcomingMovies';

const Home = () => {
  useFetchNowPlayingMovies();
  useFetchPopularMovies();
  useFetchTopRatedMovies();
  useFetchUpcomingMovies();

  return (
    <div className='bg-black overflow-x-hidden'>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
};

export default Home;