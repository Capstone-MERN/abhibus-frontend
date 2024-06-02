import React, { useEffect, useState } from "react";
import SeatIndicators from "./SeatIndicators";
import PriceFilter from "./PriceFilter";
import "../Styles/BottomSection.scss";
import { useDispatch, useSelector } from "react-redux";
import SeatLayout from "./SeatLayout";
import StopSelection from "./StopSelection";
import { useBoarding, useDropping, useSelectedSeats } from "../redux/selectors";
import { removeSeletedTour, setSelectedTour } from "../redux/slice";
import { useNavigate, useParams } from "react-router-dom";
import { setBookingInfo } from "../../Booking/redux/slice";

const BottomSection = ({ availableSeats, tour }) => {
  const [selectedPrice, setSelectedPrice] = useState("all");
  const { sourceCity, sourceCityId, destCity, destCityId } = useParams();
  const { tourId, startTime: travelTime, busType, busPartner, duration } = tour;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    apiStatus,
    data: { layout },
  } = useSelector((state) => state.tours.layouts[tourId]);

  const boarding = useBoarding(tourId);
  const dropping = useDropping(tourId);
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

  const handleContinueClick = () => {
    dispatch(
      setBookingInfo({
        sourceCity,
        destCity,
        service: tour,
        boarding,
        dropping,
        seats: selectedSeats,
      })
    );
    navigate(`/passengerInfo`);
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
        <StopSelection
          key={tourId}
          tourId={tourId}
          handleContinueClick={handleContinueClick}
        />
      </div>
    </div>
  );
};

export default BottomSection;