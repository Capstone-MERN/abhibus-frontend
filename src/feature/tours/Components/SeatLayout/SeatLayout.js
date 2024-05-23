import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import SeatIndicators from "./SeatIndicators";
import PriceFilter from "./PriceFilter";
import Layout from "./Layout";
import "../../Styles/SeatLayout.scss";
import { layoutData } from "../../dummyData";
import { useDispatch } from "react-redux";
import { setPriceFilter } from "../../redux/slice";

const SeatLayout = ({ availableSeats, tourId }) => {
  const dispatch = useDispatch();
  const prices = useMemo(() => {
    const allPrices = [
      ...layoutData.layout.upperDeck.map((seat) => seat.price),
      ...layoutData.layout.lowerDeck.map((seat) => seat.price),
    ];
    return [...new Set(allPrices)].sort((a, b) => a - b);
  }, []);

  const handlePriceChange = (price) => {
    dispatch(setPriceFilter({ tourId, price }));
  };

  return (
    <div className="layout_container">
      <SeatIndicators availableSeats={availableSeats} />
      <PriceFilter
        tourId={tourId}
        prices={prices}
        handlePriceChange={handlePriceChange}
      />
      <Layout tourId={tourId} layoutData={layoutData} />
    </div>
  );
};

SeatLayout.propTypes = {
  availableSeats: PropTypes.number.isRequired,
  tourId: PropTypes.string.isRequired,
};

export default SeatLayout;
