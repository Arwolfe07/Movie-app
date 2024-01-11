import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../store/movieSlice";

const useAddTrailer = (movieId) => {

    const dispatch = useDispatch();
    const { trailer } = useSelector(store => store.movies);

    const getMovieTrailer = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS)
        const json = await data.json();
        const filterData = json.results.filter(video => video.type === 'Trailer');
        const trailer = filterData.length !== 0 ? filterData[0] : json.results[0]; // taking first video as trailer in case of multiple trailers
        dispatch(addTrailer(trailer));
    };

    useEffect(() => {
        !trailer && getMovieTrailer();
    }, []);
}

export default useAddTrailer;