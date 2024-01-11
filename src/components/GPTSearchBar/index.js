import React, { useRef } from 'react'
import openai from '../../utils/openai';
import { useDispatch } from 'react-redux';
import { setError, setLoading, setSuggestedMovies } from '../../store/gptSearchSlice';
import { API_OPTIONS } from '../../utils/constants';

const GPTSearchBar = () => {
    const searchData = useRef(null);
    const dispatch = useDispatch();

    const searchMoviesTMDB = async (movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&page=1', API_OPTIONS);
        const json = await data.json();
        return json.results;
    }

    const gptSearchHandler = async () => {
        // make API call to open AI
        dispatch(setLoading(true));
        try {
            
            const gptQuery = "Act as a movie recommendation system and suggest some movies for the query: " + searchData.current.value + " ony give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gaddar, Sholay, Don, Fast Five, Koi Mil Gaya"
            const gptResults = await openai.chat.completions.create({
                messages: [{ role: "user", content: gptQuery }],
                model: 'gpt-3.5-turbo'
            })
            const movies = gptResults.choices?.[0].message.content.split[',']
            // Will return promises or rather array of promises
            const data = movies.map((movie) => searchMoviesTMDB(movie));
            // Will resolve all promises
            const tmdbResults = Promise.all(data);
            dispatch(setSuggestedMovies({ suggestedMovies: tmdbResults, movieList: movies }));
            
        } catch (error) {
            // Setting fake data as OPEN_AI_API_KEY is not free to use anymore
            const movies = ["Mad Max: Fury Road", "John Wick", "Die Hard", "The Dark Knight", "Gladiator"]
            // Will return promises or rather array of promises
            
            const data = movies.map((movie) => searchMoviesTMDB(movie));
            // Will resolve all promises
            const tmdbResults = await Promise.all(data);
            dispatch(setSuggestedMovies({ suggestedMovies: tmdbResults, movieList: movies }));
            dispatch(setError(true));
        }
        dispatch(setLoading(false));
    }

    return (
        <form className='sm:w-5/6 xl:w-1/2 mx-auto flex px-2' onSubmit={(e) => e.preventDefault()}>
            <input className='w-full bg-gray-700 px-4 py-2 rounded-lg text-white mr-2' type='text' placeholder='What would you like to watch today? (Movie Suggestions)' ref={searchData} />
            <button className='bg-red-600 text-sm md:text-lg font-semibold px-2 md:px-6 text-white rounded-lg duration-150 hover:bg-red-500' onClick={gptSearchHandler}>Search</button>
        </form>
    )
};

export default GPTSearchBar;