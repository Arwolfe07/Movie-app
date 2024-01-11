import React from 'react';
import { FaCircleInfo, FaPlay } from 'react-icons/fa6'

const VideoTitle = ({ title, overview }) => {
    const clickHandler = () =>{
        alert('They are just for show')
    }
    return (
        <div className='w-full aspect-video md:pt-[15%] pt-[30%] md:pl-24 pl-10 absolute text-white bg-gradient-to-r from-black z-16'>

            <h1 className='text-2xl md:text-4xl font-bold tracking-tight sm:mb-6'>{title}</h1>
            <p className='text-lg lg:w-1/4 md:w-1/2 hidden md:inline-block'>{overview}</p>

            <div className='flex lg:my-8 my-2 w-1/3'>
                <button className='bg-gray-500 bg-opacity-50  flex items-center px-3 md:px-8 py-1 md:py-3 md:text-xl hover:bg-opacity-80 text-white font-semibold tracking-tight mx-2 rounded-md' onClick={clickHandler}><FaPlay className='mr-2' />Play</button>
                <button className='bg-gray-500 bg-opacity-50 flex items-center px-3 md:px-8 py-1 md:py-3 md:text-xl text-white font-semibold tracking-tight mx-2 hover:bg-opacity-80 duration-300 rounded-md' onClick={clickHandler}><FaCircleInfo className='mr-2' />More</button>
            </div>
        </div>
    )
};

export default VideoTitle;