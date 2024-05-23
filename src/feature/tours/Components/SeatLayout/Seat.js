import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { addSelectedSeat, removeSelectedSeat } from "../../redux/slice";
import { SeatIcon } from "../constantfuncs";
import { usePriceFilter } from "../../redux/selectors";

const Seat = ({ seat, tourId }) => {
  const [selected, setSelected] = useState(false);
  const selectedPrice = usePriceFilter(tourId);
  const dispatch = useDispatch();

  const handleSelect = () => {
    if (selected) {
      dispatch(removeSelectedSeat({ tourId, seatNumber: seat.seatNumber }));
    } else {
      dispatch(addSelectedSeat({ tourId, seatDetails: seat }));
    }
    setSelected(!selected);
  };

  const setFillColor = () => {
    return selected ? "#D8F2E2" : seat.gender ? "#DEDEDE" : "#FFFFFF";
  };

  const setStrokeColor = () => {
    return selected
      ? "#3DC070"
      : selectedPrice == seat.price
      ? "#3AB56A"
      : "#C6C6C6";
  };

  return (
    <button className="seat" onClick={handleSelect} disabled={!!seat.gender}>
      <SeatIcon
        seatType={seat.seatType}
        fill={setFillColor()}
        stroke={setStrokeColor()}
        filter={selectedPrice == seat.price}
        selected={selected}
        gender={seat.gender}
      />
      <span className="seat_number">{seat.seatNumber}</span>
    </button>
  );
};

Seat.propTypes = {
  seat: PropTypes.shape({
    seatNumber: PropTypes.number.isRequired,
    seatType: PropTypes.string.isRequired,
    gender: PropTypes.string,
  }).isRequired,
  tourId: PropTypes.string.isRequired,
};

export default Seat;
