import { useDispatch, useSelector } from "react-redux";
import { fetchCities } from "./redux/thunk";
import { citiesApiStatusSelector, citiesSelector } from "./redux/selectors";

const TourSearch = () => {
  const apiSatatus = useSelector(citiesApiStatusSelector);
  const cities = useSelector(citiesSelector);

  const dispatch = useDispatch();

  useDispatch(() => {
    dispatch(fetchCities);
  }, []);

  return null;
};

export default TourSearch;
