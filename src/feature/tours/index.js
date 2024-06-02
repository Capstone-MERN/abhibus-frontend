import { useParams } from "react-router-dom";
import "./Styles/index.scss";
import { Filters } from "../filters";
import Tour from "./Components/Tour";
import { useSelector } from "react-redux";

const Tours = () => {
  // TODO: data should be coming from the redux store
  const { sourceCity, sourceCityId, destCity, destCityId,travelDate } = useParams();

  const {
    apiStatus,
    data: { tours },
  } = useSelector((state) => state.tours.tours);
  if (apiStatus === "pending" || apiStatus === "init") {
    return <h1>Loading..</h1>;
  }
  return (
    <div className="root-tours-container">
      <Filters />
      <div className="tours_container">
        {tours.map((tour) => (
          <Tour
            key={tour.tourId}
            tour={tour}
            sourceCity={sourceCity}
            destinationCity={destCity}
          />
        ))}
      </div>
    </div>
  );
};

export default Tours;
