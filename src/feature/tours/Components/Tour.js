import React, { useState } from "react";
import Amenities from "./Amenities";
import BoardingsAndDroppings from "./BoardingsAndDroppings";
import BottomSection from "./SeatLayout/BottomSection";
import "../Styles/Tour.scss";
import { CircleIcon, formatDate, formatTime } from "./constantfuncs";

const Tour = ({ tour, sourceCity, destinationCity }) => {
  const [showLayout, setShowLayout] = useState(false);

  const toggleLayout = () => {
    setShowLayout(!showLayout);
  };

  return (
    <div className="tour_container">
      <div className="tour_card">
        <div className="left_col">
          <div className="bus_details">
            <div>
              <b>{tour.busPartner}</b>
              <p className="light_color">{tour.busType}</p>
            </div>
            <div className="timings">
              <div>
                <p className="light_color">{formatDate(tour.startTime)}</p>
                <b>{formatTime(tour.startTime)}</b>
                <p className="light_color">{sourceCity}</p>
              </div>
              <div className="duration">
                <CircleIcon />
                <span className="dashed-line" />
                <div className="duration_time">{tour.duration}</div>
                <span className="dashed-line" />
                <CircleIcon />
              </div>
              <div>
                <p className="light_color">{formatDate(tour.endTime)}</p>
                <b>{formatTime(tour.endTime)}</b>
                <p className="light_color">{destinationCity}</p>
              </div>
            </div>
          </div>
          <div className="dropdowns">
            <BoardingsAndDroppings />
            <Amenities />
          </div>
        </div>
        <div className="right_col">
          <div className="price_card">
            <p>Starting At</p>
            <h5>
              <span className="material-icons">currency_rupee</span>
              {tour.minPrice}
            </h5>
          </div>
          <div className="seat_card">
            <button onClick={toggleLayout}>Show Seats</button>
            <p className="light_color">{tour.availableSeats} Seats Available</p>
          </div>
        </div>
      </div>
      {showLayout && (
        <BottomSection
          tourId={tour.tourId}
          availableSeats={tour.availableSeats}
          sourceStops={tour.sourceStops}
          destinationStops={tour.destinationStops}
        />
      )}
    </div>
  );
};

export default Tour;
