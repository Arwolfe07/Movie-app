import React from 'react'
import GPTSearchBar from '../GPTSearchBar';
import GPTSuggestions from '../GPTSuggestions';

const GPTSearch = () => {
    return (
        <div className='pt-32 sm:pt-24 w-screen min-h-screen'>
            <GPTSearchBar />
            <GPTSuggestions/>
        </div>
    )
};

export default GPTSearch;