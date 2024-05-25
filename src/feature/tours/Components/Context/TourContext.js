// src/contexts/TourIdContext.js
import React, { createContext, useContext } from 'react';

const TourIdContext = createContext();

export const TourIdProvider = ({ tourId, children }) => (
  <TourIdContext.Provider value={tourId}>
    {children}
  </TourIdContext.Provider>
);

export const useTourId = () => {
  return useContext(TourIdContext);
};
