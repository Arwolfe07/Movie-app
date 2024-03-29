import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../store/movieSlice";
import { useEffect } from "react";

const useFetchTopRatedMovies = () => {
    const dispatch = useDispatch();
    const { topRatedMovies } = useSelector(store => store.movies);

    const fetchMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    }

    useEffect(() => {
        !topRatedMovies && fetchMovies();
    }, []);
}

export default useFetchTopRatedMovies;