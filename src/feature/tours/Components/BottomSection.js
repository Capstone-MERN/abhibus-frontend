import React, { useEffect, useState } from "react";
import SeatIndicators from "./SeatIndicators";
import PriceFilter from "./PriceFilter";
import "../Styles/BottomSection.scss";
import { useDispatch, useSelector } from "react-redux";
import SeatLayout from "./SeatLayout";
import StopSelection from "./StopSelection";
import { useSelectedSeats } from "../redux/selectors";
import { removeSeletedTour, setSelectedTour } from "../redux/slice";

const BottomSection = ({ availableSeats, tourId }) => {
  const [selectedPrice, setSelectedPrice] = useState("all");
  const dispatch = useDispatch();

  const {
    apiStatus,
    data: { layout },
  } = useSelector((state) => state.tours.layouts[tourId]);

  const selectedSeats = useSelectedSeats(tourId);

  useEffect(() => {
    dispatch(setSelectedTour({ tourId }));

    return () => dispatch(removeSeletedTour({ tourId }));
  }, []);

  
  if (apiStatus === "init" || apiStatus === "pending" || !layout)
    return <h1>Loading...</h1>;

  const prices = (() => {
    const allPrices = [
      ...layout.upperDeck.map((seat) => seat.price),
      ...layout.lowerDeck.map((seat) => seat.price),
    ];
    return [...new Set(allPrices)].sort((a, b) => a - b);
  })();

  const handlePriceChange = (price) => {
    setSelectedPrice(price);
  };

  return (
    <div className="layout_container">
      <SeatIndicators availableSeats={availableSeats} />
      <PriceFilter
        prices={prices}
        handlePriceChange={handlePriceChange}
        selectedPrice={selectedPrice}
        selectedSeats={selectedSeats}
      />
      <div className="seat_layout">
        <SeatLayout
          seatLayout={layout}
          tourId={tourId}
          selectedPrice={selectedPrice}
        />
        <StopSelection key={tourId} tourId={tourId} />
      </div>
    </div>
  );
};


export default BottomSection;
