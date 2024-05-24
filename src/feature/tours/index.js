import { useSelector } from "react-redux";
import Tour from "./Components/Tour";
import { useParams } from "react-router-dom";

const Tours = () => {
  // TODO: data should be coming from the redux store
  const { sourceCity, sourceCityId, destCity, destCityId } = useParams();

  const {
    apiStatus,
    data: { tours },
  } = useSelector((state) => state.tours.tours);
  if (apiStatus === "pending" || apiStatus === "init") {
    return <h1>Loading..</h1>;
  }

  return (
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
  );
};

export default Tours;
