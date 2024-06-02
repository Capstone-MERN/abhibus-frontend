import { useSelector } from "react-redux";
import Tour from "./Tour";
import { useParams } from "react-router-dom";
import { filteredToursSelector } from "../redux/selectors";

export const ToursList = () => {
  const { sourceCity, destCity } = useParams();
  const tours = useSelector(filteredToursSelector);

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
