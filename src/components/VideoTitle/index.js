import React from 'react';
import { FaCircleInfo, FaPlay } from 'react-icons/fa6'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-full aspect-video pt-[15%] pl-24 absolute text-white bg-gradient-to-r from-black z-16'>

            <h1 className='text-4xl font-bold tracking-tight mb-6'>{title}</h1>
            <p className='text-lg w-1/4'>{overview}</p>

            <div className='flex my-8 w-1/3'>
                <button className='bg-gray-500 bg-opacity-50  flex items-center px-8 py-3 text-xl hover:bg-opacity-80 text-white font-semibold tracking-tight mx-2 rounded-md'><FaPlay className='mr-2' />Play</button>
                <button className='bg-gray-500 bg-opacity-50 flex items-center px-8 py-3 text-xl text-white font-semibold tracking-tight mx-2 hover:bg-opacity-80 duration-300 rounded-md'><FaCircleInfo className='mr-2' />More</button>
            </div>
        </div>
    )
};

export default VideoTitle;