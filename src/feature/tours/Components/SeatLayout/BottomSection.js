import React from "react";
import SeatIndicators from "./SeatIndicators";
import "../../Styles/SeatLayout.scss";
import { useSelector } from "react-redux";
import { StopSelection } from "./StopSelection";
import { SeatLayout } from "./SeatLayout";

const stopPointsSelector = (state, tourId) => {
  let sourceStops, destinationStops;
  state.tours.tours?.data?.tours.forEach((tour) => {
    if (tourId === tour.tourId) {
      sourceStops = tour.sourceStops;
      destinationStops = tour.destinationStops;
    }
  });

  const boardingPoints = state.tours?.tours?.data?.boardingPoints;
  const droppingPoints = state.tours?.tours?.data?.droppingPoints;

  const source = [],
    dest = [];

  boardingPoints.forEach((boardingPoint) => {
    sourceStops.forEach((sourceStop) => {
      if (sourceStop.stopId === boardingPoint.stopId) {
        source.push({
          ...sourceStop,
          ...boardingPoint,
        });
      }
    });
  });

  droppingPoints.forEach((droppingPoint) => {
    destinationStops.forEach((destStop) => {
      if (destStop.stopId === droppingPoint.stopId) {
        dest.push({
          ...destStop,
          ...droppingPoint,
        });
      }
    });
  });

  return { boardingPoints: source, droppingPoints: dest };
};

const BottomSection = ({ availableSeats, tourId }) => {
  const {
    apiStatus,
    data: { layout },
  } = useSelector((state) => state.tours.layouts[tourId]);

  const { boardingPoints, droppingPoints } = useSelector((state) =>
    stopPointsSelector(state, tourId)
  );

  if (apiStatus === "init" || apiStatus === "pending" || !layout)
    return <h1>Loading...</h1>;
  return (
    <div className="layout">
      <div className="layout_container">
        <SeatIndicators availableSeats={availableSeats} />
        <SeatLayout seatLayout={layout} />
        <StopSelection
          boardingPoints={boardingPoints}
          droppingPoints={droppingPoints}
        />
      </div>
    </div>
  );
};

export default BottomSection;
