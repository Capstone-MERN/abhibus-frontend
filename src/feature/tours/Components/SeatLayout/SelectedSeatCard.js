import React, { useMemo } from "react";
import PropTypes from "prop-types";
import {
  useBoarding,
  useDropping,
  useSelectedSeats,
} from "../../redux/selectors";

const SelectedSeatCard = ({ tourId }) => {
  const boarding = useBoarding(tourId);
  const dropping = useDropping(tourId);
  const selectedSeats = useSelectedSeats(tourId);

  const isPointsSelected = useMemo(() => {
    return boarding.stopId && dropping.stopId && selectedSeats.length > 0;
  }, [boarding.stopId, dropping.stopId, selectedSeats]);

  const totalPrice = useMemo(() => {
    return selectedSeats.reduce((sum, seat) => sum + seat.price, 0);
  }, [selectedSeats]);

  return (
    <>
      <div>
        <p>
          Seats Selected :{" "}
          {selectedSeats.map((seat, index) => (
            <span key={seat.seatNumber}>
              {seat.seatNumber}
              {index !== selectedSeats.length - 1 && ","}
            </span>
          ))}
        </p>
        <p>
          Base Fare : <span>{totalPrice}</span>
        </p>
      </div>
      <button
        className={isPointsSelected ? "enabled" : "disabled"}
        disabled={!isPointsSelected}
      >
        Continue
      </button>
    </>
  );
};

SelectedSeatCard.propTypes = {
  tourId: PropTypes.string.isRequired,
};

export default SelectedSeatCard;
