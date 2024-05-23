import { useSelector } from "react-redux";

export const useBoarding = (tourId) =>
  useSelector((state) => state.tours.Boarding[tourId] || {});

export const useDropping = (tourId) =>
  useSelector((state) => state.tours.Dropping[tourId] || {});

export const useBoardingStops = () =>
  useSelector((state) => state.tours.BoardingStops);

export const useDroppingStops = () =>
  useSelector((state) => state.tours.DroppingStops);

export const useSelectedSeats = (tourId) =>
  useSelector((state) => state.tours.selectedSeats[tourId] || []);

export const usePriceFilter = (tourId) =>
  useSelector((state) => state.tours.priceFilter[tourId]);
