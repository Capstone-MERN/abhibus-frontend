import { PassengerDetails } from "./PassangerDetails";
import { TripDetails } from "./TripDetails";

const BookingScreen = () => {
  return (
    <div>
      <TripDetails />
      <PassengerDetails seatsInfo={["D4", "D5", "D8"]} />
    </div>
  );
};

export default BookingScreen;
