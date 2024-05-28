import { useSelector } from "react-redux";

export const useBoarding = (tourId) =>
  useSelector((state) => state.tours.selectedTour[tourId]?.boardingPoint || {});

export const useDropping = (tourId) =>
  useSelector((state) => state.tours.selectedTour[tourId]?.droppingPoint || {});

export const useSelectedSeats = (tourId) =>
  useSelector((state) => state.tours.selectedTour[tourId]?.seats || []);

export const stopPointsSelector = (state, tourId) => {
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
