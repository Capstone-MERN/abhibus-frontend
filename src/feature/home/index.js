import { useEffect } from "react";
import TourSearch from "./TourSearch";
import { fetchCities } from "./redux/thunk";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const apiStatus = useSelector(state => state.search.apiStatus);
  
  useEffect(() => {
    dispatch(fetchCities)
  }, [dispatch])

  if(apiStatus === "init" || apiStatus === "pending") {
    return <h1>Loading ..</h1>
  }

  if(apiStatus === "error") return <p>Error</p>

  return (
    <>
      <TourSearch />
    </>
  );
};

export default Home;
