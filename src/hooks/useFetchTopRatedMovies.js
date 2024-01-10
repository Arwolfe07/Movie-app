import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../store/movieSlice";
import { useEffect } from "react";

const useFetchTopRatedMovies = () => {
    const dispatch = useDispatch();
    const fetchMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    }
    
    useEffect(() => {
        fetchMovies();
    }, []);
}

export default useFetchTopRatedMovies;