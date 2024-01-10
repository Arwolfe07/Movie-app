import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../store/movieSlice";

const useFetchNowPlayingMovies = ()=>{
    const dispatch = useDispatch();
    const fetchMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    };
    useEffect(() => {
      fetchMovies();
    }, []);
};

export default useFetchNowPlayingMovies;