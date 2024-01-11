import React from 'react'
import useFetchNowPlayingMovies from '../../hooks/useFetchNowPlayingMovies';
import MainContainer from '../../components/MainContainer';
import SecondaryContainer from '../../components/SecondayContainer';
import useFetchPopularMovies from '../../hooks/useFetchPolpularMovies';
import useFetchTopRatedMovies from '../../hooks/useFetchTopRatedMovies';
import useFetchUpcomingMovies from '../../hooks/useFetchUpcomingMovies';
import GPTSearch from '../../components/GPTSearch';
import { useSelector } from 'react-redux';

const Home = () => {
  const { showGPTSearch } = useSelector(store => store.gpt)
  useFetchNowPlayingMovies();
  useFetchPopularMovies();
  useFetchTopRatedMovies();
  useFetchUpcomingMovies();
  return (
    <div className='bg-black w-screen'>
      {showGPTSearch ?
        <GPTSearch /> :
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      }
    </div>
  )
};

export default Home;