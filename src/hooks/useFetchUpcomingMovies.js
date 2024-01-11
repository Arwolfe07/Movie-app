import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../store/movieSlice";

const useFetchUpcomingMovies = () => {
  const dispatch = useDispatch();
  const { upcomingMovies } = useSelector(store => store.movies);

  const fetchMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };
  useEffect(() => {
    !upcomingMovies && fetchMovies();
  }, []);
};

export default useFetchUpcomingMovies;