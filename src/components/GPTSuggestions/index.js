import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from '../MovieList';
import ShimmerUI from '../ShimmerUI';

const GPTSuggestions = () => {
    const { suggestedMovies, movieList, isLoading, isError } = useSelector(store => store.gpt);

console.log(isError)
    return (
        <div className='lg:w-5/6 rounded-lg mt-4 mx-auto p-4'>
            {isError && <p className='text-center text-red-500 text-sm'>*The API_KEY for Open AI is now paid so showing default results.</p>}
            {isLoading && <ShimmerUI />}
            {!isLoading &&
                movieList?.map((movie, index) => (
                    <MovieList title={movie} movies={suggestedMovies[index]} key={index}/>
                ))
            }
        </div>
    )
};

export default GPTSuggestions;