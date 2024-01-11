import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../store/movieSlice";

const useFetchNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const { nowPlayingMovies } = useSelector(store => store.movies);

  const fetchMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    !nowPlayingMovies && fetchMovies();
  }, []);
};

export default useFetchNowPlayingMovies;