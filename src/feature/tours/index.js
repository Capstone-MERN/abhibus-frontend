import Tour from "./Components/Tour";
import { data } from "./dummyData";

const Tours = () => {
  return (
    <div className="tours_container">
      {data.map((tour) => (
        <Tour
          key={tour.tourId}
          tour={tour}
          sourceCity={"Hyderabad"}
          destinationCity={"Bangelore"}
        />
      ))}
    </div>
  );
};

export default Tours;
