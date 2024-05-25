import React, { useMemo } from "react";
import PropTypes from "prop-types";

const SelectedSeatCard = ({ boarding, dropping, selectedSeats }) => {
  const isPointsSelected =
    boarding?.stopId && dropping?.stopId && selectedSeats?.length > 0;

  const totalPrice =
    selectedSeats?.length > 0
      ? selectedSeats.reduce((sum, seat) => sum + seat.price, 0)
      : 0;

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

// SelectedSeatCard.propTypes = {
//   tourId: PropTypes.string.isRequired,
// };

export default SelectedSeatCard;
