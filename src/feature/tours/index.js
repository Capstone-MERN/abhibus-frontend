import "./Styles/index.scss";
import { FiltersWrapper } from "../filters";
import { useDispatch, useSelector } from "react-redux";
import { ToursList } from "./Components/ToursList";
import { Link, useParams } from "react-router-dom";
import { toursApiStatusSelector } from "./redux/selectors";
import { useEffect } from "react";
import { fetchAllTours } from "./redux/thunk";
import { ApiStatus } from "../../network/constants";
import { Empty } from "antd";

const Tours = () => {
  const { sourceCityId, destCityId, travelDate } = useParams();
  const apiStatus = useSelector(toursApiStatusSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTours(sourceCityId, destCityId, travelDate));
  }, []);

  if (apiStatus === ApiStatus.pending || apiStatus === ApiStatus.init) {
    return <h1>Loading..</h1>;
  }

  return <ToursWrapper />;
};

const ToursWrapper = () => {
  const tours = useSelector((state) => state.tours?.tours?.data?.tours);

  if (tours?.length > 0) {
    return (
      <div className="root-tours-container">
        <FiltersWrapper />
        <ToursList />
      </div>
    );
  }

  return (
    <>
      <Empty
        description={
          <p>
            No buses found for your search <Link to="/">Search Again</Link>
          </p>
        }
        style={{ margin: "auto" }}
      />
    </>
  );
};

export default Tours;
