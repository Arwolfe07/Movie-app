import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../store/movieSlice";
import { useEffect } from "react";

const useFetchPopularMovies = () => {
  const dispatch = useDispatch();
  const { popularMovies } = useSelector(store => store.movies);

  const fetchMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  }
  useEffect(() => {
    !popularMovies && fetchMovies();
  }, []);
}

export default useFetchPopularMovies;